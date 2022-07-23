import toArrayOperation from './to-array.operation';

describe('toArrayOperation', () => {
    it('given an array with elements, return an array with same elements', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = toArrayOperation(values);

        // THEN
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
