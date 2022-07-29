export default <T, U>(values: T[], transformer: (value: T, index: number, array: T[]) => U): U[] => values.map(transformer);
