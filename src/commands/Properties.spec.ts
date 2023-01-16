import axios              from 'axios'
import MockAdapter        from 'axios-mock-adapter'
import { Properties }     from './Properties'
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

    it.todo('[props] set prop values')
})
