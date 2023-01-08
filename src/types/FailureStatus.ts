export class FailureStatus {
    public constructor(
        protected readonly code: number = null
    ) {}

    public get failed() : boolean {
        return !!this.code
    }

    public static parse(raw: string) : FailureStatus {
        return new this(
            raw.toUpperCase() === 'OK'
            ? null
            : parseFloat(raw)
        )
    }
}
