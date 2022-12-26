import lsResponse from "../__stubs__/ls.response"
import lsResponseJson from "../__stubs__/ls.response.json"
import { LSParser } from "./LSParser"

describe('LSParser', () => {
    it('[parse] parses a JSON response', () => {
        const parsed = LSParser.parse(lsResponseJson)

        expect(parsed).toStrictEqual(lsResponse)
    })
})