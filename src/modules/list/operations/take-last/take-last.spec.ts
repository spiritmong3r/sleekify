import {List} from '../../list';
import {TakeLast} from './take-last';

describe('TakeLast', () => {

    it('given an empty array, take last 5 and return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        const n = 5;

        // WHEN
        const result = TakeLast.execute(values, n);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take last 0 and return an empty List', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 0;

        // WHEN
        const result = TakeLast.execute(values, n);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take last 2 and return an array containing the 2 last numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 2;

        // WHEN
        const result = TakeLast.execute(values, n);

        // THEN
        const expected = new List(4, 5);
        expect(result).toEqual(expected);
    });

});
