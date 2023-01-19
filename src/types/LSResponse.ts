import { Mode }          from './Mode'
import { Speed }         from './Speed'
import { Filter }        from './Filter'
import { PowerStatus }   from './PowerStatus'
import { Temperature }   from './Temperature'
import { FailureStatus } from './FailureStatus'


export interface LSResponse {
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
