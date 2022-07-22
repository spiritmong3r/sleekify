import { PersonMock } from '../../../../test/mocks/person.mock';
import { TakeLastOperation } from './take-last.operation';

describe('TakeLastOperation', () => {
    it('given an empty array, take last 5 and return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        const n = 5;

        // WHEN
        const result = TakeLastOperation.execute(values, n);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take last 0 and return an empty array', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 0;

        // WHEN
        const result = TakeLastOperation.execute(values, n);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, take last 2 and return an array containing the 2 last numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const n = 2;

        // WHEN
        const result = TakeLastOperation.execute(values, n);

        // THEN
        const expected = [4, 5];
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
        TakeLastOperation.execute(values, n);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
