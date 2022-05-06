export abstract class Reduce {

    static execute = <T, U>(values: T[], callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U => values.reduce(callback, initialValue);

}
