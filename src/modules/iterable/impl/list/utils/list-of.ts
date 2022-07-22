import { List } from '../list';

/**
 *
 * @param value
 * @return A object {@link List}.
 */
export const listOf = <T>(...value: T[]): List<T> => new List<T>(value);
