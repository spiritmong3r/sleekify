import {MultidimensionalArrayHelper} from '../../../common/array/multidimensional-array.helper';
import {List} from '../../list';

export abstract class FlattenOperation {

    static execute = <T>(values: T[], depth: number = 1): List<T> => new List<T>().reset(MultidimensionalArrayHelper.flatDeep(values, depth));

}
