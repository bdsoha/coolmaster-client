import { PowerStatus, Temperature, Speed, Mode, Filter, FailureStatus, Response } from '../types'
import { BaseParser } from './BaseParser'

export interface LSEntry {
    uid: string
    power: PowerStatus
    targetTemp: Temperature
    currentTemp: Temperature
    speed: Speed
    mode: Mode
    failure: FailureStatus
    filter: Filter
    demand: number
}

export class LSParser extends BaseParser {
    public static parse(response: Response): LSEntry[] {
        return response.data.map(entry => {
            const normalized = this.normalizeRow(entry)
             
            return {
                uid: normalized[0],
                power: PowerStatus.parse(normalized[1]),
                targetTemp: Temperature.parse(normalized[2]),
                currentTemp: Temperature.parse(normalized[3]),
                speed: Speed.parse(normalized[4]),
                mode: Mode.parse(normalized[5]),
                failure: FailureStatus.parse(normalized[6]),
                filter: Filter.parse(normalized[7]),
                demand: parseInt(normalized[8])
            }
        })
    }
}