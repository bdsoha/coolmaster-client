import { CoolMasterNetConnection, ConnectionConfigs } from './utilities/CoolMasterNetConnection'
import * as Commands                                  from './commands'
import * as Parsers                                   from './parsers'
import * as Types                                     from './types'


export class CoolMasterNetClient extends Commands.BaseCommand {
    public get properties() {
        return new Commands.Properties(this.client)
    }

    public get settings() {
        return new Commands.Settings(this.client)
    }

    public async ls(uid?: string) {
        return await this.call('ls', Parsers.LSParser, [uid])
    }

    public async ls2(uid?: string) {
        return await this.call('ls2', Parsers.LSParser, [uid])
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
