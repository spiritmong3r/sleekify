export abstract class LastOrNullOperation {

    static execute = <T>(values: T[], predicate?: (value: T, index: number, array: T[]) => unknown): T | undefined => {
        const valuesFound = (predicate) ? values.filter(predicate) : values;

        if (valuesFound.length > 0) return valuesFound[valuesFound.length - 1];
        else return undefined;
    };

}
