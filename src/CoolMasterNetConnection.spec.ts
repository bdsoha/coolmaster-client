import { CoolMasterNetConnection } from './CoolMasterNetConnection'
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { json, response } from './__stubs__'


describe('CoolMasterNetConnector', () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => process.env = env)

    it('[connect] uses environment variables when available', () => {
        process.env.COOLMASTER_CLIENT_HOST = '192.168.1.111'
        process.env.COOLMASTER_CLIENT_PORT = '1234'
        process.env.COOLMASTER_CLIENT_SECURE = 'true'
        process.env.COOLMASTER_CLIENT_DEVICE = '443B960055F0'

        const client = CoolMasterNetConnection.connect()

        expect(client).toBeInstanceOf(CoolMasterNetConnection)
        expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[connect] uses paramaters when available', () => {
        const client = CoolMasterNetConnection.connect({
            host: '192.168.1.111',
            port: 1234,
            secure: true,
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(CoolMasterNetConnection)
        expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[connect] uses a default port and is insecure', () => {
        const client = CoolMasterNetConnection.connect({
            host: '192.168.1.111',
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(CoolMasterNetConnection)
        expect(client).toHaveProperty('baseURL', 'http://192.168.1.111:10103/v1.0/device/443B960055F0/raw')
    })

    it('[connect] raises an exception for required paramaters', () => {
        const withoutDevice = () => CoolMasterNetConnection.connect({ host: '192.168.1.111' })
        const withoutHost = () => CoolMasterNetConnection.connect({ device: '443B960055F0' })

        expect(withoutDevice).toThrow(TypeError)
        expect(withoutHost).toThrow(TypeError)
    })
})


describe('Commands', () => {
    let mock: any
    let instance: AxiosInstance
    let client: CoolMasterNetConnection
    
    // @ts-ignore
    const setupMock = (key: string) => mock.onGet(/.*/).reply(200, json[key])

    beforeAll(() => {
        instance = axios.create()
        mock = new MockAdapter(instance)
        client = new CoolMasterNetConnection(instance)
    })

    afterEach(() => {
        mock.reset()
    })


    it('[ls] without unit-id', async () => {
        setupMock('ls')
        
        await expect(client.ls()).resolves.toStrictEqual(response.ls)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls' })
    })
    
    it.todo('[ls] with unit-id')
    
    it('[ls2] without unit-id', async () => { 
        setupMock('ls2')
        
        await expect(client.ls2()).resolves.toStrictEqual(response.ls2)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls2' })
    })
    
    it.todo('[ls2] with unit-id')
    
    it('[props] get prop values', async () => { 
        setupMock('props')
        
        await expect(client.props()).resolves.toStrictEqual(response.props)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'props' })
    })
    
    it.todo('[props] set prop values')
    
    it('[on] without unit-id', async () => { 
        setupMock('generic')
        
        await expect(client.on()).resolves.toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'on' })
    })
    
    it.todo('[on] with unit-id')

    it('[allOn] alias of on()', async () => { 
        setupMock('generic')
        
        await expect(client.allOn()).resolves.toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'on' })
    })
    
    it('[off] without unit-id', async () => { 
        setupMock('generic')
        
        await expect(client.off()).resolves.toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'off' })
    })
    
    it.todo('[off] with unit-id')

    it('[allOff] alias of off()', async () => { 
        setupMock('generic')
        
        await expect(client.allOff()).resolves.toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'off' })
    })
    
    describe('set', () => { })
    describe('info', () => { })
    describe('cool', () => { })
    describe('heat', () => { })
    describe('fan', () => { })
    describe('dry', () => { })
    describe('auto', () => { })
    describe('temp', () => { })
    describe('feed', () => { })
    describe('fspeed', () => { })
    describe('swing', () => { })
    describe('filt', () => { })
})
