export declare abstract class Last {
    static execute: <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown) => T;
}
