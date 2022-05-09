import {List} from '../../list';

export abstract class Map {

    static execute = <T, U>(values: T[], callback: (value: T, index: number, array: T[]) => U): List<U> => new List<U>().reset(values.map(callback));

}
