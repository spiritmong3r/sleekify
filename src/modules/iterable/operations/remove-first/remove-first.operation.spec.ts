import removeFirstOperation from './remove-first.operation';

describe('removeFirstOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        removeFirstOperation(values);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers, update the array by removing the first element', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        removeFirstOperation(values);

        // THEN
        const expected = [2, 3, 4, 5];
        expect(values).toEqual(expected);
    });
});
