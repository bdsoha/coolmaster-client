export class EnumParser {
    public static parse<T>(this: T, raw: string) : T {
        raw = raw.toLowerCase()
        
        if (raw.length === 1) {    
            return Object.values(this).find(
                value => value[0].toLowerCase() === raw
            )
        }
        
        return Object.values(this).find(
            value => value.toLowerCase() === raw
        )
    }
}