import { Mode }        from './Mode'
import { Speed }       from './Speed'
import { Temperature } from './Temperature'


type TemperatureRange = [Temperature | null, Temperature | null]

export interface PropertiesResponse {
    uid: string
    name: string
    visible: boolean
    modes: Mode[]
    speeds: Speed[]
    time: null
    coolRange: TemperatureRange
    heatRange: TemperatureRange
    lock: boolean
}
