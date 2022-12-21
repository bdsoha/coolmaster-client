export enum Mode {
    COOL = 'cool',
    HEAT = 'heat',
    FAN = 'fan',
    DRY = 'dry',
    AUTO = 'auto'
}

namespace Mode {
    export function parse(mode: string): Mode {
        return Mode[mode.toUpperCase()];
    }
}