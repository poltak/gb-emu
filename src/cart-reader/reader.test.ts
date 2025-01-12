import { assertEquals } from '@std/assert'
import { CartDecoder, readCart } from './reader.ts'

Deno.test('read tetris', async () => {
    let cartData = await readCart('roms/tetris.gb')

    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        maskRomVersionNumber: 1,
        nintendoLogoExists: true,
        title: 'TETRIS',
        colorMode: 'monochrome',
        licensee: 'Nintendo',
        superGameBoySupport: 'ignored-command-packets',
        cartType: 'ROM ONLY',
        romSize: { bytes: 32 * 1024, banks: 2 },
        ramSize: { bytes: 0, banks: 0 },
        destination: 'Japan',
    })
})

Deno.test('read zelda', async () => {
    let cartData = await readCart('roms/zelda.gb')

    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        maskRomVersionNumber: 2,
        nintendoLogoExists: true,
        title: 'ZELDA',
        colorMode: 'monochrome',
        licensee: 'Nintendo',
        superGameBoySupport: 'ignored-command-packets',
        cartType: 'MBC1+RAM+BATTERY',
        romSize: { bytes: 512 * 1024, banks: 32 },
        ramSize: { bytes: 8 * 1024, banks: 1 },
        destination: 'Overseas',
    })
})

Deno.test('read pokemon blue', async () => {
    let cartData = await readCart('roms/pokemon.gb')
    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        maskRomVersionNumber: 0,
        nintendoLogoExists: true,
        title: 'POKEMON BLUE',
        colorMode: 'monochrome',
        licensee: 'Viacom',
        superGameBoySupport: 'supported',
        cartType: 'MBC3+RAM+BATTERY',
        romSize: { bytes: 1024 * 1024, banks: 64 },
        ramSize: { bytes: 32 * 1024, banks: 4 },
        destination: 'Overseas',
    })
})

Deno.test('read pokemon crystal', async () => {
    let cartData = await readCart('roms/crystal.gbc')
    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        maskRomVersionNumber: 1,
        nintendoLogoExists: true,
        title: 'PM_CRYSTALBYTE',
        colorMode: 'color',
        licensee: 'Viacom',
        superGameBoySupport: 'ignored-command-packets',
        cartType: 'MBC3+TIMER+RAM+BATTERY',
        romSize: { bytes: 2048 * 1024, banks: 128 },
        ramSize: { bytes: 32 * 1024, banks: 4 },
        destination: 'Overseas',
    })
})
