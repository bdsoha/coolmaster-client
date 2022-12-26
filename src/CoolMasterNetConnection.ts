import axios, {AxiosInstance} from 'axios' 
import { LSParser } from './parsers/LSParser'
import { PropsParser } from './parsers/PropsParser'


export type ConnectionConfigs = {
    host?: string,
    port?: number,
    secure?: boolean,
    device?: string
}

export class CoolMasterNetConnection {
    constructor(protected readonly client: AxiosInstance) { }
    
    public get baseURL() : string {
        return this.client.defaults.baseURL
    }
    
    public async ls() {
        const {data} = await this.client.get('', {params: {command: 'ls'}})

        return LSParser.parse(data)
    }
    
    public async ls2() {
        const {data} = await this.client.get('', {params: {command: 'ls2'}})
        
        return LSParser.parse(data)
    }
    
    public async props() {
        const {data} = await this.client.get('', {params: {command: 'props'}})

        return PropsParser.parse(data)
    }

    public static connect(configs: ConnectionConfigs = {}) {
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

        return new this(axios.create({
            baseURL: `${protocol}://${host}:${port}/v1.0/device/${device}/raw`,
            headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
}