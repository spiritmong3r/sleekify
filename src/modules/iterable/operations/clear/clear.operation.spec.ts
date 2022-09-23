import clearOperation from './clear.operation';

describe('clearOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        clearOperation(values);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers, remove all elements', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        clearOperation(values);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });
});
