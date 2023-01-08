import { EnumParser } from '../utilities'


export const Speed = {
    VERY_LOW: 'vlow',
    LOW:      'low',
    MEDIUM:   'med',
    HIGH:     'high',
    TOP:      'top',
    AUTO:     'auto',
    parse(raw: string) {
        return EnumParser.parse.call(this, raw)
    }
} as const

export type Speed = typeof Speed[keyof typeof Speed]
