import { PowerStatus } from './PowerStatus'


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
