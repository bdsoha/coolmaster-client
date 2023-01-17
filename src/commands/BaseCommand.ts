import { AxiosInstance }      from 'axios'
import { GenericParser }      from '../parsers'
import { Parsable, Response } from '../types'


export abstract class BaseCommand {
    constructor(
        protected readonly client: AxiosInstance
    ) { }

    protected async call(
        command: string,
        parser: Parsable,
        args: Array<string | number> = []
    ) {
        const query = [command, ...args]
            .filter(param => param !== undefined)
            .map(String)

        const { data } = await this.client.get<Response>('', { params: { command: query } })

        // if (data.rc !== 'OK') {
        //     throw Error(data.rc)
        // }

        return parser.parse(data)
    }

    protected callGeneric(command: string, args: Array<string | number> = []) {
        return this.call(command, GenericParser, args)
    }

    protected boolToInt(value: boolean) {
        return value ? 1 : 0
    }
}
