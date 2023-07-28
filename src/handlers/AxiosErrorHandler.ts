import {ErrorHandler} from "../ErrorHandler";
import {AxiosError} from "axios";

export class AxiosErrorHandler extends ErrorHandler {
    public qualify(error: unknown): boolean {
        return error instanceof AxiosError;
    }

    public static getMessageFromError(error: AxiosError): string {
        return error.message + ' (' + (error.status ?? error.code ?? '') + ')';
    }
}