import {deepEqual} from '../../../common/object/deep-equal';
import {List} from '../../list';

export abstract class DistinctOperation {

    static execute = <T>(values: T[]): List<T> => {
        const result = values.filter((value, index) => {
            const duplicateIndex = values.findIndex(it => deepEqual(it, value));
            return index === duplicateIndex;
        });
        return new List<T>().reset(result);
    };

}
