import {List} from '../../list';

export abstract class MapOperation {

    static execute = <T, U>(values: T[], selector: (value: T, index: number, array: T[]) => U): List<U> => new List<U>().reset(values.map(selector));

}