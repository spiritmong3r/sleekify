import {PersonMock} from '../../../../test/mocks/person.mock';
import firstOrUndefinedOperation from './first-or-undefined.operation';

describe('firstOrUndefinedOperation', () => {
    it('given an empty array and no predicate, return undefined', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = firstOrUndefinedOperation(values);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an empty array and a predicate, return undefined', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = firstOrUndefinedOperation(values, (it) => it);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers, no value matching the predicate, return undefined', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = firstOrUndefinedOperation(values, (it) => it === 0);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers and no predicate, return the first value', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = firstOrUndefinedOperation(values);

        // THEN
        const expected = 1;
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the first value matching the predicate', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = firstOrUndefinedOperation(values, (it) => it === 3);

        // THEN
        const expected = 3;
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return the first person matching the predicate', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = firstOrUndefinedOperation(values, (it) => it.age === 24);

        // THEN
        const expected = PersonMock.jane();
        expect(result).toEqual(expected);
    });
});
