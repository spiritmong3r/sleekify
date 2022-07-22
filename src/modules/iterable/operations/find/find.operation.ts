export abstract class FindOperation {
    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): T | undefined => values.find(predicate);
}
