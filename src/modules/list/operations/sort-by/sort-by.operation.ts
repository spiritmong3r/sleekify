import {List} from '../../list';

export abstract class SortByOperation {

    static execute = <T, U>(values: T[], selector: (value: T) => U): List<T> => {
        values.sort((previous, current) => {
            if (selector(previous) < selector(current)) return -1;
            else if (selector(previous) > selector(current)) return 1;
            else return 0;
        });
        return new List<T>().reset(values);
    };

}
