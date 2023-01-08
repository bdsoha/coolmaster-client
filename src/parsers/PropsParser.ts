import { BaseParser } from './BaseParser'
import * as Types     from '../types'


type TemperatureRange = [Types.Temperature | null, Types.Temperature | null]

export interface PropsEntry {
    uid: string
    name: string
    visible: boolean
    modes: Types.Mode[]
    speeds: Types.Speed[]
    time: null
    coolRange: TemperatureRange
    heatRange: TemperatureRange
    lock: boolean
}

export class PropsParser extends BaseParser {
    protected static fromLetters<T>(cell: string, type: Types.Parsable): T[] {
        return cell.split(' ').filter(Boolean).map(letter => type.parse(letter))
    }

    protected static fromRange(cell: string, type: Types.Parsable):TemperatureRange {
        // @ts-ignore
        return cell.split(' ').map(letter => {
            if (letter === '--') {
                return null
            }

            return type.parse(letter)
        })
    }

    public static parse(response: Types.Response): PropsEntry[] {
        const { data } = response

        data.splice(0, 2)

        // @ts-ignore
        return data.map(entry => {
            const normalized = this.normalizeRow(entry, '|')

            return {
                uid:       normalized[0],
                name:      normalized[1],
                visible:   this.booleanFromString(normalized[2]),
                modes:     this.fromLetters(normalized[3], Types.Mode),
                speeds:    this.fromLetters(normalized[4], Types.Speed),
                time:      this.fromRange(normalized[5], null),
                coolRange: this.fromRange(normalized[6], Types.Temperature),
                heatRange: this.fromRange(normalized[7], Types.Temperature),
                lock:      this.booleanFromString(normalized[8])
            }
        })
    }
}
