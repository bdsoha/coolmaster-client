import { Mode } from './Mode'
import { PowerStatus } from './PowerStatus'
import { Speed } from './Speed'
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

    describe('Mode', () => {
        it('[parse] receives upper or lower case', () => {
            expect(Mode.parse('auto')).toBe(Mode.AUTO)
            expect(Mode.parse('Auto')).toBe(Mode.AUTO)
            expect(Mode.parse('AUTO')).toBe(Mode.AUTO)
            
            expect(Mode.parse('cool')).toBe(Mode.COOL)
            expect(Mode.parse('Cool')).toBe(Mode.COOL)
            expect(Mode.parse('COOL')).toBe(Mode.COOL)

            expect(Mode.parse('dry')).toBe(Mode.DRY)
            expect(Mode.parse('Dry')).toBe(Mode.DRY)
            expect(Mode.parse('DRY')).toBe(Mode.DRY)

            expect(Mode.parse('fan')).toBe(Mode.FAN)
            expect(Mode.parse('Fan')).toBe(Mode.FAN)
            expect(Mode.parse('FAN')).toBe(Mode.FAN)

            expect(Mode.parse('heat')).toBe(Mode.HEAT)
            expect(Mode.parse('Heat')).toBe(Mode.HEAT)
            expect(Mode.parse('HEAT')).toBe(Mode.HEAT)
        })

        it('[parse] receives first letter', () => {
            expect(Mode.parse('a')).toBe(Mode.AUTO)
            expect(Mode.parse('c')).toBe(Mode.COOL)
            expect(Mode.parse('d')).toBe(Mode.DRY)
            expect(Mode.parse('f')).toBe(Mode.FAN)
            expect(Mode.parse('h')).toBe(Mode.HEAT)
        })
    })

    describe('Speed', () => {
        it('[parse] receives upper or lower case', () => {
            expect(Speed.parse('auto')).toBe(Speed.AUTO)
            expect(Speed.parse('Auto')).toBe(Speed.AUTO)
            expect(Speed.parse('AUTO')).toBe(Speed.AUTO)
            
            expect(Speed.parse('low')).toBe(Speed.LOW)
            expect(Speed.parse('Low')).toBe(Speed.LOW)
            expect(Speed.parse('LOW')).toBe(Speed.LOW)

            expect(Speed.parse('med')).toBe(Speed.MEDIUM)
            expect(Speed.parse('Med')).toBe(Speed.MEDIUM)
            expect(Speed.parse('MED')).toBe(Speed.MEDIUM)

            expect(Speed.parse('high')).toBe(Speed.HIGH)
            expect(Speed.parse('High')).toBe(Speed.HIGH)
            expect(Speed.parse('HIGH')).toBe(Speed.HIGH)
        })

        it('[parse] receives first letter', () => {
            expect(Speed.parse('a')).toBe(Speed.AUTO)
            expect(Speed.parse('l')).toBe(Speed.LOW)
            expect(Speed.parse('m')).toBe(Speed.MEDIUM)
            expect(Speed.parse('h')).toBe(Speed.HIGH)
        })
    })
})