import { ParamsSerializerOptions } from 'axios'

export class ParamsSerializer implements ParamsSerializerOptions {
    public serialize(params: Record<string, any>): string {
        const query = (params.command as string[])
            .map(param => param.replace(/\./g, '_'))
            .map(param => param.replace(/ /g, '&'))
            .join('&')

        return `command=${query}`
    }
}