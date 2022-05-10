import { List } from '../../list';
export declare abstract class Drop {
    static execute: <T>(values: T[], n: number) => List<T>;
}
