import {List} from '../../list';

export abstract class TakeLast {

    static execute = <T>(values: T[], n: number): List<T> => new List<T>().reset(values.slice(values.length - n, values.length));

}
