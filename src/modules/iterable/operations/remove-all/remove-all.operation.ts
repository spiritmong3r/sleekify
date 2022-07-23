export default <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): void => {
    for (let areAllElementsFound = false; !areAllElementsFound; ) {
        const index = values.findIndex(predicate);
        if (index === -1) areAllElementsFound = true;
        else values.splice(index, 1);
    }
};
