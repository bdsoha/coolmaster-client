import { json, response } from '../__stubs__'
import { LSParser } from './LSParser'

describe('LSParser', () => {
    it('[parse] parses a JSON response', () => {
        const parsed = LSParser.parse(json.ls)

        expect(parsed).toStrictEqual(response.ls)
    })
})