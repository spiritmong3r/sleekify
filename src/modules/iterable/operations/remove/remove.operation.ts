export default <T>(values: T[], index: number): void => {
    values.splice(index, 1);
};
