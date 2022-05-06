import {List} from '../list';
import {listOf} from './list-of';

describe('listOf', () => {

    it('given multiples numbers, return a List of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = listOf(...values);

        // THEN
        const expected = JSON.stringify(new List(1, 2, 3, 4, 5));
        expect(JSON.stringify(result)).toEqual(expected);
    });

    it('given a string, return a List of string', () => {
        // GIVEN
        const value = 'hello';

        // WHEN
        const result = listOf(value);

        // THEN
        const expected = JSON.stringify(new List('hello'));
        expect(JSON.stringify(result)).toEqual(expected);
    });

});
