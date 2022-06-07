import {List} from '../../list';

export abstract class DropOperation {

    static execute = <T>(values: T[], n: number): List<T> => new List<T>().reset(values.slice(n, values.length));

}
