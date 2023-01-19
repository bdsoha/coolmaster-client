export interface SettingsResponse {
    serialNumber: string
    version: string
    buildDate: Date
    application: string
    usbVCOMPort: boolean
    baudRate: number
    echo: boolean
    verbose: boolean
    vaMode: number
    port: number
    prompt: boolean
    degrees: 'C' | 'F'
    melody: string
    filter: 0 | 1 | '-'
    hvacLines: number
    maxIndoors: number
    proSize: number
    rstOnAssert: boolean
    foreachBreak: string
    mmiLock: boolean
}
