import {List} from '../../list';

export abstract class Drop {

    static execute = <T>(values: T[], n: number): List<T> => new List<T>().reset(values.slice(n, values.length));

}
