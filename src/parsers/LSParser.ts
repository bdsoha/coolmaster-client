import { PowerStatus, Temperature, Speed, Mode, Filter, FailureStatus, Response } from '../types'

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

export class LSParser {
    public static parse(response: Response): LSEntry[] {
        return response.data.map(entry => {
            const normalized = entry.replace(/  +/g, ' ').split(' ')
             
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