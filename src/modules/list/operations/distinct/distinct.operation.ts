import {deepEqual} from '../../../common/object/deep-equal';
import {List} from '../../list';

export abstract class DistinctOperation {

    static execute = <T, U>(values: T[], selector?: (value: T) => U): List<T> => {
        const result = values.filter((value, index) => {
            const duplicateIndex = values.findIndex(it => {
                const pickedValue = (selector) ? selector(value) : value;
                const pickedDuplicateValue = (selector) ? selector(it) : it;
                return deepEqual(pickedDuplicateValue, pickedValue);
            });
            return index === duplicateIndex;
        });
        return new List<T>().reset(result);
    };

}
