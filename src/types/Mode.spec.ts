import { Mode } from './Mode'


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
