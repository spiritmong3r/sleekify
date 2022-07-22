import { PersonMock } from '../../../../test/mocks/person.mock';
import { DropLastOperation } from './drop-last.operation';

describe('DropLastOperation', () => {
    it('given an empty array, drop 5 and return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        const n = 5;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, drop 0 and return the same array', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 0;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected = [1, 2, 3, 4, 5];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, drop 2 and return an array without the 2 last numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 2;

        // WHEN
        const result = DropLastOperation.execute(values, n);

        // THEN
        const expected = [1, 2, 3];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];
        const n = 2;

        // WHEN
        DropLastOperation.execute(values, n);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
