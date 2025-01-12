export const CARTRIDGE_TYPES: { [key: number]: string } = {
    0x00: 'ROM ONLY',
    0x01: 'MBC1',
    0x02: 'MBC1+RAM',
    0x03: 'MBC1+RAM+BATTERY',
    0x05: 'MBC2',
    0x06: 'MBC2+BATTERY',
    0x08: 'ROM+RAM',
    0x09: 'ROM+RAM+BATTERY',
    0x0b: 'MMM01',
    0x0c: 'MMM01+RAM',
    0x0d: 'MMM01+RAM+BATTERY',
    0x0f: 'MBC3+TIMER+BATTERY',
    0x10: 'MBC3+TIMER+RAM+BATTERY',
    0x11: 'MBC3',
    0x12: 'MBC3+RAM',
    0x13: 'MBC3+RAM+BATTERY',
    0x19: 'MBC5',
    0x1a: 'MBC5+RAM',
    0x1b: 'MBC5+RAM+BATTERY',
    0x1c: 'MBC5+RUMBLE',
    0x1d: 'MBC5+RUMBLE+RAM',
    0x1e: 'MBC5+RUMBLE+RAM+BATTERY',
    0x20: 'MBC6',
    0x22: 'MBC7+SENSOR+RUMBLE+RAM+BATTERY',
    0xfc: 'POCKET CAMERA',
    0xfd: 'BANDAI TAMA5',
    0xfe: 'HuC3',
    0xff: 'HuC1+RAM+BATTERY',
} as const

export const NEW_LICENSEE_CODES: { [key: number]: string } = {
    0x00: 'None',
    0x01: 'Nintendo R&D1',
    0x08: 'Capcom',
    0x13: 'Electronic Arts',
    0x18: 'Hudson Soft',
    0x19: 'b-ai',
    0x20: 'kss',
    0x22: 'pow',
    0x24: 'PCM Complete',
    0x25: 'san-x',
    0x28: 'Kemco Japan',
    0x29: 'seta',
    0x30: 'Viacom',
    0x31: 'Nintendo',
    0x32: 'Bandai',
    0x33: 'Ocean/Acclaim',
    0x34: 'Konami',
    0x35: 'Hector',
    0x37: 'Taito',
    0x38: 'Hudson',
    0x39: 'Banpresto',
    0x41: 'Ubi Soft',
    0x42: 'Atlus',
    0x44: 'Malibu',
    0x46: 'angel',
    0x47: 'Bullet-Proof',
    0x49: 'irem',
    0x50: 'Absolute',
    0x51: 'Acclaim',
    0x52: 'Activision',
    0x53: 'American sammy',
    0x54: 'Konami',
    0x55: 'Hi tech entertainment',
    0x56: 'LJN',
    0x57: 'Matchbox',
    0x58: 'Mattel',
    0x59: 'Milton Bradley',
    0x60: 'Titus',
    0x61: 'Virgin',
    0x64: 'LucasArts',
    0x67: 'Ocean',
    0x69: 'Electronic Arts',
    0x70: 'Infogrames',
    0x71: 'Interplay',
    0x72: 'Broderbund',
    0x73: 'sculptured',
    0x75: 'sci',
    0x78: 'THQ',
    0x79: 'Accolade',
    0x80: 'misawa',
    0x83: 'lozc',
    0x86: 'Tokuma Shoten',
    0x87: 'tsukuda ori',
    0x91: 'Chunsoft',
    0x92: 'Video system',
    0x93: 'Ocean/Acclaim',
    0x95: 'Varie',
    0x96: "Yonezawa/s'pal",
    0x97: 'Kaneko',
    0x99: 'Pack in soft',
    0xa4: 'Konami (Yu-Gi-Oh!)',
} as const

export const NEW_LICENSEE_CODES_CHECK = 0x33

