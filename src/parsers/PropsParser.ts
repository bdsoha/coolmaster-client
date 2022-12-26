import { Temperature, Speed, Mode } from '../types'

export interface PropsEntry {
    uid: string
    name: string
    visible: boolean
    modes: Mode[]
    speeds: Speed[]
    time: null
    coolRange: [Temperature | null, Temperature|null]
    heatRange: [Temperature| null, Temperature| null]
    lock: boolean
}

export class PropsParser {
    protected static modes(cell: string): Mode[] {
        return cell.split(' ').map(letter => Mode.parse(letter))
    }

    protected static speeds(cell: string): Speed[] {
        return cell.split(' ').map(letter => Speed.parse(letter))
    }

    public static parse(json: any): PropsEntry[] {
        const { data } = json

        data.splice(0, 2)

        return data.map((entry: string) => {
            const normalized = entry.replace(/  +/g, ' ').split('|').map(cell => cell.trim())

            return {
                uid: normalized[0],
                name: normalized[1],
                visible: !!parseInt(normalized[2]),
                modes: this.modes(normalized[3]),
                speed: this.speeds(normalized[4]),
                time: normalized[5], // @TODO
                coolRange: normalized[6], // @TODO
                heatRange: normalized[7], // @TODO
                lock: !!parseInt(normalized[8])
            }
        })
    }
}