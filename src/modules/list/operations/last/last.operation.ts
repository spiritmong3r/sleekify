export abstract class LastOperation {

    static execute = <T>(values: T[], predicate?: (value: T, index: number, array: T[]) => unknown): T => {
        const valuesFound = (predicate) ? values.filter(predicate) : values;

        if (valuesFound.length > 0) return valuesFound[valuesFound.length - 1];
        else throw Error('No value matches the predicate');
    };

}
