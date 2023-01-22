import axios                           from 'axios'
import { Swing }                       from './types/Swing'
import MockAdapter                     from 'axios-mock-adapter'
import { json, response }              from './__stubs__'
import { CoolMasterNetClient }         from './CoolMasterNetClient'
import { Power, Properties, Settings } from './commands'
import { Mode, Speed, Temperature }    from './types'


describe('CoolMasterNetClient', () => {
    let mock: MockAdapter
    let client: CoolMasterNetClient

    const call = (key: string, callback: () => any) => { // eslint-disable-line
        mock.onGet(/.*/).reply(200, json[key])

        return expect(callback()).resolves
    }

    beforeAll(() => {
        const instance = axios.create()
        mock = new MockAdapter(instance)
        client = new CoolMasterNetClient(instance)
    })

    afterEach(() => {
        mock.reset()
    })

    it('[ls] without unit-id', async () => {
        await call('ls', () => client.ls()).toStrictEqual(response.ls)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['ls'] })
    })

    it('[ls] with unit-id', async () => {
        await call('ls', () => client.ls('L7.001')).toStrictEqual(response.ls)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['ls', 'L7.001'] })
    })

    it('[ls2] without unit-id', async () => {
        await call('ls2', () => client.ls2()).toStrictEqual(response.ls2)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['ls2'] })
    })

    it('[ls2] with unit-id', async () => {
        await call('ls2', () => client.ls2('L7.001')).toStrictEqual(response.ls2)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['ls2', 'L7.001'] })
    })

    it('[properties] get properties values', async () => {
        expect(client.properties).toBeInstanceOf(Properties)
    })

    it('[settings] get settings values', async () => {
        expect(client.settings).toBeInstanceOf(Settings)
    })

    it('[power] get power values', async () => {
        expect(client.power).toBeInstanceOf(Power)
    })

    it('[mode] without unit-id', async () => {
        await call('generic', () => client.mode(Mode.COOL)).toBeTruthy()
        await call('generic', () => client.mode(Mode.HEAT)).toBeTruthy()
        await call('generic', () => client.mode(Mode.FAN)).toBeTruthy()
        await call('generic', () => client.mode(Mode.DRY)).toBeTruthy()
        await call('generic', () => client.mode(Mode.AUTO)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['cool'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['heat'] })
        expect(mock.history.get[2].params).toStrictEqual({ command: ['fan'] })
        expect(mock.history.get[3].params).toStrictEqual({ command: ['dry'] })
        expect(mock.history.get[4].params).toStrictEqual({ command: ['auto'] })
    })

    it('[mode] with unit-id', async () => {
        await call('generic', () => client.mode(Mode.COOL, 'L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['cool', 'L7.001'] })
    })

    it('[temperature] without unit-id', async () => {
        await call('generic', () => client.temperature(22)).toBeTruthy()
        await call('generic', () => client.temperature(-1)).toBeTruthy()
        await call('generic', () => client.temperature('+3')).toBeTruthy()
        await call('generic', () => client.temperature(new Temperature(25))).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['temp', '22'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['temp', '-1'] })
        expect(mock.history.get[2].params).toStrictEqual({ command: ['temp', '+3'] })
        expect(mock.history.get[3].params).toStrictEqual({ command: ['temp', '25'] })
    })

    it('[temperature] with unit-id', async () => {
        await call('generic', () => client.temperature(-1, 'L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['temp', 'L7.001', '-1'] })
    })

    it('[speed] without unit-id', async () => {
        await call('generic', () => client.speed(Speed.VERY_LOW)).toBeTruthy()
        await call('generic', () => client.speed(Speed.LOW)).toBeTruthy()
        await call('generic', () => client.speed(Speed.MEDIUM)).toBeTruthy()
        await call('generic', () => client.speed(Speed.HIGH)).toBeTruthy()
        await call('generic', () => client.speed(Speed.TOP)).toBeTruthy()
        await call('generic', () => client.speed(Speed.AUTO)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['speed', 'v'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['speed', 'l'] })
        expect(mock.history.get[2].params).toStrictEqual({ command: ['speed', 'm'] })
        expect(mock.history.get[3].params).toStrictEqual({ command: ['speed', 'h'] })
        expect(mock.history.get[4].params).toStrictEqual({ command: ['speed', 't'] })
        expect(mock.history.get[5].params).toStrictEqual({ command: ['speed', 'a'] })

    })

    it('[speed] with unit-id', async () => {
        await call('generic', () => client.speed(Speed.HIGH, 'L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['speed', 'L7.001', 'h'] })
    })

    it('[swing] without unit-id', async () => {
        await call('generic', () => client.swing(Swing.HORIZONTAL)).toBeTruthy()
        await call('generic', () => client.swing(Swing.VERTICAL)).toBeTruthy()
        await call('generic', () => client.swing(Swing.AUTO)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_30)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_45)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_60)).toBeTruthy()
        await call('generic', () => client.swing(Swing.STOP)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['swing', 'h'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['swing', 'v'] })
        expect(mock.history.get[2].params).toStrictEqual({ command: ['swing', 'a'] })
        expect(mock.history.get[3].params).toStrictEqual({ command: ['swing', '3'] })
        expect(mock.history.get[4].params).toStrictEqual({ command: ['swing', '4'] })
        expect(mock.history.get[5].params).toStrictEqual({ command: ['swing', '6'] })
        expect(mock.history.get[6].params).toStrictEqual({ command: ['swing', 'x'] })

    })

    it('[swing] with unit-id', async () => {
        await call('generic', () => client.swing(Swing.STOP, 'L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['swing', 'L7.001', 'x'] })
    })

    it('[resetFilter] without unit-id', async () => {
        await call('generic', () => client.resetFilter()).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['filt'] })
    })

    it('[resetFilter] with unit-id', async () => {
        await call('generic', () => client.resetFilter('L7.001')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['filt', 'L7.001'] })
    })

    it.todo('info')
    it.todo('lock')
    it.todo('test "OK, Boot Required!" response (>set filter visi 1)')
})

