import axios              from 'axios'
import MockAdapter        from 'axios-mock-adapter'
import { Settings }       from './Settings'
import { json, response } from '../__stubs__'


describe('Settings', () => {
    let mock: MockAdapter
    let client: Settings

    const call = (key: string, callback: () => any) => { // eslint-disable-line
        mock.onGet(/.*/).reply(200, json[key])

        return expect(callback()).resolves
    }

    beforeAll(() => {
        const instance = axios.create()
        mock = new MockAdapter(instance)
        client = new Settings(instance)
    })

    afterEach(() => {
        mock.reset()
    })

    it('[all] get settings values', async () => {
        await call('set', () => client.all()).toStrictEqual(response.set)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['set'] })
    })

    it.todo('[settings] get partial settings values')

    it('[reset] reset default values', async () => {
        await call('generic', () => client.reset()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['set', 'defaults'] })
    })

    it('[filterVisibility] set filter visibility', async () => {
        await call('generic', () => client.filterVisibility(true)).toBeTruthy()
        await call('generic', () => client.filterVisibility(false)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['set', 'filter visi', '1'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['set', 'filter visi', '0'] })
    })

    it('[melody] set filter visibility', async () => {
        await call('generic', () => client.melody('chime')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['set', 'melody', 'chime'] })
    })
})
