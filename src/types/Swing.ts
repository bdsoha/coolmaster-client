export const Swing = {
    HORIZONTAL: 'h',
    VERTICAL:   'v',
    AUTO:       'a',
    DEGREE_30:  '3',
    DEGREE_45:  '4',
    DEGREE_60:  '6',
    STOP:       'x'
} as const

export type Swing = typeof Swing[keyof typeof Swing]
