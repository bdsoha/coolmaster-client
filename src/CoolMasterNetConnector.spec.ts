import { CoolMasterNetConnector } from './CoolMasterNetConnector'


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
})