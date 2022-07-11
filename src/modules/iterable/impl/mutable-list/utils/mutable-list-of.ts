import {MutableList} from '../mutable-list';

/**
 *
 * @param value
 * @return A object {@link List}.
 */
export const mutableListOf = <T>(...value: T[]): MutableList<T> => new MutableList<T>(value);
