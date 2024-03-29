import removeOperation from './remove.operation';

describe('removeOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];
        const element = 0;

        // WHEN
        removeOperation(values, element);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers and a number to remove, update the array by removing the first matching element', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const element = 1;

        // WHEN
        removeOperation(values, element);

        // THEN
        const expected = [2, 3, 4, 5];
        expect(values).toEqual(expected);
    });
});
