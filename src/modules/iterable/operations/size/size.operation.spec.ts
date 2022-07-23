import sizeOperation from './size.operation';

describe('sizeOperation', () => {
    it('given an array of 5 elements, return the number 5', () => {
        // GIVEN
        const values = [0, 1, 2, 3, 4];

        // WHEN
        const result = sizeOperation(values);

        // THEN
        expect(result).toEqual(5);
    });
});
