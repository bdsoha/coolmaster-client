export default [
    {
        uid: 'L7.000',
        power: PowerStatus.OFF,
        targetTemp: Temperature(19),
        currentTemp: Temperature(22),
        speed: Speed.LOW,
        mode: Mode.COOL,
        failure: null,
        filter: Filter.REQUIRES_CLEANING,
        demand: 0
    },
    {
        uid: 'L7.001',
        power: PowerStatus.OFF,
        targetTemp: Temperature(25),
        currentTemp: Temperature(24.2),
        speed: Speed.LOW,
        mode: Mode.COOL,
        failure: null,
        filter: Filter.CLEAN,
        demand: 0
    },
    {
        uid: 'L7.002', 
        power: PowerStatus.OFF,
        targetTemp: Temperature(20),
        currentTemp: Temperature(22.3),
        speed: Speed.LOW,
        mode: Mode.COOL,
        failure: null,
        filter: Filter.CLEAN,
        demand: 0
    },
    {
        uid: 'L7.003',
        power: PowerStatus.OFF,
        targetTemp: Temperature(25),
        currentTemp: Temperature(26.4),
        speed: Speed.LOW,
        mode: Mode.COOL,
        failure: null,
        filter: Filter.REQUIRES_CLEANING,
        demand: 0
    },
    {
        uid: 'L7.004',
        power: PowerStatus.OFF,
        targetTemp: Temperature(24),
        currentTemp: Temperature(24.3),
        speed: Speed.HIGH,
        mode: Mode.FAN,
        failure: null,
        filter: Filter.CLEAN,
        demand: 0
    },
    {
        uid: 'L7.005',
        power: PowerStatus.ON,
        targetTemp: Temperature(25),
        currentTemp: Temperature(23.8),
        speed: Speed.AUTO,
        mode: Mode.AUTO,
        failure: null,
        filter: Filter.CLEAN,
        demand: 0
    },
]