/**
 *
 * @param object1
 * @param object2
 * return `true` if both objects are deeply equals, `false` otherwise.
 */
export const deepEqual = <T>(object1: any, object2: any): boolean => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const value1 = object1[key];
        const value2 = object2[key];
        const areObjects = isObject(value1) && isObject(value2);
        if ((areObjects && !deepEqual(value1, value2)) || (!areObjects && value1 !== value2)) {
            return false;
        }
    }

    return true;
};

const isObject = (object: any): boolean => object != null && typeof object === 'object';
