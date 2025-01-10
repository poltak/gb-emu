export function asciiBytesToString(
    bytes: Uint8Array,
    opts?: { removeNulls?: boolean },
): string {
    let result = String.fromCharCode(...bytes)
    if (opts?.removeNulls) {
        result = result.replace(/\0/g, '')
    }
    return result
}
