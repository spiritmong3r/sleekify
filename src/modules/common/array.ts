import { List } from '../iterable/impl/list/list';

export const flatDeep = <T>(array: T[], depth = 1): T[] => {
    if (depth > 0) {
        return array.reduce((previous: T[], current: T) => {
            let previousAsArray: T[] = transformToArray(previous);
            let currentAsArray: T[] = transformToArray(current);
            previousAsArray.push(...flatDeep(currentAsArray, depth - 1));
            return previousAsArray;
        }, [] as T[]);
    } else {
        return array.slice();
    }
};

export const transformToArray = <T>(data: T | T[]): T[] => {
    let array: T[];

    if (data instanceof List) array = data.toArray();
    else if (!Array.isArray(data) && data) array = [data];
    else if (Array.isArray(data)) array = data;
    else array = [];

    return array;
};
