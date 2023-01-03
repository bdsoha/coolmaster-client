import axios, { AxiosInstance } from 'axios'
import { ParamsSerializer } from './utilities'


export type ConnectionConfigs = {
    host?: string,
    port?: number,
    secure?: boolean,
    device?: string
}

export class CoolMasterNetConnection {
    public static create(configs: ConnectionConfigs = {}): AxiosInstance {
        const host = configs.host ?? process.env.COOLMASTER_CLIENT_HOST ?? null
        const port = configs.port ?? process.env.COOLMASTER_CLIENT_PORT ?? 10103
        const secure = configs.secure ?? process.env.COOLMASTER_CLIENT_SECURE ?? false
        const device = configs.device ?? process.env.COOLMASTER_CLIENT_DEVICE ?? null

        const protocol = secure.toString().toLowerCase() === 'true' ? 'https' : 'http'

        if (!host) {
            throw TypeError('Host is required')
        }

        if (!device) {
            throw TypeError('Device is required')
        }

        return axios.create({
            baseURL: `${protocol}://${host}:${port}/v1.0/device/${device}/raw`,
            headers: {
                'Content-Type': 'application/json'
            },
            paramsSerializer: new ParamsSerializer()
        })
    }
}