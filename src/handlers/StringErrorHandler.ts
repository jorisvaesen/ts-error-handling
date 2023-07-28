import {ErrorHandler} from "../ErrorHandler";

export class StringErrorHandler extends ErrorHandler {
    public qualify(error: unknown): boolean {
        return typeof error === 'string';
    }

    public static createWithDefaultBehavior(): StringErrorHandler {
        return new StringErrorHandler((error: any) => {
            console.log(error as string);
        })
    }
}