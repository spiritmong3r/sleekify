export default <T>(values: T[], predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined =>
    predicate ? values.find(predicate) : values[0];
