export enum Filter {
    REQUIRES_CLEANING = '#',
    CLEAN = '-'
}

export namespace Filter {
    export function parse(filter: string): Filter {
        if (filter === '#') {
            return Filter.REQUIRES_CLEANING
        }

        if (filter === '-') {
            return Filter.CLEAN
        }

        return undefined
    }
}