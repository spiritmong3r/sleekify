export default <T>(values: T[], selector: (value: T, index: number, array: T[]) => void): void => values.forEach(selector);
