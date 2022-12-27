import { Temperature, Speed, Mode, Parsable } from '../types'

export interface PropsEntry {
    uid: string
    name: string
    visible: boolean
    modes: Mode[]
    speeds: Speed[]
    time: null
    coolRange: [Temperature | null, Temperature | null]
    heatRange: [Temperature | null, Temperature | null]
    lock: boolean
}

export class PropsParser {
    protected static fromLetters(cell: string, type: Parsable): any[] {
        return cell.split(' ').filter(Boolean).map(letter => type.parse(letter))
    }

    protected static fromRange(cell: string, type: Parsable): [Temperature | null, Temperature | null] {
        // @ts-ignore
        return cell.split(' ').map(letter => {
            if (letter === '--') {
                return null
            }

            return type.parse(letter)
        })
    }

    public static parse(json: any): PropsEntry[] {
        const { data } = json

        data.splice(0, 2)

        return data.map((entry: string) => {
            const normalized = entry.replace(/  +/g, ' ').split('|').map(cell => cell.trim())

            return {
                uid: normalized[0],
                name: normalized[1],
                visible: !!parseInt(normalized[2]),
                modes: this.fromLetters(normalized[3], Mode),
                speeds: this.fromLetters(normalized[4], Speed),
                time: this.fromRange(normalized[5], null),
                coolRange: this.fromRange(normalized[6], Temperature),
                heatRange: this.fromRange(normalized[7], Temperature),
                lock: !!parseInt(normalized[8])
            }
        })
    }
}
