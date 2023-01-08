import { EnumParser } from '../utilities'


export const Mode = {
    COOL: 'cool',
    HEAT: 'heat',
    FAN:  'fan',
    DRY:  'dry',
    AUTO: 'auto',
    parse(raw: string) {
        return EnumParser.parse.call(this, raw)
    }
} as const

export type Mode = typeof Mode[keyof typeof Mode]
