export declare abstract class First {
    static execute: <T>(values: T[], predicate?: ((value: T, index: number, array: T[]) => boolean) | undefined) => T;
}
