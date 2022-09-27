import subListOperation from './sub-list.operation';

describe('subListOperation', () => {
    it('given an empty array, returns an empty array', () => {
        // GIVEN
        const values: number[] = [];

        // WHEN
        const result = subListOperation(values, 0, 1);

        // THEN
        const expected: number[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and indexes 2 to 4, returns an array containing values 3,4', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = subListOperation(values, 2, 4);

        // THEN
        const expected = [3, 4];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and indexes 1 to -1, returns an array containing values 2,3,4', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = subListOperation(values, 1, -1);

        // THEN
        const expected = [2, 3, 4];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and index 2, returns an array containing values 3,4,5', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = subListOperation(values, 2);

        // THEN
        const expected = [3, 4, 5];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and index -2, returns an array containing values 4,5', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = subListOperation(values, -2);

        // THEN
        const expected = [4, 5];
        expect(result).toEqual(expected);
    });
});
