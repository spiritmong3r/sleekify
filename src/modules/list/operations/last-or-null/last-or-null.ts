export abstract class LastOrNull {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown): T | undefined => {
        const valuesFound = values.filter(predicate);

        if (valuesFound.length > 0) return valuesFound[valuesFound.length - 1];
        else return undefined;
    };

}
