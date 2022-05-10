export declare abstract class Find {
    static execute: <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean) => T | undefined;
}
