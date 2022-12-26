import { EnumParser } from "../utilities";

export enum Speed {
    LOW = 'low',
    MEDIUM = 'med',
    HIGH = 'high',
    AUTO = 'auto'
}

export namespace Speed {
    export const parse = EnumParser.parse.bind(Speed)
}