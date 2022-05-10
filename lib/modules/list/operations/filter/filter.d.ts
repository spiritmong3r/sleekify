import { List } from '../../list';
export declare abstract class Filter {
    static execute: <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean) => List<T>;
}
