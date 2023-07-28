import {ErrorHandler} from "./ErrorHandler";

export class ErrorHandlerQueue {

    private readonly handlers: ErrorHandler[];

    protected constructor() {
        this.handlers = [];
    }

    public static create(): ErrorHandlerQueue
    {
        return new this();
    }

    public add(handler: ErrorHandler): ErrorHandlerQueue {
        this.handlers.push(handler);

        return this;
    }

    public catch(error: unknown, throwOnMissing: boolean = true): void {
        for (const handler of this.handlers) {
            if (handler.qualify(error)) {
                handler.getCallback()(error);

                return;
            }
        }

        if (throwOnMissing) {
            throw error;
        }
    }
}