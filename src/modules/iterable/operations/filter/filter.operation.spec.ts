import { PersonMock } from '../../../../test/mocks/person.mock';
import filterOperation from './filter.operation';

describe('filterOperation', () => {
    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: number[] = [];

        // WHEN
        const result = filterOperation(values, (it) => it % 2 === 0);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return a array with only even numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = filterOperation(values, (it) => it % 2 === 0);

        // THEN
        const expected = [2, 4];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];

        // WHEN
        filterOperation(values, (it) => it.firstName === 'Bob');

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
