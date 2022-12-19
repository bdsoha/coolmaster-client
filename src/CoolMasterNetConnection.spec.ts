import { CoolMasterNetConnection } from './CoolMasterNetConnection'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


describe('CoolMasterNetConnector', () => {
    const env = process.env
    
    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => {
        process.env = env
    })

    // it('[connect] uses environment variables when available', () => {
    //     process.env.COOLMASTER_CLIENT_HOST = '192.168.1.111'
    //     process.env.COOLMASTER_CLIENT_PORT = '1234'
    //     process.env.COOLMASTER_CLIENT_SECURE = 'true'
    //     process.env.COOLMASTER_CLIENT_DEVICE = '443B960055F0'

    //     const client = CoolMasterNetConnector.connect()

    //     expect(client).toBeInstanceOf(CoolMasterNetConnector)
    //     expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/')
    // })

    it('[connect] uses paramaters when available', () => {
        const client = CoolMasterNetConnector.connect({
            host: '192.168.1.111',
            port: 1234,
            secure: true,
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(CoolMasterNetConnector)
        expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/')
    })

    it('[connect] uses a default port and is insecure', () => {
        const client = CoolMasterNetConnector.connect({
            host: '192.168.1.111',
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(CoolMasterNetConnector)
        expect(client).toHaveProperty('baseURL', 'http://192.168.1.111:10103/v1.0/device/443B960055F0/')
    })

    it('[connect] raises an exception for required paramaters', () => {
        const withoutDevice = () => CoolMasterNetConnector.connect({host: '192.168.1.111'})
        const withoutHost = () => CoolMasterNetConnector.connect({device: '443B960055F0'})

        expect(withoutDevice).toThrow(TypeError)
        expect(withoutHost).toThrow(TypeError)
    })
})


describe('Commands', () => {
    let mock
    let client
    const BASE_URL = 'http://192.168.1.111:10103/v1.0/device/443B960055F0/'
  
    beforeAll(() => {
        mock = new MockAdapter(axios)
        client = CoolMasterNetConnection(BASE_URL, mock)
    })
  
    afterEach(() => {
        mock.reset();
    })


    describe('ls', () => {
        it('returns a list of ', () => {
            mock.onGet(`${BASE_URL}/ls`).reply(200, {})

            const response = await client.ls()
            
            expect(mock.history.get[0].url).toEqual(`${BASE_URL}/ls`);

            expect(client.ls()).resolves.toBe({

            })
        })
    })

    describe('set')
    describe('props')
    describe('info')
    describe('on')
    describe('allon')
    describe('off')
    describe('alloff')
    describe('cool')
    describe('heat')
    describe('fan')
    describe('dry')
    describe('auto')
    describe('temp')
    describe('feed')
    describe('fspeed')
    describe('swing')
    describe('filt')
    describe('stat')
    describe('ls2')
})