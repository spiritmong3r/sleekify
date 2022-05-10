export declare abstract class LastOrNull {
    static execute: <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown) => T | undefined;
}
