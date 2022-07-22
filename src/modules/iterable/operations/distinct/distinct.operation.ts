import { deepEqual } from '../../../common/object/deep-equal';

export abstract class DistinctOperation {
    static execute = <T, U>(values: T[], selector?: (value: T) => U): T[] =>
        values.filter((value, index) => {
            const duplicateIndex = values.findIndex((it) => {
                const pickedValue = selector ? selector(value) : value;
                const pickedDuplicateValue = selector ? selector(it) : it;
                return deepEqual(pickedDuplicateValue, pickedValue);
            });
            return index === duplicateIndex;
        });
}
