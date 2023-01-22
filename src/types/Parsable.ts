/* eslint-disable */

export interface Parsable<T extends Record<string, any> = any, R = any> {
    parse(data: T): R
}

export type ParsableCallback = Parsable['parse']
