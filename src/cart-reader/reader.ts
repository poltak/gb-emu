import { asciiBytesToString } from '../lib/ascii-bytes-to-string.ts'
import { calculateChecksum } from './checksum.ts'
import { RAM_BANK_SIZE, RAM_SIZES, ROM_BANK_SIZE } from './constants.ts'
import { ROM_SIZES } from './constants.ts'
import {
    CARTRIDGE_TYPES,
    NEW_LICENSEE_CODES,
    NEW_LICENSEE_CODES_CHECK,
    NINTENDO_LOGO,
    OLD_LICENSEE_CODES,
} from './constants.ts'

type ColorMode = 'color' | 'monochrome'
type SuperGameBoySupport = 'none' | 'supported' | 'ignored-command-packets'
type CartridgeType = (typeof CARTRIDGE_TYPES)[keyof typeof CARTRIDGE_TYPES]
type RomSize = { bytes: number; banks: number }
type Destination = 'Japan' | 'Overseas'

export interface CartHeader {
    superGameBoySupport: SuperGameBoySupport
    nintendoLogoExists: boolean
    cartType: CartridgeType
    colorMode: ColorMode
    licensee: string
    romSize: RomSize
    ramSize: RomSize
    destination: Destination
    title: string
    checksumMatches: boolean
    maskRomVersionNumber: number
}

export async function readCart(pathToCart: string): Promise<Uint8Array> {
    const file = await Deno.open(pathToCart)
    const fileStat = await file.stat()
    const data = new Uint8Array(fileStat.size)
    await file.read(data)
    file.close()
    return data
}

export class CartDecoder {
    constructor(private data: Uint8Array) {}

    private doesNintendoLogoExist(): boolean {
        for (let i = 0; i < NINTENDO_LOGO.length; i++) {
            if (this.data[0x0104 + i] !== NINTENDO_LOGO[i]) {
                return false
            }
        }
        return true
    }

    private readCartTitle(): string {
        let titleSlice = this.data.slice(0x0134, 0x0143)
        return asciiBytesToString(titleSlice, { removeNulls: true })
    }

    private readColorMode(): ColorMode {
        let colorMode = this.data[0x0143]
        return colorMode === 0x80 || colorMode === 0xc0 ? 'color' : 'monochrome'
    }

    private readLicensee(): string {
        let oldLicenseeCode = this.data[0x014b]
        if (oldLicenseeCode === NEW_LICENSEE_CODES_CHECK) {
            let newLicenseeCode = this.data[0x0144]
            return NEW_LICENSEE_CODES[newLicenseeCode] ?? 'Unknown (new)'
        }
        return OLD_LICENSEE_CODES[oldLicenseeCode] ?? 'Unknown (old)'
    }

    private readSuperGameBoySupport(): SuperGameBoySupport {
        let superGameBoySupport = this.data[0x0146]
        if (superGameBoySupport === 0x03) {
            return 'supported'
        }
        if (superGameBoySupport === 0x00) {
            return 'ignored-command-packets'
        }
        return 'none'
    }

    private readCartType(): CartridgeType {
        let cartType = this.data[0x0147]
        let cartTypeString = CARTRIDGE_TYPES[cartType]
        if (cartTypeString == null) {
            throw new Error(`Unknown cart type: ${cartType.toString(16)}`)
        }
        return cartTypeString as CartridgeType
    }

    private readRomSize(): RomSize {
        let romSize = this.data[0x0148]
        let romSizeString = ROM_SIZES[romSize]
        if (romSizeString == null) {
            throw new Error(`Unknown ROM size: ${romSize.toString(16)}`)
        }
        return { bytes: romSizeString, banks: romSizeString / ROM_BANK_SIZE }
    }

    private readRamSize(): RomSize {
        let ramSize = this.data[0x0149]
        let ramSizeString = RAM_SIZES[ramSize]
        if (ramSizeString == null) {
            throw new Error(`Unknown RAM size: ${ramSize.toString(16)}`)
        }
        return { bytes: ramSizeString, banks: ramSizeString / RAM_BANK_SIZE }
    }

    private readDestination(): Destination {
        let destination = this.data[0x014a]
        return destination === 0x00 ? 'Japan' : 'Overseas'
    }

    private readMaskRomVersionNumber(): number {
        return this.data[0x014c]
    }

    private readChecksum(): boolean {
        let checksum = this.data[0x014d]
        let calculatedChecksum = calculateChecksum(this.data)
        // We only want the lower 8 bits of the checksum, as this is an 8-bit system
        let maskedChecksum = calculatedChecksum & 0xff
        return checksum === maskedChecksum
    }

    readCartHeader(): CartHeader {
        return {
            maskRomVersionNumber: this.readMaskRomVersionNumber(),
            superGameBoySupport: this.readSuperGameBoySupport(),
            nintendoLogoExists: this.doesNintendoLogoExist(),
            checksumMatches: this.readChecksum(),
            destination: this.readDestination(),
            colorMode: this.readColorMode(),
            cartType: this.readCartType(),
            licensee: this.readLicensee(),
            title: this.readCartTitle(),
            romSize: this.readRomSize(),
            ramSize: this.readRamSize(),
        }
    }
}
