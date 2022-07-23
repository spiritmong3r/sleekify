import removeLastOperation from './remove-last.operation';

describe('removeLastOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        removeLastOperation(values);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers, update the array by removing the last element', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        removeLastOperation(values);

        // THEN
        const expected = [1, 2, 3, 4];
        expect(values).toEqual(expected);
    });
});
