export enum Speed {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    AUTO = 'auto'
}

export namespace Speed {
    export function parse(speed: string): Speed {
        // @ts-ignore
        return Speed[speed.toUpperCase()];
    }
}