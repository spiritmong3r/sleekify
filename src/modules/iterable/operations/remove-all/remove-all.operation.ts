/**
 * Remove all elements from the array matching the parameter.
 *
 * @param values Elements of the array.
 * @param arg Either an element to remove or a predicate.
 */
export default <T>(values: T[], arg: T | ((value: T, index: number, array: T[]) => boolean)): void => {
    for (let areAllElementsFound = false; !areAllElementsFound; ) {
        let index: number;
        // @ts-ignore => at this point `arg` can only be a function
        if (typeof arg === 'function') index = values.findIndex(arg);
        else index = values.indexOf(arg);

        if (index === -1) areAllElementsFound = true;
        else values.splice(index, 1);
    }
};
