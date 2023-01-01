import { CoolMasterNetClient } from './CoolMasterNetClient'
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { json, response } from './__stubs__'


describe('CoolMasterNetClient', () => {
    let mock: any
    let instance: AxiosInstance
    let client: CoolMasterNetClient
    
    const call = (key: string, callback: () => any) => {
        mock.onGet(/.*/).reply(200, json[key])

        return expect(callback()).resolves
    }

    beforeAll(() => {
        instance = axios.create()
        mock = new MockAdapter(instance)
        client = new CoolMasterNetClient(instance)
    })

    afterEach(() => {
        mock.reset()
    })

    it('[ls] without unit-id', async () => {
        await call('ls', () => client.ls()).toStrictEqual(response.ls)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls' })
    })
    
    it('[ls] with unit-id', async () => {
        await call('ls', () => client.ls('L7.001')).toStrictEqual(response.ls)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls&L7_001' })
    })
    
    it('[ls2] without unit-id', async () => { 
        await call('ls2', () => client.ls2()).toStrictEqual(response.ls2)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls2' })
    })
    
    it('[ls2] with unit-id', async () => {
        await call('ls2', () => client.ls2('L7.001')).toStrictEqual(response.ls2)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'ls2&L7_001' })
    })    

    it('[props] get prop values', async () => { 
        await call('props', () => client.props()).toStrictEqual(response.props)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'props' })
    })
    
    it.todo('[props] set prop values')
    
    it('[on] without unit-id', async () => { 
        await call('generic', () => client.on()).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'on' })
    })
    
    it('[on] with unit-id', async () => {
        await call('generic', () => client.on('L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'on&L7_001' })
    })

    it('[allOn] alias of on()', async () => { 
        await call('generic', () => client.allOn()).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'on' })
    })
    
    it('[off] without unit-id', async () => { 
        await call('generic', () => client.off()).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'off' })
    })
    
    it('[off] with unit-id', async () => {
        await call('generic', () => client.off('L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'off&L7_001' })
    })

    it('[allOff] alias of off()', async () => { 
        await call('generic', () => client.allOff()).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'off' })
    })
    
    it('[set] get set values', async () => { 
        await call('set', () => client.set()).toStrictEqual(response.set)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'set' })
    })
    
    it.todo('[set] get partial set values')
    
    it.todo('[set] set set values')
    
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
