import { BaseCommand }                     from './BaseCommand'
import { Mode, Speed }                     from '../types'
import { GenericParser, PropertiesParser } from '../parsers'

export type Operation = '-' | '+'

export class Properties extends BaseCommand {
    protected joinOperations(values: string[], operation: Operation) {
        return values
            .map(value => `${operation}${value[0]}`)
            .join('')
    }

    public all() {
        return this.call('props', PropertiesParser)
    }

    public name(uid: string, name: string) {
        return this.call('props', GenericParser, [uid, 'name', name])
    }

    public visible(uid: string, visible: boolean) {
        return this.call('props', GenericParser, [uid, 'visible', this.boolToInt(visible)])
    }

    public speed(uid: string, speeds: Array<Speed>, operation: Operation) {
        return this.call(
            'props',
            GenericParser,
            [uid, 'fspeed', this.joinOperations(speeds as string[], operation)]
        )
    }

    public mode(uid: string, modes: Array<Mode>, operation: Operation) {
        return this.call(
            'props',
            GenericParser,
            [uid, 'mode', this.joinOperations(modes as string[], operation)]
        )
    }
}
