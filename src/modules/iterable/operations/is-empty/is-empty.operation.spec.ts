import isEmptyOperation from './is-empty.operation';

describe('isEmptyOperation', () => {
    it('given an array of strings, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = isEmptyOperation(values);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an empty array, return true', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = isEmptyOperation(values);

        // THEN
        expect(result).toBeTruthy();
    });
});
