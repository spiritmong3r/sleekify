export default <T>(values: T[], predicate?: (value: T, index: number, array: T[]) => boolean): number => {
    const filteredValues = predicate ? values.filter(predicate) : values;
    return filteredValues.length;
};
