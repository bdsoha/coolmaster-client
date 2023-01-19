import { BaseCommand }      from './BaseCommand'
import { Mode, Speed }      from '../types'
import { PropertiesParser } from '../parsers'


export type Operation = '-' | '+'

export class Properties extends BaseCommand {
    protected joinOperations(values: string[], operation: Operation) {
        return values
            .map(value => `${operation}${value[0]}`)
            .join('')
    }

    public all(): Promise<Properties> {
        return this.call('props', PropertiesParser)
    }

    public name(uid: string, name: string) {
        return this.callGeneric('props', [uid, 'name', name])
    }

    public visible(uid: string, visible: boolean) {
        return this.callGeneric('props', [uid, 'visible', this.boolToInt(visible)])
    }

    public speed(uid: string, speeds: Array<Speed>, operation: Operation) {
        return this.callGeneric(
            'props',
            [uid, 'fspeed', this.joinOperations(speeds as string[], operation)]
        )
    }

    public mode(uid: string, modes: Array<Mode>, operation: Operation) {
        return this.callGeneric(
            'props',
            [uid, 'mode', this.joinOperations(modes as string[], operation)]
        )
    }
}
