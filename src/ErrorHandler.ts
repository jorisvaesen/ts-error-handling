export abstract class ErrorHandler {

    public constructor(
        protected readonly callback: Function
    ) {}

    public getCallback(): Function {
        return this.callback;
    }

    abstract qualify(error: unknown): boolean;
}