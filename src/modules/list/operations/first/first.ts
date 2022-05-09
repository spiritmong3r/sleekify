export abstract class First {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown): T => {
        const value = values.find(predicate);

        if (value) return value;
        else throw Error('No value matches the predicate');
    };

}
