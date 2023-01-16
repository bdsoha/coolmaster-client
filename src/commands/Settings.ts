import { BaseCommand }                   from './BaseCommand'
import { GenericParser, SettingsParser } from '../parsers'


export class Settings extends BaseCommand {
    public async all() {
        return await this.call('set', SettingsParser)
    }

    public async reset() {
        return await this.call('set', GenericParser, ['defaults'])
    }

    public async filterVisibility(value: boolean) {
        return await this.call('set', GenericParser, ['filter visi', value ? 1 : 0])
    }

    public async melody(value: string) {
        return await this.call('set', GenericParser, ['melody', value])
    }
}
