import {List} from '../list';
import {listOf} from './list-of';
import resetAllMocks = jest.resetAllMocks;

describe('listOf', () => {

    afterEach(() => resetAllMocks());

    it('given multiples numbers, return a List of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = listOf(...values);

        // THEN
        const expected = new List([1, 2, 3, 4, 5]);
        expect(result).toEqual(expected);
    });

    it('given strings, return a List of string', () => {
        // GIVEN
        const value = ['hello', 'here'];

        // WHEN
        const result = listOf(...value);

        // THEN
        const expected = new List(['hello', 'here']);
        expect(result).toEqual(expected);
    });

});
