import { ParamsSerializerOptions } from 'axios'


type Params = {
    command: string[]
}

export class ParamsSerializer implements ParamsSerializerOptions {
    public serialize(params: Params): string {
        const query = params.command
            .map(param => param.replace(/\./g, '_'))
            .map(param => param.replace(/ /g, '&'))
            .join('&')

        return `command=${query}`
    }
}
