import { assertEquals } from '@std/assert'
import { CartDecoder, readCart } from './reader.ts'

Deno.test('read zelda', async () => {
    let cartData = await readCart('roms/zelda.gb')

    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        nintendoLogoExists: true,
        title: 'ZELDA',
    })
})

Deno.test('read pokemon', async () => {
    let cartData = await readCart('roms/pokemon.gb')
    let decoder = new CartDecoder(cartData)
    let header = decoder.readCartHeader()

    assertEquals(header, {
        nintendoLogoExists: true,
        title: 'POKEMON BLUE',
    })
})
