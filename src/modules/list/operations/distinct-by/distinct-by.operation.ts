import {deepEqual} from '../../../common/object/deep-equal';
import {List} from '../../list';

export abstract class DistinctByOperation {

    static execute = <T, U>(values: T[], callback: (value: T) => U): List<T> => {
        const result = values.filter((value, index) => {
            const pickedValue = callback(value);
            const duplicateIndex = values.findIndex(it => deepEqual(callback(it), pickedValue));
            return index === duplicateIndex;
        });
        return new List<T>().reset(result);
    };

}