export const OLD_LICENSEE_CODES: { [key: number]: string } = {
    0x00: 'None',
    0x01: 'Nintendo',
    0x08: 'Capcom',
    0x09: 'Hot-B',
    0x0a: 'Jaleco',
    0x0b: 'Coconuts Japan',
    0x0c: 'Elite Systems',
    0x13: 'Electronic Arts',
    0x18: 'Hudson Soft',
    0x19: 'ITC Entertainment',
    0x1a: 'Yanoman',
    0x1d: 'Clary',
    0x1f: 'Virgin',
    0x24: 'PCM Complete',
    0x25: 'San-X',
    0x28: 'Kotobuki Systems',
    0x29: 'Seta',
    0x30: 'Infogrames',
    0x31: 'Nintendo',
    0x32: 'Bandai',
    0x33: 'Indicates new licensee code used', // Special case - means to use new licensee code instead
    0x34: 'Konami',
    0x35: 'HectorSoft',
    0x38: 'Capcom',
    0x39: 'Banpresto',
    0x3c: '*Entertainment i',
    0x3e: 'Gremlin',
    0x41: 'Ubisoft',
    0x42: 'Atlus',
    0x44: 'Malibu',
    0x46: 'Angel',
    0x47: 'Spectrum Holoby',
    0x49: 'Irem',
    0x4a: 'Virgin',
    0x4d: 'Malibu',
    0x4f: 'U.S. Gold',
    0x50: 'Absolute',
    0x51: 'Acclaim',
    0x52: 'Activision',
    0x53: 'American Sammy',
    0x54: 'GameTek',
    0x55: 'Park Place',
    0x56: 'LJN',
    0x57: 'Matchbox',
    0x59: 'Milton Bradley',
    0x5a: 'Mindscape',
    0x5b: 'Romstar',
    0x5c: 'Naxat Soft',
    0x5d: 'Tradewest',
    0x60: 'Titus',
    0x61: 'Virgin',
    0x67: 'Ocean',
    0x69: 'Electronic Arts',
    0x6e: 'Elite Systems',
    0x6f: 'Electro Brain',
    0x70: 'Infogrames',
    0x71: 'Interplay',
    0x72: 'Broderbund',
    0x73: 'Sculptered Soft',
    0x75: 'The Sales Curve',
    0x78: 'THQ',
    0x79: 'Accolade',
    0x7a: 'Triffix Entertainment',
    0x7c: 'Microprose',
    0x7f: 'Kemco',
    0x80: 'Misawa Entertainment',
    0x83: 'LOZC',
    0x86: 'Tokuma Shoten',
    0x8b: 'Bullet-Proof Software',
    0x8c: 'Vic Tokai',
    0x8e: 'Ape',
    0x8f: "I'max",
    0x91: 'Chun Soft',
    0x92: 'Video System',
    0x93: 'Tsuburava',
    0x95: 'Varie',
    0x96: "Yonezawa/S'pal",
    0x97: 'Kaneko',
    0x99: 'Arc',
    0x9a: 'Nihon Bussan',
    0x9b: 'Tecmo',
    0x9c: 'Imagineer',
    0x9d: 'Banpresto',
    0x9f: 'Nova',
    0xa1: 'Hori Electric',
    0xa2: 'Bandai',
    0xa4: 'Konami',
    0xa6: 'Kawada',
    0xa7: 'Takara',
    0xa9: 'Technos Japan',
    0xaa: 'Broderbund',
    0xac: 'Toei Animation',
    0xad: 'Toho',
    0xaf: 'Namco',
    0xb0: 'Acclaim',
    0xb1: 'ASCII or Nexoft',
    0xb2: 'Bandai',
    0xb4: 'Square Enix',
    0xb6: 'HAL Laboratory',
    0xb7: 'SNK',
    0xb9: 'Pony Canyon',
    0xba: 'Culture Brain',
    0xbb: 'Sunsoft',
    0xbd: 'Sony Imagesoft',
    0xbf: 'Sammy',
    0xc0: 'Taito',
    0xc2: 'Kemco',
    0xc3: 'Square Enix',
    0xc4: 'Tokuma Shoten',
    0xc5: 'Data East',
    0xc6: 'Tonkin House',
    0xc8: 'Koei',
    0xc9: 'UFL',
    0xca: 'Ultra',
    0xcb: 'Vap',
    0xcc: 'Use',
    0xcd: 'Meldac',
    0xce: 'Pony Canyon',
    0xcf: 'Angel',
    0xd0: 'Taito',
    0xd1: 'Sofel',
    0xd2: 'Quest',
    0xd3: 'Sigma Enterprises',
    0xd4: 'Ask Kodansha',
    0xd6: 'Naxat Soft',
    0xd7: 'Copya Systems',
    0xd9: 'Banpresto',
    0xda: 'Tomy',
    0xdb: 'LJN',
    0xdd: 'NCS',
    0xde: 'Human',
    0xdf: 'Altron',
    0xe0: 'Jaleco',
    0xe1: 'Towachiki',
    0xe2: 'Uutaka',
    0xe3: 'Varie',
    0xe5: 'Epoch',
    0xe7: 'Athena',
    0xe8: 'Asmik',
    0xe9: 'Natsume',
    0xea: 'King Records',
    0xeb: 'Atlus',
    0xec: 'Epic/Sony Records',
    0xee: 'IGS',
    0xf0: 'A Wave',
    0xf3: 'Extreme Entertainment',
    0xff: 'LJN',
} as const

export const ROM_SIZES: { [key: number]: number } = {
    0x00: 32768, // 32 KiB
    0x01: 65536, // 64 KiB
    0x02: 131072, // 128 KiB
    0x03: 262144, // 256 KiB
    0x04: 524288, // 512 KiB
    0x05: 1048576, // 1 MiB
    0x06: 2097152, // 2 MiB
    0x07: 4194304, // 4 MiB
    0x08: 8388608, // 8 MiB
    0x52: 1179648, // 1.1 MiB
    0x53: 1310720, // 1.2 MiB
    0x54: 1572864, // 1.5 MiB
} as const

export const RAM_SIZES: { [key: number]: number } = {
    0x00: 0, // None
    0x01: 2048, // 1 bank
    0x02: 8192, // 1 bank
    0x03: 32768, // 4 banks
    0x04: 131072, // 16 banks
    0x05: 65536, // 8 banks
} as const

export const ROM_BANK_SIZE = 16384
export const RAM_BANK_SIZE = 8192

// prettier-ignore
export const NINTENDO_LOGO = [
    0xce, 0xed, 0x66, 0x66, 0xcc, 0x0d, 0x00, 0x0b, 0x03, 0x73, 0x00, 0x83, 0x00, 0x0c, 0x00, 0x0d,
    0x00, 0x08, 0x11, 0x1f, 0x88, 0x89, 0x00, 0x0e, 0xdc, 0xcc, 0x6e, 0xe6, 0xdd, 0xdd, 0xd9, 0x99,
    0xbb, 0xbb, 0x67, 0x63, 0x6e, 0x0e, 0xec, 0xcc, 0xdd, 0xdc, 0x99, 0x9f, 0xbb, 0xb9, 0x33, 0x3e,
] as const;
