import { CoolMasterNetConnection } from './CoolMasterNetConnection'
import axios from 'axios'


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

        expect(client).toBeInstanceOf(axios)
        // client.defaults.baseURL
        // @TODO: expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[connect] uses paramaters when available', () => {
        const client = CoolMasterNetConnection.connect({
            host: '192.168.1.111',
            port: 1234,
            secure: true,
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(axios)
        // @TODO: expect(client).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[connect] uses a default port and is insecure', () => {
        const client = CoolMasterNetConnection.connect({
            host: '192.168.1.111',
            device: '443B960055F0',
        })

        expect(client).toBeInstanceOf(axios)
        // @TODO: expect(client).toHaveProperty('baseURL', 'http://192.168.1.111:10103/v1.0/device/443B960055F0/raw')
    })

    it('[connect] raises an exception for required paramaters', () => {
        const withoutDevice = () => CoolMasterNetConnection.connect({ host: '192.168.1.111' })
        const withoutHost = () => CoolMasterNetConnection.connect({ device: '443B960055F0' })

        expect(withoutDevice).toThrow(TypeError)
        expect(withoutHost).toThrow(TypeError)
    })
})
