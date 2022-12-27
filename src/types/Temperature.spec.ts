import { Temperature, TemperatureUnit } from './Temperature'


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
        expect(Temperature.parse('22.5F'))
            .toStrictEqual(new Temperature(22.5, TemperatureUnit.FAHRENHEIT))
    })
})