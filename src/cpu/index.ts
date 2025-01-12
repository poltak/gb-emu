export interface CPURegisterInterface {
    a: number
    b: number
    c: number
    d: number
    e: number
    h: number
    l: number
    f: number
    pc: number
    sp: number
    reset(): void
    readonly flags: FlagsRegister
}

export interface FlagsRegisterInterface {
    readonly zero: boolean
    readonly carry: boolean
    readonly subtract: boolean
    readonly halfCarry: boolean
}

const FLAG_MASKS = {
    zero: 0b1000_0000,
    carry: 0b0001_0000,
    halfCarry: 0b0010_0000,
    subtract: 0b0100_0000,
}

class FlagsRegister implements FlagsRegisterInterface {
    constructor(private value: number) {}

    get zero(): boolean {
        return (this.value & FLAG_MASKS.zero) !== 0
    }

    get carry(): boolean {
        return (this.value & FLAG_MASKS.carry) !== 0
    }

    get halfCarry(): boolean {
        return (this.value & FLAG_MASKS.halfCarry) !== 0
    }

    get subtract(): boolean {
        return (this.value & FLAG_MASKS.subtract) !== 0
    }
}

export class CPURegisters implements CPURegisterInterface {
    private registers: Uint8Array
    flags: FlagsRegister

    constructor() {
        /*
         * The first 8-elements are the 8-bit registers A, B, C, D, E, H, L, F.
         * The last 4-elements make the 2 16-bit registers PC and SP.
         */
        this.registers = new Uint8Array(12)

        this.flags = new FlagsRegister(this.f)
    }

    reset(): void {
        this.registers.fill(0)
    }

    // 16-bit register pair getters/setters
    get pc(): number {
        let low = this.registers[8]
        let high = this.registers[9]

        return (high << 8) | low
    }
    set pc(value: number) {
        let low = value & 0xff
        let high = (value >> 8) & 0xff

        this.registers[8] = low
        this.registers[9] = high
    }

    get sp(): number {
        let low = this.registers[10]
        let high = this.registers[11]

        return (high << 8) | low
    }
    set sp(value: number) {
        let low = value & 0xff
        let high = (value >> 8) & 0xff

        this.registers[10] = low
        this.registers[11] = high
    }

    // 8-bit register getters/setters
    get a(): number {
        return this.registers[0]
    }
    set a(value: number) {
        this.registers[0] = value & 0xff
    }

    get b(): number {
        return this.registers[1]
    }
    set b(value: number) {
        this.registers[1] = value & 0xff
    }

    get c(): number {
        return this.registers[2]
    }
    set c(value: number) {
        this.registers[2] = value & 0xff
    }

    get d(): number {
        return this.registers[3]
    }
    set d(value: number) {
        this.registers[3] = value & 0xff
    }

    get e(): number {
        return this.registers[4]
    }
    set e(value: number) {
        this.registers[4] = value & 0xff
    }

    get h(): number {
        return this.registers[5]
    }
    set h(value: number) {
        this.registers[5] = value & 0xff
    }

    get l(): number {
        return this.registers[6]
    }
    set l(value: number) {
        this.registers[6] = value & 0xff
    }

    get f(): number {
        return this.registers[7]
    }
    set f(value: number) {
        this.registers[7] = value & 0xff
    }
}
