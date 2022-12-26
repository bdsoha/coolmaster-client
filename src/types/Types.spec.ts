import { PowerStatus } from './PowerStatus'
import { Temperature, TemperatureUnit } from './Temperature'

describe('Types', () => {
    describe('PowerStatus', () => {
        it('[parse] receives upper or lower case', () => {
            expect(PowerStatus.parse('on')).toBe(PowerStatus.ON)
            expect(PowerStatus.parse('On')).toBe(PowerStatus.ON)
            expect(PowerStatus.parse('ON')).toBe(PowerStatus.ON)

            expect(PowerStatus.parse('off')).toBe(PowerStatus.OFF)
            expect(PowerStatus.parse('Off')).toBe(PowerStatus.OFF)
            expect(PowerStatus.parse('OFF')).toBe(PowerStatus.OFF)
        })
    })

    describe('Temperature', () => {
        it('[parse] receives float or integer values', () => {
            expect(Temperature.parse('11')).toHaveProperty('degrees', 11)
            expect(Temperature.parse('22.5')).toHaveProperty('degrees', 22.5)  
        })

        it('[parse] receives celsius or fahrenheit values', () => {
            expect(Temperature.parse('11')).toHaveProperty('units', TemperatureUnit.CELSIUS)
            expect(Temperature.parse('11C')).toHaveProperty('units', TemperatureUnit.CELSIUS)
            expect(Temperature.parse('22.5F')).toHaveProperty('units', TemperatureUnit.FAHRENHEIT)  
        })

        it('[constructor] equivalent to parse()', () => {
            expect(Temperature.parse('22.5F')).toStrictEqual(new Temperature(22.5, TemperatureUnit.FAHRENHEIT))
        })
    })
})