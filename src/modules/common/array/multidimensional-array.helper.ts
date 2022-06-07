import {ArrayHelper} from './array.helper';

export abstract class MultidimensionalArrayHelper {

    /**
     *
     * @param array
     * @param depth
     * @return
     */
    static flatDeep = <T>(array: T[], depth = 1): T[] => {
        if (depth > 0) {
            return array.reduce((previous: T[], current: T) => {
                let previousAsArray: T[] = ArrayHelper.transformToArray(previous);
                let currentAsArray: T[] = ArrayHelper.transformToArray(current);
                return previousAsArray.concat(MultidimensionalArrayHelper.flatDeep(currentAsArray, depth - 1));
            }, [] as T[]);
        } else {
            return array.slice();
        }
    };

}
