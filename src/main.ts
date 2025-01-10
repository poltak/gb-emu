import { CartDecoder, CartHeader, readCart } from './cart-reader/reader.ts'

export async function testRomRead(
    pathToRom: string,
    expectedHeader: CartHeader,
) {
    let romData = await readCart(pathToRom)
    let reader = new CartDecoder(romData)
    let header = reader.readCartHeader()

    console.log('ROM HEADER:\n', header)
}

async function main() {
    const pathToRom = Deno.args[0]
    await testRomRead(pathToRom)
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    await main()
}
