export abstract class FirstOperation {
    static execute = <T>(values: T[], predicate?: (value: T, index: number, array: T[]) => boolean): T => {
        const value = predicate ? values.find(predicate) : values[0];

        if (value) return value;
        else throw Error('No value matches the predicate');
    };
}
