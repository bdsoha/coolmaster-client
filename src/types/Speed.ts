export enum Speed {
    LOW = 'low',
    MEDIUM = 'med',
    HIGH = 'high',
    AUTO = 'auto'
}

export namespace Speed {
    export function parse(speed: string): Speed {
        const index = Object.values(Speed).indexOf(<any>speed.toLowerCase())

        // @ts-ignore
        return Speed[Object.keys(Speed).at(index)]
    }
}