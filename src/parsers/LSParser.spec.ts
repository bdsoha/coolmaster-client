import lsResponse from "../__stubs__/ls.response"
import lsResponseJSON from "../__stubs__/ls.response.json"
import { LSParser } from "./LSParser"

describe('LSParser', () => {
    it('[parse] parses a JSON response', () => {
        const parsed = LSParser.parse(lsResponseJSON)

        expect(parsed).toStrictEqual(lsResponse)
    })
})