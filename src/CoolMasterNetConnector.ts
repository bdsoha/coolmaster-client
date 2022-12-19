export type ConnectionConfigs = {
    host: string,
    port: number,
    secure: boolean,
    device: string
}

export class CoolMasterNetConnector {
    protected constructor(protected configs: ConnectionConfigs) { }

    public get baseURL(): string {
        const protocol = this.configs.secure ? 's' : ''
        
        return `http${protocol}://${this.configs.host}:${this.configs.port}/v1.0/device/${this.configs.device}/`
    }

    public static connect(configs: ConnectionConfigs) {
        return new this(configs)
    }
}