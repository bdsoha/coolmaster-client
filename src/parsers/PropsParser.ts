import { Temperature, Speed, Mode } from '../types'

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
    protected static fromLetters(cell: string, type: any): any[] {
        return cell.split(' ').map(letter => type.parse(letter))
    }

    protected static fromRange(cell: string): [Temperature | null, Temperature | null] {
        // @ts-ignore
        return cell.split(' ').map(letter => {
            if (letter === '--') {
                return null
            }

            return Temperature.parse(letter)
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
                time: normalized[5], // @TODO
                coolRange: this.fromRange(normalized[6]),
                heatRange: this.fromRange(normalized[7]),
                lock: !!parseInt(normalized[8])
            }
        })
    }
}
