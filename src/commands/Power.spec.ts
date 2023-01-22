import axios           from 'axios'
import { json }        from '../__stubs__'
import { Power }       from './Power'
import MockAdapter     from 'axios-mock-adapter'
import { PowerStatus } from '../types'


describe('Power', () => {
    let mock: MockAdapter
    let client: Power

    const call = (key: string, callback: () => any) => { // eslint-disable-line
        mock.onGet(/.*/).reply(200, json[key])

        return expect(callback()).resolves
    }

    beforeAll(() => {
        const instance = axios.create()
        mock = new MockAdapter(instance)
        client = new Power(instance)
    })

    afterEach(() => {
        mock.reset()
    })

    it('[on] without unit-id', async () => {
        await call('generic', () => client.on()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['on'] })
    })

    it('[on] with unit-id', async () => {
        await call('generic', () => client.on('L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['on', 'L7.001'] })
    })

    it('[allOn] alias of on()', async () => {
        await call('generic', () => client.allOn()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['on'] })
    })

    it('[off] without unit-id', async () => {
        await call('generic', () => client.off()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['off'] })
    })

    it('[off] with unit-id', async () => {
        await call('generic', () => client.off('L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['off', 'L7.001'] })
    })

    it('[allOff] alias of off()', async () => {
        await call('generic', () => client.allOff()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['off'] })
    })

    it('[set] sets the power status', async () => {
        await call('generic', () => client.set(PowerStatus.OFF)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['off'] })
    })
})
