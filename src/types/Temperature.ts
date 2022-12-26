export enum TemperatureUnit {
    CELSIUS = 'C',
    FAHRENHEIT = 'F'
}


export class Temperature {
    protected static readonly PATTERN = /\d+(\.\d+)?[C|F]/

    public constructor(
        public readonly temperature: number,
        public readonly units: TemperatureUnit = TemperatureUnit.CELSIUS
    ) { }

    public static parse(raw: string): Temperature {
        const [temperature, unit] = raw.match(this.PATTERN)

        return new this(
            parseFloat(temperature),
            // @ts-ignore
            TemperatureUnit[unit] 
        )
    }
}