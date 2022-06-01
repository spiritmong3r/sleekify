import {List} from '../../list';

export abstract class OnEach {

    static execute = <T, U>(values: T[], callback: (value: T, index: number, array: T[]) => void): List<T> => {
        values.forEach(callback);
        return new List<T>().reset(values);
    };

}
