export default <T>(values: T[]): void => {
    values.splice(values.length - 1, 1);
};
