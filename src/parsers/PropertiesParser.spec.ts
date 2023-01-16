import { json, response }   from '../__stubs__'
import { PropertiesParser } from './PropertiesParser'


describe('PropertiesParser', () => {
    it('[parse] parses a JSON response', () => {
        const parsed = PropertiesParser.parse(json.props)

        expect(parsed).toStrictEqual(response.props)
    })
})
