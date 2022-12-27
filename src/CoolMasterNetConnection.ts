import axios, {AxiosInstance} from 'axios' 
import { LSParser } from './parsers/LSParser'
import { PropsParser } from './parsers/PropsParser'
import { GenericParser } from './parsers/GenericParser'
import { Parsable } from './types'


export type ConnectionConfigs = {
    host?: string,
    port?: number,
    secure?: boolean,
    device?: string
}

export class CoolMasterNetConnection {
    constructor(protected readonly client: AxiosInstance) { }
    
    protected async call(command: string, parser: Parsable) {
        const {data} = await this.client.get('', {params: {command}})

        return parser.parse(data)
    }

    public get baseURL() : string {
        return this.client.defaults.baseURL
    }
    
    public async ls() {
        return await this.call('ls', LSParser)
    }
    
    public async ls2() {
        return await this.call('ls2', LSParser)
    }
    
    public async props() {
        return await this.call('props', PropsParser)
    }
    
    public async on() {
        return await this.call('on', GenericParser)
    }

    public async allOn() {
        return this.on()
    }
    
    public async off() {
        return await this.call('off', GenericParser)
    }

    public async allOff() {
        return this.off()
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