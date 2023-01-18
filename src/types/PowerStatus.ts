import { EnumParser } from '../utilities'


export const PowerStatus = {
    ON:  'on',
    OFF: 'off',
    parse(raw: string) {
        return EnumParser.parse.call(this, raw)
    }
} as const

export type PowerStatus = typeof PowerStatus[keyof typeof PowerStatus]
