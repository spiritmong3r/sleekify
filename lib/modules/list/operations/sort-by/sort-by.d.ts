import { List } from '../../list';
export declare abstract class SortBy {
    static execute: <T, U>(values: T[], callback: (value: T) => U) => List<T>;
}
