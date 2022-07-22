export abstract class AllOperation {
    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean => values.every(predicate);
}
