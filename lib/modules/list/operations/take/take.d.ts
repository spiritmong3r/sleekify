import { List } from '../../list';
export declare abstract class Take {
    static execute: <T>(values: T[], n: number) => List<T>;
}
