import { AxiosInstance } from 'axios'
import { LSParser } from './parsers/LSParser'
import { PropsParser } from './parsers/PropsParser'
import { GenericParser } from './parsers/GenericParser'
import { Mode, Parsable, Response, Speed, Swing, Temperature } from './types'
import { CoolMasterNetConnection, ConnectionConfigs } from './CoolMasterNetConnection'
import { SetParser } from './parsers/SetParser'


export class CoolMasterNetClient {
    constructor(protected readonly client: AxiosInstance) { }

    protected async call(command: string, parser: Parsable, args: any[] = []) {
        const query = [command, ...args]
            .filter(param => param !== undefined)
            .map(String)

        const { data } = await this.client.get<any, any, Response>('', { params: { command: query } })

        // if (data.rc !== 'OK') {
        //     throw Error(data.rc)
        // }

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

    public async resetFilter(uid?: string) {
        return await this.call('filt', GenericParser, [uid])
    }

    public async settings() {
        return await this.call('set', SetParser)
    }

    public async resetSettings() {
        return await this.call('set', GenericParser, ['defaults'])
    }

    public async setFilterVisibility(value: boolean) {
        return await this.call('set', GenericParser, ['filter visi', value ? 1 : 0])
    }

    public async setMelody(value: string) {
        return await this.call('set', GenericParser, ['melody', value])
    }

    public async temperature(temperature: number | string | Temperature, uid?: string) {
        if (temperature instanceof Temperature) {
            temperature = temperature.degrees
        }

        return await this.call('temp', GenericParser, [uid, temperature])
    }

    public async speed(speed: Speed, uid?: string) {
        return await this.call('speed', GenericParser, [uid, speed[0]])
    }

    public async swing(swing: Swing, uid?: string) {
        return await this.call('swing', GenericParser, [uid, swing])
    }

    public static connect(configs: ConnectionConfigs = {}) {
        return new this(
            CoolMasterNetConnection.create(configs)
        )
    }
}