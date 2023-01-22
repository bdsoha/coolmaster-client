import { BaseCommand }                     from './BaseCommand'
import { PropertiesParser }                from '../parsers'
import { Mode, Speed, PropertiesResponse } from '../types'


export type Operation = '-' | '+'

export class Properties extends BaseCommand {
    protected joinOperations(values: string[], operation: Operation) {
        return values
            .map(value => `${operation}${value[0]}`)
            .join('')
    }

    public all(): Promise<PropertiesResponse[]> {
        return this.call('props', PropertiesParser)
    }

    public name(uid: string, name: string) {
        return this.callGeneric('props', [uid, 'name', name])
    }

    public visible(uid: string, visible: boolean) {
        return this.callGeneric('props', [uid, 'visible', this.boolToInt(visible)])
    }

    public speed(uid: string, speeds: Speed[], operation: Operation) {
        return this.callGeneric(
            'props',
            [uid, 'fspeed', this.joinOperations(speeds as string[], operation)]
        )
    }

    public mode(uid: string, modes: Mode[], operation: Operation) {
        return this.callGeneric(
            'props',
            [uid, 'mode', this.joinOperations(modes as string[], operation)]
        )
    }
}
