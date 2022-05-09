import {MultidimensionalArrayHelper} from '../../../common/multidimensional-array.helper';
import {List} from '../../list';

export abstract class Flatten {

    static execute = <T>(values: T[], depth: number = 1): List<T> => new List<T>().reset(MultidimensionalArrayHelper.flatDeep(values, depth));

}
