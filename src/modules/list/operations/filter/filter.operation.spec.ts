import {List} from '../../list';
import {FilterOperation} from './filter.operation';

describe('FilterOperation', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: number[] = [];

        // WHEN
        const result = FilterOperation.execute(values, it => it % 2 === 0);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return a List with only even numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = FilterOperation.execute(values, it => it % 2 === 0);

        // THEN
        const expected = new List(2, 4);
        expect(result).toEqual(expected);
    });

});
