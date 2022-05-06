import {MultidimensionalArrayHelper} from '../../../common/multidimensional-array.helper';
import {List} from '../../list';

export abstract class Flatmap {

    static execute = <T, U, This = undefined>(values: T[], callback: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> => {
        const updatedValues = values.map(callback);
        const flatten = MultidimensionalArrayHelper.flatDeep(updatedValues) as U[];
        return (Array.isArray(flatten)) ? new List(...flatten) : new List(flatten);
    };

}
