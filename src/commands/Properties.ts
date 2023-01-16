import { BaseCommand }      from './BaseCommand'
import { PropertiesParser } from '../parsers'


export class Properties extends BaseCommand {
    public async all() {
        return await this.call('props', PropertiesParser)
    }
}
