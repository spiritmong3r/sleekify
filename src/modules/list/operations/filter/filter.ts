import {List} from '../../list';

export abstract class Filter {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): List<T> => new List(...values.filter(predicate));

}
