export default <T>(values: T[], element: T): void => {
    const elementIndex = values.indexOf(element);
    values.splice(elementIndex, 1);
};
