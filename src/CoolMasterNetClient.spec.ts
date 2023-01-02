import { CoolMasterNetClient } from './CoolMasterNetClient'
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { json, response } from './__stubs__'
import { Mode, Speed, Temperature } from './types'
import { Swing } from './types/Swing'
import { SetConfig } from './types/SetConfig'


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
    
    it('[set] set with values', async () => {
        await call('set', () => client.set(SetConfig.PORT, 1111)).toStrictEqual(response.set)
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'set&aserver_port&1111' })
    })

    it('[mode] without unit-id', async () => { 
        await call('generic', () => client.mode(Mode.COOL)).toBeTruthy()
        await call('generic', () => client.mode(Mode.HEAT)).toBeTruthy()
        await call('generic', () => client.mode(Mode.FAN)).toBeTruthy()
        await call('generic', () => client.mode(Mode.DRY)).toBeTruthy()
        await call('generic', () => client.mode(Mode.AUTO)).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'cool' })
        expect(mock.history.get[1].params).toStrictEqual({ command: 'heat' })
        expect(mock.history.get[2].params).toStrictEqual({ command: 'fan' })
        expect(mock.history.get[3].params).toStrictEqual({ command: 'dry' })
        expect(mock.history.get[4].params).toStrictEqual({ command: 'auto' })
    })
    
    it('[mode] with unit-id', async () => {
        await call('generic', () => client.mode(Mode.COOL, 'L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'cool&L7_001' })
    })

    it('[temperature] without unit-id', async () => { 
        await call('generic', () => client.temperature(22)).toBeTruthy()
        await call('generic', () => client.temperature(-1)).toBeTruthy()
        await call('generic', () => client.temperature('+3')).toBeTruthy()
        await call('generic', () => client.temperature(new Temperature(25))).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'temp&22' })
        expect(mock.history.get[1].params).toStrictEqual({ command: 'temp&-1' })
        expect(mock.history.get[2].params).toStrictEqual({ command: 'temp&+3' })
        expect(mock.history.get[3].params).toStrictEqual({ command: 'temp&25' })
    })
    
    it('[temperature] with unit-id', async () => {
        await call('generic', () => client.temperature(-1, 'L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'temp&L7_001&-1' })
    })

    it('[speed] without unit-id', async () => { 
        await call('generic', () => client.speed(Speed.VERY_LOW)).toBeTruthy()
        await call('generic', () => client.speed(Speed.LOW)).toBeTruthy()
        await call('generic', () => client.speed(Speed.MEDIUM)).toBeTruthy()
        await call('generic', () => client.speed(Speed.HIGH)).toBeTruthy()
        await call('generic', () => client.speed(Speed.TOP)).toBeTruthy()
        await call('generic', () => client.speed(Speed.AUTO)).toBeTruthy()
        
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'speed&v' })
        expect(mock.history.get[1].params).toStrictEqual({ command: 'speed&l' })
        expect(mock.history.get[2].params).toStrictEqual({ command: 'speed&m' })
        expect(mock.history.get[3].params).toStrictEqual({ command: 'speed&h' })
        expect(mock.history.get[4].params).toStrictEqual({ command: 'speed&t' })
        expect(mock.history.get[5].params).toStrictEqual({ command: 'speed&a' })
        
    })
    
    it('[speed] with unit-id', async () => {
        await call('generic', () => client.speed(Speed.HIGH, 'L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'speed&L7_001&h' })
    })

    it('[swing] without unit-id', async () => { 
        await call('generic', () => client.swing(Swing.HORIZONTAL)).toBeTruthy()
        await call('generic', () => client.swing(Swing.VERTICAL)).toBeTruthy()
        await call('generic', () => client.swing(Swing.AUTO)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_30)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_45)).toBeTruthy()
        await call('generic', () => client.swing(Swing.DEGREE_60)).toBeTruthy()
        await call('generic', () => client.swing(Swing.STOP)).toBeTruthy()
        
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'swing&h' })
        expect(mock.history.get[1].params).toStrictEqual({ command: 'swing&v' })
        expect(mock.history.get[2].params).toStrictEqual({ command: 'swing&a' })
        expect(mock.history.get[3].params).toStrictEqual({ command: 'swing&3' })
        expect(mock.history.get[4].params).toStrictEqual({ command: 'swing&4' })
        expect(mock.history.get[5].params).toStrictEqual({ command: 'swing&6' })
        expect(mock.history.get[6].params).toStrictEqual({ command: 'swing&x' })
        
    })
    
    it('[swing] with unit-id', async () => {
        await call('generic', () => client.swing(Swing.STOP, 'L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'swing&L7_001&x' })
    })

    it('[resetFilter] without unit-id', async () => { 
        await call('generic', () => client.resetFilter()).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'filt' })
    })
    
    it('[resetFilter] with unit-id', async () => {
        await call('generic', () => client.resetFilter('L7.001')).toBeTruthy()
        
        expect(mock.history.get[0].params).toStrictEqual({ command: 'filt&L7_001' })
    })
    
    it.todo('info')
    it.todo('lock')
    it.todo('test "OK, Boot Required!" response (>set filter visi 1)')
})
