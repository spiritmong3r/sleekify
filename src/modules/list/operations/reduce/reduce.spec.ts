import {Reduce} from './reduce';

describe('Reduce', () => {

    it('given an empty array of strings, return an empty string', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = Reduce.execute(values, (acc, value) => acc + value, '');

        // THEN
        const expected = '';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the sum of those numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = Reduce.execute(values, (acc, value) => acc + value, 0);

        // THEN
        const expected = 15;
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the sum of those numbers + 7', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = Reduce.execute(values, (acc, value) => acc + value, 7);

        // THEN
        const expected = 22;
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the string representation', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = Reduce.execute(values, (acc, value) => acc + value, '');

        // THEN
        const expected = '12345';
        expect(result).toEqual(expected);
    });

    it('given a bidimensional array of numbers, return an array of numbers', () => {
        // GIVEN
        const values = [[1, 2, 3, 4, 5], [6, 7, 8]];

        // WHEN
        const result = Reduce.execute(values, (acc, value) => acc.concat(value), [] as number[]);

        // THEN
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
    });

});
