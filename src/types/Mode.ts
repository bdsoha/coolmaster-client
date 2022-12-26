export enum Mode {
    COOL = 'cool',
    HEAT = 'heat',
    FAN = 'fan',
    DRY = 'dry',
    AUTO = 'auto'
}

export namespace Mode {
    export function parse(mode: string): Mode {
        // @ts-ignore
        return Mode[mode.toUpperCase()]
    }
}