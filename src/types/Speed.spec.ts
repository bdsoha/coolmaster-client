import { Speed } from './Speed'

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