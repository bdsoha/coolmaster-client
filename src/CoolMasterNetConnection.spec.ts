import { CoolMasterNetConnection } from './CoolMasterNetConnection'


describe('CoolMasterNetConnection', () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => process.env = env)

    it('[create] uses environment variables when available', () => {
        process.env.COOLMASTER_CLIENT_HOST = '192.168.1.111'
        process.env.COOLMASTER_CLIENT_PORT = '1234'
        process.env.COOLMASTER_CLIENT_SECURE = 'true'
        process.env.COOLMASTER_CLIENT_DEVICE = '443B960055F0'

        const client = CoolMasterNetConnection.create()

        expect(client.defaults).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[create] uses paramaters when available', () => {
        const client = CoolMasterNetConnection.create({
            host: '192.168.1.111',
            port: 1234,
            secure: true,
            device: '443B960055F0',
        })

        expect(client.defaults).toHaveProperty('baseURL', 'https://192.168.1.111:1234/v1.0/device/443B960055F0/raw')
    })

    it('[create] uses a default port and is insecure', () => {
        const client = CoolMasterNetConnection.create({
            host: '192.168.1.111',
            device: '443B960055F0',
        })

        expect(client.defaults).toHaveProperty('baseURL', 'http://192.168.1.111:10103/v1.0/device/443B960055F0/raw')
    })

    it('[create] raises an exception for required paramaters', () => {
        const withoutDevice = () => CoolMasterNetConnection.create({ host: '192.168.1.111' })
        const withoutHost = () => CoolMasterNetConnection.create({ device: '443B960055F0' })

        expect(withoutDevice).toThrow(TypeError)
        expect(withoutHost).toThrow(TypeError)
    })
})
