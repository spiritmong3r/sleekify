import {List} from '../../list';

export abstract class SortOperation {

    static execute = <T, U>(values: T[], selector?: (value: T) => U): List<T> => {
        values.sort((previous, current) => {
            const pickedPrevious = (selector) ? selector(previous) : previous;
            const pickedCurrent = (selector) ? selector(current) : current;
            if (pickedPrevious < pickedCurrent) return -1;
            else if (pickedPrevious > pickedCurrent) return 1;
            else return 0;
        });
        return new List<T>().reset(values);
    };

}
