import axios from 'axios'


export type ConnectionConfigs = {
    host?: string,
    port?: number,
    secure?: boolean,
    device?: string
}

export class CoolMasterNetConnection {
    protected constructor(protected readonly client: axios.AxiosClient) { }

    public get baseURL() : string {
        return self.client.baseURL
    }
    
    public static connect(configs: ConnectionConfigs) {
        const host = configs.host ?? process.env.COOLMASTER_CLIENT_HOST ?? null
        const port = configs.port ?? process.env.COOLMASTER_CLIENT_PORT ?? 10103
        const secure = configs.secure ?? process.env.COOLMASTER_CLIENT_SECURE ?? true
        const device = configs.device ?? process.env.COOLMASTER_CLIENT_DEVICE ?? null

        const protocol = secure.toString().toLowerCase() === 'true' ? 'https' : 'http'

        if (!host) {
            throw TypeError('Host is required')
        }

        if (!device) {
            throw TypeError('Device is required')
        }

        return new this(axios.client.create({
            baseURL: `${protocol}://${host}:${port}/v1.0/device/${device}/`,
            headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
}