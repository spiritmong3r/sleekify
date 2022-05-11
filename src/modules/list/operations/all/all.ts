export abstract class All {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean => values.every(predicate);

}
