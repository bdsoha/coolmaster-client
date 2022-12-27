import { FailureStatus, Filter, Mode, PowerStatus, Speed, Temperature } from '../types'

export default [
    {
        uid: 'L7.000',
        power: PowerStatus.OFF,
        targetTemp: new Temperature(19),
        currentTemp: new Temperature(22),
        speed: Speed.VERY_LOW,
        mode: Mode.HEAT,
        failure: new FailureStatus(),
        filter: Filter.REQUIRES_CLEANING,
        demand: 1
    },
    {
        uid: 'L7.001',
        power: PowerStatus.OFF,
        targetTemp: new Temperature(25),
        currentTemp: new Temperature(24.2),
        speed: Speed.TOP,
        mode: Mode.DRY,
        failure: new FailureStatus(),
        filter: Filter.CLEAN,
        demand: 0
    },
    {
        uid: 'L7.002',
        power: PowerStatus.OFF,
        targetTemp: new Temperature(20),
        currentTemp: new Temperature(22.3),
        speed: Speed.LOW,
        mode: Mode.COOL,
        failure: new FailureStatus(),
        filter: Filter.CLEAN,
        demand: 0
    },
    {
        uid: 'L7.003',
        power: PowerStatus.OFF,
        targetTemp: new Temperature(25),
        currentTemp: new Temperature(26.4),
        speed: Speed.MEDIUM,
        mode: Mode.COOL,
        failure: new FailureStatus(),
        filter: Filter.REQUIRES_CLEANING,
        demand: 0
    },
    {
        uid: 'L7.004',
        power: PowerStatus.OFF,
        targetTemp: new Temperature(24),
        currentTemp: new Temperature(24.3),
        speed: Speed.HIGH,
        mode: Mode.FAN,
        failure: new FailureStatus(),
        filter: Filter.REQUIRES_CLEANING,
        demand: 0
    },
    {
        uid: 'L7.005',
        power: PowerStatus.ON,
        targetTemp: new Temperature(25),
        currentTemp: new Temperature(23.8),
        speed: Speed.AUTO,
        mode: Mode.AUTO,
        failure: new FailureStatus(),
        filter: Filter.CLEAN,
        demand: 0
    },
]