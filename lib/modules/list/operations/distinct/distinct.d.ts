import { List } from '../../list';
export declare abstract class Distinct {
    static execute: <T>(values: T[]) => List<T>;
}
