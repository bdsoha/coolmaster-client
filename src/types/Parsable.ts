export interface Parsable<T extends any = any, R extends any = any> {
    parse(data: T): R
}