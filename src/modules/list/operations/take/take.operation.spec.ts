import {List} from '../../list';
import {TakeOperation} from './take.operation';

describe('TakeOperation', () => {

    it('given an empty array, take 5 and return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        const n = 5;

        // WHEN
        const result = TakeOperation.execute(values, n);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take 0 and return an empty List', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 0;

        // WHEN
        const result = TakeOperation.execute(values, n);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take 2 and return an array containing the 2 first numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 2;

        // WHEN
        const result = TakeOperation.execute(values, n);

        // THEN
        const expected = new List(1, 2);
        expect(result).toEqual(expected);
    });

});
