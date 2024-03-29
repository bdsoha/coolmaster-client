import { BaseParser }                 from './BaseParser'
import { ParsableCallback }           from '../types/Parsable'
import { Response, SettingsResponse } from '../types'


export class SettingsParser extends BaseParser {
    protected static readonly lookup = {
        'S/N':            'serialNumber',
        'version':        'version',
        'build date':     ['buildDate', (value: string) => new Date(value)],
        'application':    'application',
        'USB VCOM Port':  ['usbVCOMPort', parseInt],
        'baud rate':      ['baudRate', parseInt],
        'echo':           ['echo', this.booleanFromString],
        'verbose':        ['verbose', this.booleanFromString],
        'VA mode':        ['vaMode', parseInt],
        'aserver port':   ['port', parseInt],
        'aserver prompt': ['prompt', this.booleanFromString],
        'deg C/F':        'degrees',
        'melody':         'melody',
        'filter':         'filter',
        'HVAC lines':     ['hvacLines', parseInt],
        'max indoors':    ['maxIndoors', parseInt],
        'PRO size':       ['proSize', parseInt],
        'rst on assert':  ['resetOnAssert', this.booleanFromString],
        'foreach break':  'foreachBreak',
        'MMI lock':       ['mmiLock', this.booleanFromString],
    } as Record<string, string | [string, ParsableCallback]>

    public static parse(response: Response): Partial<SettingsResponse> {
        const entries = response.data
            .map((entry: string) => {
                const normalized = entry.split(/:(.*)/s).map(pair => pair.trim())

                const reverse = this.lookup[normalized[0]]

                if (!reverse) {
                    return null
                }

                if (Array.isArray(reverse)) {
                    const [key, cast]  = reverse

                    return [key, cast(normalized[1])]
                }

                return [reverse, normalized[1]]
            })
            .filter(Boolean)

        return Object.fromEntries(entries)
    }
}
