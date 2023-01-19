import { BaseCommand }      from './BaseCommand'
import { SettingsParser }   from '../parsers'
import { SettingsResponse } from '../types'


export class Settings extends BaseCommand {
    public all(): Promise<SettingsResponse> {
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
