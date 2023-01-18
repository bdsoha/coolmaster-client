import { Response } from '../types'


export class GenericParser {
    public static parse(response: Response) {
        return response.rc === 'OK'
    }
}
