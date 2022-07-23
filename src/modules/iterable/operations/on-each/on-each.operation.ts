export default <T, U>(values: T[], selector: (value: T, index: number, array: T[]) => void): T[] => {
    values.forEach(selector);
    return values;
};
