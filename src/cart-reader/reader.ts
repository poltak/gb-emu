import { asciiBytesToString } from '../lib/ascii-bytes-to-string.ts'
import { NINTENDO_LOGO } from './constants.ts'

export interface CartHeader {
    nintendoLogoExists: boolean
    title: string
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

    readCartHeader(): CartHeader {
        return {
            nintendoLogoExists: this.doesNintendoLogoExist(),
            title: this.readCartTitle(),
        }
    }
}
