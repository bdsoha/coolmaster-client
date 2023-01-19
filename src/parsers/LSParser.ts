import { BaseParser } from './BaseParser'
import * as Types     from '../types'


export class LSParser extends BaseParser {
    public static parse(response: Types.Response): Types.LSResponse[] {
        return response.data.map(entry => {
            const normalized = this.normalizeRow(entry)

            return {
                uid:         normalized[0],
                power:       Types.PowerStatus.parse(normalized[1]),
                targetTemp:  Types.Temperature.parse(normalized[2]),
                currentTemp: Types.Temperature.parse(normalized[3]),
                speed:       Types.Speed.parse(normalized[4]),
                mode:        Types.Mode.parse(normalized[5]),
                failure:     Types.FailureStatus.parse(normalized[6]),
                filter:      Types.Filter.parse(normalized[7]),
                demand:      parseInt(normalized[8])
            }
        })
    }
}
