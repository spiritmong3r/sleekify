import {deepEqual} from '../../../common/object/deep-equal';
import {List} from '../../list';

export abstract class DistinctByOperation {

    static execute = <T, U>(values: T[], selector: (value: T) => U): List<T> => {
        const result = values.filter((value, index) => {
            const pickedValue = selector(value);
            const duplicateIndex = values.findIndex(it => deepEqual(selector(it), pickedValue));
            return index === duplicateIndex;
        });
        return new List<T>().reset(result);
    };

}
