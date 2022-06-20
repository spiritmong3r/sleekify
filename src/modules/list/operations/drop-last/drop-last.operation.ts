import {List} from '../../list';

export abstract class DropLastOperation {

    static execute = <T>(values: T[], n: number): List<T> => new List<T>().reset(values.slice(0, values.length - n));

}