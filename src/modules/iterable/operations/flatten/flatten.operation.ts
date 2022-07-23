import { flatDeep } from '../../../common/array';

export default <T>(values: T[], depth: number = 1): T[] => flatDeep(values, depth);
