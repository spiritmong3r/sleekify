import getOperation from './get.operation';

describe('getOperation', () => {
    it('given an empty array, return undefined', () => {
        // GIVEN
        const values: any[] = [];
        const index = 0;

        // WHEN
        const result = getOperation(values, index);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers, return the value at the given index', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const index = 3;

        // WHEN
        const result = getOperation(values, index);

        // THEN
        const expected = 4;
        expect(result).toEqual(expected);
    });
});
