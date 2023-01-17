import { BaseCommand }                   from './BaseCommand'
import { GenericParser, SettingsParser } from '../parsers'


export class Settings extends BaseCommand {
    public all() {
        return this.call('set', SettingsParser)
    }

    public reset() {
        return this.call('set', GenericParser, ['defaults'])
    }

    public filterVisibility(value: boolean) {
        return this.call('set', GenericParser, ['filter visi', this.boolToInt(value)])
    }

    public melody(value: string) {
        return this.call('set', GenericParser, ['melody', value])
    }
}
