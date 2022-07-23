import { object } from '../../../common/object';

export default <T, K>(values: T[], selector: (value: T) => K): Map<K, T[]> => {
    const map = new Map<K, T[]>();

    values.forEach((value) => {
        const key = selector(value);

        // Check if key is a primitive or an object
        if (key !== Object(key)) {
            if (!map.has(key)) map.set(key, []);
            map.get(key)!.push(value);
        } else {
            const isNotExisting = !Array.from(map.keys()).some((it) => object(it, key));
            if (isNotExisting) map.set(key, []);
            const entryByKey = Array.from(map.entries()).find((it) => object(it[0], key));
            map.get(entryByKey![0])?.push(value);
        }
    });

    return map;
};
