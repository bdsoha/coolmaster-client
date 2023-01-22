import { PowerStatus } from '../types'
import { BaseCommand } from './BaseCommand'


export class Power extends BaseCommand {
    public set(status: PowerStatus, uid?: string) {
        return this.callGeneric(status as string, [uid])
    }

    public on(uid?: string) {
        return this.set(PowerStatus.ON, uid)
    }

    public allOn() {
        return this.on()
    }

    public off(uid?: string) {
        return this.set(PowerStatus.OFF, uid)
    }

    public allOff() {
        return this.off()
    }
}
