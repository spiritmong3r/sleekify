import {List} from '../../list';

export abstract class Take {

    static execute = <T>(values: T[], n: number): List<T> => new List<T>().reset(values.slice(0, n));

}
