export abstract class Last {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown): T => {
        const valuesFound = values.filter(predicate);

        if (valuesFound.length > 0) return valuesFound[valuesFound.length - 1];
        else throw Error('No value matches the predicate');
    };

}
