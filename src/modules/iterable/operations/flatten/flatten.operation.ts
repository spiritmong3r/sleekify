import { MultidimensionalArrayHelper } from '../../../common/array/multidimensional-array.helper';

export abstract class FlattenOperation {
    static execute = <T>(values: T[], depth: number = 1): T[] => MultidimensionalArrayHelper.flatDeep(values, depth);
}
