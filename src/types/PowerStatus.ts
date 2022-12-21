export enum PowerStatus {
    ON = 'on',
    OFF = 'off'
}

namespace PowerStatus {
    export function parse(status: string): PowerStatus {
        return PowerStatus[status.toUpperCase()];
    }
}