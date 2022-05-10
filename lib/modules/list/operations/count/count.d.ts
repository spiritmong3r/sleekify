export declare abstract class Count {
    static execute: <T>(values: T[], predicate?: ((value: T, index: number, array: T[]) => boolean) | undefined) => number;
}
