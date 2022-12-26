import { Temperature, Speed, Mode } from '../types'

export interface PropsEntry {
    uid: string
    name: string
    visible: boolean
    modes: Mode[]
    speeds: Speed[]
    time: null
    coolRange: [Temperature, Temperature]
    heatRange: [Temperature, Temperature]
    lock: boolean
}

export class PropsParser {
    public static parse(json: any): PropsEntry[] {
        const { data } = json

        data.splice(0, 2)

        return data.map((entry: string) => {
            const normalized = entry.replace(/  +/g, ' ').split('|')

            return {
                uid: normalized[0],
                name: normalized[1],
                visible: !!parseInt(normalized[2]),
                modes: normalized[3], // @TODO
                speed: normalized[4], // @TODO
                time: normalized[5], // @TODO
                coolRange: normalized[6], // @TODO
                heatRange: normalized[7], // @TODO
                lock: Boolean(normalized[8])
            }
        })
    }
}