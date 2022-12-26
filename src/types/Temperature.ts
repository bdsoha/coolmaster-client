export enum TemperatureUnit {
    CELSIUS = 'C',
    FAHRENHEIT = 'F'
}


export class Temperature {
    public constructor(
        public readonly degrees: number,
        public readonly units: TemperatureUnit = TemperatureUnit.CELSIUS
    ) { }

    public static parse(raw: string): Temperature {
        return new this(
            parseFloat(raw),
            raw.slice(-1).toUpperCase() === TemperatureUnit.FAHRENHEIT 
                ? TemperatureUnit.FAHRENHEIT 
                : TemperatureUnit.CELSIUS
        )
    }
}