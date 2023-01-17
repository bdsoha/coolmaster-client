import axios              from 'axios'
import MockAdapter        from 'axios-mock-adapter'
import { Properties }     from './Properties'
import { Mode, Speed }    from '../types'
import { json, response } from '../__stubs__'


describe('Properties', () => {
    let mock: MockAdapter
    let client: Properties

    const call = (key: string, callback: () => any) => { // eslint-disable-line
        mock.onGet(/.*/).reply(200, json[key])

        return expect(callback()).resolves
    }

    beforeAll(() => {
        const instance = axios.create()
        mock = new MockAdapter(instance)
        client = new Properties(instance)
    })

    afterEach(() => {
        mock.reset()
    })

    it('[all] get all property values', async () => {
        await call('props', () => client.all()).toStrictEqual(response.props)

        expect(mock.history.get[0].params).toStrictEqual({ command: ['props'] })
    })

    it('[name] set `name` property values', async () => {
        await call('generic', () => client.name('L7.001', 'Dining Room')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['props', 'L7.001', 'name', 'Dining Room'] })
    })

    it('[visible] set `visible` property values', async () => { // @TODO: change to boot required
        await call('generic', () => client.visible('L7.001', true)).toBeTruthy()
        await call('generic', () => client.visible('L7.001', false)).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['props', 'L7.001', 'visible', '1'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['props', 'L7.001', 'visible', '0'] })
    })

    it('[speeds] set `speeds` property values', async () => { // @TODO: change to boot required
        await call('generic', () => client.speed('L7.001', [Speed.AUTO, Speed.HIGH], '+')).toBeTruthy()
        await call('generic', () => client.speed('L7.001', [Speed.LOW, Speed.MEDIUM], '-')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['props', 'L7.001', 'fspeed', '+a+h'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['props', 'L7.001', 'fspeed', '-l-m'] })
    })

    it('[modes] set `modes` property values', async () => { // @TODO: change to boot required
        await call('generic', () => client.mode('L7.001', [Mode.AUTO, Mode.COOL], '+')).toBeTruthy()
        await call('generic', () => client.mode('L7.001', [Mode.DRY, Mode.HEAT], '-')).toBeTruthy()

        expect(mock.history.get[0].params).toStrictEqual({ command: ['props', 'L7.001', 'mode', '+a+c'] })
        expect(mock.history.get[1].params).toStrictEqual({ command: ['props', 'L7.001', 'mode', '-d-h'] })
    })
})
