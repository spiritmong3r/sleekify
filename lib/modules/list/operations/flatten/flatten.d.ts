import { List } from '../../list';
export declare abstract class Flatten {
    static execute: <T>(values: T[], depth?: number) => List<T>;
}
