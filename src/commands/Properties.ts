import { BaseCommand }                     from './BaseCommand'
import { Mode, Speed }                     from '../types'
import { GenericParser, PropertiesParser } from '../parsers'


export class Properties extends BaseCommand {
    public all() {
        return this.call('props', PropertiesParser)
    }

    public name(uid: string, name: string) {
        return this.call('props', GenericParser, [uid, 'name', name])
    }

    public visible(uid: string, visible: boolean) {
        return this.call('props', GenericParser, [uid, 'visible', this.boolToInt(visible)])
    }

    public speed(uid: string, speeds: Array<Speed>, operation: '-' | '+') {
        const joined = speeds
            // @ts-ignore
            .map(speed => `${operation}${speed[0]}`)
            .join('')

        return this.call('props', GenericParser, [uid, 'fspeed', joined])
    }

    public mode(uid: string, modes: Array<Mode>, operation: '-' | '+') {
        const joined = modes
            // @ts-ignore
            .map(mode => `${operation}${mode[0]}`)
            .join('')

        return this.call('props', GenericParser, [uid, 'mode', joined])
    }
}
