import {FilterOperation} from './filter.operation';

describe('FilterOperation', () => {

    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: number[] = [];

        // WHEN
        const result = FilterOperation.execute(values, it => it % 2 === 0);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return a array with only even numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = FilterOperation.execute(values, it => it % 2 === 0);

        // THEN
        const expected = [2, 4];
        expect(result).toEqual(expected);
    });

});
