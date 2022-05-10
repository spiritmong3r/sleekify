import { List } from '../../list';
export declare abstract class Map {
    static execute: <T, U>(values: T[], callback: (value: T, index: number, array: T[]) => U) => List<U>;
}
