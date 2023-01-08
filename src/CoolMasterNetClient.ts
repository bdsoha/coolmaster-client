import { AxiosInstance }                              from 'axios'
import { CoolMasterNetConnection, ConnectionConfigs } from './utilities/CoolMasterNetConnection'
import * as Parsers                                   from './parsers'
import * as Types                                     from './types'


export class CoolMasterNetClient {
    constructor(protected readonly client: AxiosInstance) { }

    protected async call(
        command: string,
        parser: Types.Parsable,
        args: Array<string|number> = []
    ) {
        const query = [command, ...args]
            .filter(param => param !== undefined)
            .map(String)

        const { data } = await this.client.get<Types.Response>('', { params: { command: query } })

        // if (data.rc !== 'OK') {
        //     throw Error(data.rc)
        // }

        return parser.parse(data)
    }

    public get baseURL(): string {
        return this.client.defaults.baseURL
    }

    public async ls(uid?: string) {
        return await this.call('ls', Parsers.LSParser, [uid])
    }

    public async ls2(uid?: string) {
        return await this.call('ls2', Parsers.LSParser, [uid])
    }

    public async props() {
        return await this.call('props', Parsers.PropsParser)
    }

    public async on(uid?: string) {
        return await this.call('on', Parsers.GenericParser, [uid])
    }

    public async allOn() {
        return this.on()
    }

    public async off(uid?: string) {
        return await this.call('off', Parsers.GenericParser, [uid])
    }

    public async allOff() {
        return this.off()
    }

    public async mode(mode: Types.Mode, uid?: string) {
        return await this.call(mode as string, Parsers.GenericParser, [uid])
    }

    public async resetFilter(uid?: string) {
        return await this.call('filt', Parsers.GenericParser, [uid])
    }

    public async settings() {
        return await this.call('set', Parsers.SettingsParser)
    }

    public async resetSettings() {
        return await this.call('set', Parsers.GenericParser, ['defaults'])
    }

    public async setFilterVisibility(value: boolean) {
        return await this.call('set', Parsers.GenericParser, ['filter visi', value ? 1 : 0])
    }

    public async setMelody(value: string) {
        return await this.call('set', Parsers.GenericParser, ['melody', value])
    }

    public async temperature(temperature: number | string | Types.Temperature, uid?: string) {
        if (temperature instanceof Types.Temperature) {
            temperature = temperature.degrees
        }

        return await this.call('temp', Parsers.GenericParser, [uid, temperature])
    }

    public async speed(speed: Types.Speed, uid?: string) {
        const casted = speed as string

        return await this.call('speed', Parsers.GenericParser, [uid, casted[0]])
    }

    public async swing(swing: Types.Swing, uid?: string) {
        return await this.call('swing', Parsers.GenericParser, [uid, swing])
    }

    public static connect(configs: ConnectionConfigs = {}) {
        return new this(
            CoolMasterNetConnection.create(configs)
        )
    }
}
