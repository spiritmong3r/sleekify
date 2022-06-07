import {List} from '../../list';
import {DropLastOperation} from './drop-last.operation';

describe('DropLastOperation', () => {

    it('given an empty array, drop 5 and return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        const n = 5;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, drop 0 and return the same List', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 0;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected = new List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, drop 2 and return an array without the 2 last numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 2;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected = new List(1, 2, 3);
        expect(result).toEqual(expected);
    });

});
