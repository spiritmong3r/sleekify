import {List} from '../../list';

export abstract class Reverse {

    static execute = <T>(values: T[]): List<T> => {
        values.reverse();
        return new List<T>().reset(values);
    };

}
