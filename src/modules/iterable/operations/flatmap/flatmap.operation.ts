import { MultidimensionalArrayHelper } from '../../../common/array/multidimensional-array.helper';

export abstract class FlatmapOperation {
    static execute = <T, U, This = undefined>(values: T[], selector: (this: This, value: T, index: number, array: T[]) => U | U[]): U[] =>
        MultidimensionalArrayHelper.flatDeep(values.map(selector)) as U[];
}
