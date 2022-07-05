import {MutableList} from '../mutable-list';
import {mutableListOf} from './mutable-list-of';
import resetAllMocks = jest.resetAllMocks;

describe('mutableListOf', () => {

    afterEach(() => resetAllMocks());

    it('given multiples numbers, return a MutableList of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = mutableListOf(...values);

        // THEN
        const expected = new MutableList([1, 2, 3, 4, 5]);
        expect(result).toEqual(expected);
    });

    it('given strings, return a MutableList of string', () => {
        // GIVEN
        const value = ['hello', 'here'];

        // WHEN
        const result = mutableListOf(...value);

        // THEN
        const expected = new MutableList(['hello', 'here']);
        expect(result).toEqual(expected);
    });

});
