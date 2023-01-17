import { BaseCommand }    from './BaseCommand'
import { SettingsParser } from '../parsers'


export class Settings extends BaseCommand {
    public all() {
        return this.call('set', SettingsParser)
    }

    public reset() {
        return this.callGeneric('set', ['defaults'])
    }

    public filterVisibility(value: boolean) {
        return this.callGeneric('set', ['filter visi', this.boolToInt(value)])
    }

    public melody(value: string) {
        return this.callGeneric('set', ['melody', value])
    }
}
