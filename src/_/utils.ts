const buildErrorMessage = (message: string): string =>
    `twicpics-react-native-components ${message}`;

export const regExpFinderFactory =
    <T = string>(regExp: RegExp, filter: ((value: T) => T) | undefined = undefined) =>
    (value: T | string): T => {
        let found: any;
        if (value) {
            `${value}`.replace(regExp, (_, v) => (found = v));
        }
        return filter ? filter(found) : found;
    };

export const throwError = (message: string): never => {
    throw new Error(buildErrorMessage(message));
};

export const trimRegExpFactory = (items: Array<string> | string, border = `\\s`): RegExp =>
    new RegExp(`^(?:${border})*(${Array.isArray(items) ? items.join(`|`) : items})(?:${border})*$`);
