import {MultidimensionalArrayHelper} from '../../../common/array/multidimensional-array.helper';
import {List} from '../../list';

export abstract class FlatmapOperation {

    static execute = <T, U, This = undefined>(values: T[], selector: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> => {
        const updatedValues = values.map(selector);
        const flatten = MultidimensionalArrayHelper.flatDeep(updatedValues) as U[];
        return (Array.isArray(flatten)) ? new List<U>().reset(flatten) : new List(flatten);
    };

}
