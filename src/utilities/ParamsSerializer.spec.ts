import { ParamsSerializer } from './ParamsSerializer'


describe('ParamsSerializer', () => {
    const serialize = (command: string[]) => new ParamsSerializer().serialize({ command })

    it('[serialize] replaces `.` with `_`', () => {
        expect(serialize(['L7.001'])).toBe('command=L7_001')
    })

    it('[serialize] replaces ` ` with `&`', () => {
        expect(serialize(['filter visi'])).toBe('command=filter&visi')
    })

    it('[serialize] joins params with `&`', () => {
        expect(serialize(['set', 'filter visi', '1'])).toBe('command=set&filter&visi&1')
    })
})
