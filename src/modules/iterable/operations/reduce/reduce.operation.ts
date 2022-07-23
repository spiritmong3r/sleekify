export default <T, U>(values: T[], operation: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U =>
    values.reduce(operation, initialValue);
