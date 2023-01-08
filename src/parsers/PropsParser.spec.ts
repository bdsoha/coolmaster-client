import { PropsParser }    from './PropsParser'
import { json, response } from '../__stubs__'


describe('PropsParser', () => {
    it('[parse] parses a JSON response', () => {
        const parsed = PropsParser.parse(json.props)

        expect(parsed).toStrictEqual(response.props)
    })
})
