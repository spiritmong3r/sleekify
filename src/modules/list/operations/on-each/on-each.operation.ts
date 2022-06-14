import {List} from '../../list';

export abstract class OnEachOperation {

    static execute = <T, U>(values: T[], selector: (value: T, index: number, array: T[]) => void): List<T> => {
        values.forEach(selector);
        return new List<T>().reset(values);
    };

}
