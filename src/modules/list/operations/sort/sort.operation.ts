import {List} from '../../list';

export abstract class SortOperation {

    static execute = <T, U>(values: T[], selector?: (value: T) => U): List<T> => {
        if (selector) {
            values.sort((previous, current) => {
                if (selector(previous) < selector(current)) return -1;
                else return 1;
            });
        } else {
            values.sort((previous, current) => {
                if (previous < current) return -1;
                else return 1;
            });
        }

        return new List<T>().reset(values);
    };

}
