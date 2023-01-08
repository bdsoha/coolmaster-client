export const Filter = {
    REQUIRES_CLEANING: '#',
    CLEAN:             '-',

    parse(filter: string) {
        if (filter === '#') {
            return this.REQUIRES_CLEANING
        }

        if (filter === '-') {
            return this.CLEAN
        }
    }

} as const

export type Filter = typeof Filter[keyof typeof Filter]
