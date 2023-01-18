import axios, { AxiosInstance } from 'axios'
import { ParamsSerializer }     from './ParamsSerializer'


export type ConnectionConfigs = Partial<{
    host: string,
    port: number,
    secure: boolean,
    device: string
}>

export class CoolMasterNetConnection {
    protected static get<T extends keyof ConnectionConfigs>(
        configs: ConnectionConfigs,
        key: T,
        fallback: string | number | boolean = undefined,
    ) {
        const found = configs[key] ?? process.env[`COOLMASTER_CLIENT_${key.toUpperCase()}`] ?? fallback

        if (found === undefined) {
            throw TypeError(`A value for [${key}] is required`)
        }

        return found
    }

    public static create(configs: ConnectionConfigs = {}): AxiosInstance {
        const host = this.get(configs, 'host')
        const port = Number(this.get(configs, 'port', 10103))
        const secure = this.get(configs, 'secure', false)
        const device = this.get(configs, 'device')

        const protocol = secure.toString().toLowerCase() === 'true' ? 'https' : 'http'

        return axios.create({
            baseURL:          `${protocol}://${host}:${port}/v1.0/device/${device}/raw`,
            headers:          { 'Content-Type': 'application/json' },
            paramsSerializer: new ParamsSerializer()
        })
    }
}
