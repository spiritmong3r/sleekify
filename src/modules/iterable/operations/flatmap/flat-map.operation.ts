import { flatDeep } from '../../../common/array';

export default <T, U, This = undefined>(values: T[], selector: (this: This, value: T, index: number, array: T[]) => U | U[]): U[] =>
    flatDeep(values.map(selector)) as U[];
