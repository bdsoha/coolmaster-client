import { EnumParser } from '../utilities'


export enum Mode {
    COOL = 'cool',
    HEAT = 'heat',
    FAN = 'fan',
    DRY = 'dry',
    AUTO = 'auto'
}

export namespace Mode {
    export const parse = EnumParser.parse.bind(Mode)
}