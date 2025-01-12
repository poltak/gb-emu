export function calculateChecksum(data: Uint8Array): number {
    let checksum = 0
    for (let address = 0x0134; address <= 0x014c; address++) {
        checksum = checksum - data[address] - 1
    }
    return checksum
}
