import {List} from '../../list';

export abstract class Distinct {

    static execute = <T>(values: T[]): List<T> => {
        const result = values.filter((value, index) => {
            const duplicateIndex = values.findIndex(it => JSON.stringify(it) === JSON.stringify(value));
            return index === duplicateIndex;
        });
        return new List<T>().reset(result);
    };

}
