export default <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[] => values.filter(predicate);
