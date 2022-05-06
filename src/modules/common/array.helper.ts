import {List} from '../list/list';

export abstract class ArrayHelper {

    /**
     * Transform an object to array.
     *
     * @param data This is either an object or an array of objects.
     * @return An array of objects.
     */
    static transformToArray = <T>(data: T | T[]): T[] => {
        let array: T[];

        if (data instanceof List) array = data.toArray();
        else if (!Array.isArray(data) && data) array = [data];
        else if (Array.isArray(data)) array = data;
        else array = [];

        return array;
    };

}
