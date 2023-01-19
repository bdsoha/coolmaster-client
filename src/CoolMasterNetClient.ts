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

    public ls(uid?: string): Promise<Types.LSResponse> {
        return this.call('ls', Parsers.LSParser, [uid])
    }

    public ls2(uid?: string) {
        return this.call('ls2', Parsers.LSParser, [uid])
    }

    public on(uid?: string) {
        return this.callGeneric('on', [uid])
    }

    public allOn() {
        return this.on()
    }

    public off(uid?: string) {
        return this.callGeneric('off', [uid])
    }

    public allOff() {
        return this.off()
    }

    public mode(mode: Types.Mode, uid?: string) {
        return this.callGeneric(mode as string, [uid])
    }

    public resetFilter(uid?: string) {
        return this.callGeneric('filt', [uid])
    }

    public temperature(temperature: number | string | Types.Temperature, uid?: string) {
        if (temperature instanceof Types.Temperature) {
            temperature = temperature.degrees
        }

        return this.callGeneric('temp', [uid, temperature])
    }

    public speed(speed: Types.Speed, uid?: string) {
        const casted = speed as string

        return this.callGeneric('speed', [uid, casted[0]])
    }

    public swing(swing: Types.Swing, uid?: string) {
        return this.callGeneric('swing', [uid, swing])
    }

    public static connect(configs: ConnectionConfigs = {}) {
        return new this(
            CoolMasterNetConnection.create(configs)
        )
    }
}
