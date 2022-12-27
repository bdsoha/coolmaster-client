import { EnumParser } from "../utilities";




export enum Speed {
    VERY_LOW = 'very_low',
    LOW = 'low',
    MEDIUM = 'med',
    HIGH = 'high',
    TOP = 'top',
    AUTO = 'auto',
}

export namespace Speed {
    export const parse = EnumParser.parse.bind(Speed)
}