export enum PowerStatus {
    ON = 'on',
    OFF = 'off'
}

export namespace PowerStatus {
    export function parse(status: string): PowerStatus {
        // @ts-ignore
        return PowerStatus[status.toUpperCase()];
    }
}