Small example
```ts
import {ErrorHandlerQueue} from "./ErrorHandlerQueue";
import {AxiosErrorHandler} from "./AxiosErrorHandler";
import {StringErrorHandler} from "./StringErrorHandler";

try {
    // code that can throw exceptions
} catch (error: unknown) {
    ErrorHandlerQueue.create()
        .add(new AxiosErrorHandler((error: any) => {
            console.error(AxiosErrorHandler.getMessageFromError(error as AxiosError));
        }))
        .add(StringErrorHandler.createWithDefaultBehavior())
        .catch(error, true);
}
```

Discussion started here: https://phpc.social/@jorisvaesen/110787343759497768