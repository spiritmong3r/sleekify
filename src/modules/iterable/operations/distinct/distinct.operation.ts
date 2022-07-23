import { object } from '../../../common/object';

export default <T, U>(values: T[], selector?: (value: T) => U): T[] =>
    values.filter((value, index) => {
        const duplicateIndex = values.findIndex((it) => {
            const pickedValue = selector ? selector(value) : value;
            const pickedDuplicateValue = selector ? selector(it) : it;
            return object(pickedDuplicateValue, pickedValue);
        });
        return index === duplicateIndex;
    });
