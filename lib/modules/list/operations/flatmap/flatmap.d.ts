import { List } from '../../list';
export declare abstract class Flatmap {
    static execute: <T, U, This = undefined>(values: T[], callback: (this: This, value: T, index: number, array: T[]) => U | U[]) => List<U>;
}
