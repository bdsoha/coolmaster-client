export abstract class BaseParser {
    protected static normalizeRow(
        entry: string,
        delimiter: string = ' ',
        trim: boolean = true
    ) {
        const data = entry
            .replace(/  +/g, ' ')
            .split(delimiter)

        if (trim) {
            return data.map(cell => cell.trim())
        }

        return data
    }
}