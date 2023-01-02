import { AxiosInstance } from 'axios'
import { LSParser } from './parsers/LSParser'
import { PropsParser } from './parsers/PropsParser'
import { GenericParser } from './parsers/GenericParser'
import { Mode, Parsable, Temperature } from './types'
import { CoolMasterNetConnection, ConnectionConfigs } from './CoolMasterNetConnection'
import { SetParser } from './parsers/SetParser'


export class CoolMasterNetClient {
    constructor(protected readonly client: AxiosInstance) { }

    protected async call(command: string, parser: Parsable, args: string[] = []) {
        const query = [command, ...args]
            .filter(Boolean)
            .map(param => param.replace(/\./g, '_'))
            .join('&')

        const { data } = await this.client.get('', { params: { command: query } })

        return parser.parse(data)
    }

    public get baseURL(): string {
        return this.client.defaults.baseURL
    }

    public async ls(uid?: string) {
        return await this.call('ls', LSParser, [uid])
    }

    public async ls2(uid?: string) {
        return await this.call('ls2', LSParser, [uid])
    }

    public async props() {
        return await this.call('props', PropsParser)
    }

    public async set() {
        return await this.call('set', SetParser)
    }

    public async on(uid?: string) {
        return await this.call('on', GenericParser, [uid])
    }

    public async allOn() {
        return this.on()
    }

    public async off(uid?: string) {
        return await this.call('off', GenericParser, [uid])
    }
    
    public async allOff() {
        return this.off()
    }
    
    public async mode(mode: Mode, uid?: string) {
        return await this.call(mode, GenericParser, [uid])
    }
    
    public async temperature(temperature: number|string|Temperature, uid? :string) {
        if (temperature instanceof Temperature) {
            temperature = temperature.degrees
        }

        return await this.call('temp', GenericParser, [uid, String(temperature)])
    }

    public static connect(configs: ConnectionConfigs = {}) {
        return new this(
            CoolMasterNetConnection.create(configs)
        )
    }
}