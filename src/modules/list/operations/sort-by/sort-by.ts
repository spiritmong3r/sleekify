import {List} from '../../list';

export abstract class SortBy {

    static execute = <T, U>(values: T[], callback: (value: T) => U): List<T> => {
        values.sort((previous, current) => {
            if (callback(previous) < callback(current)) return -1;
            else if (callback(previous) > callback(current)) return 1;
            else return 0;
        });
        return new List(...values);
    };

}
