import { PersonMock } from '../../../../test/mocks/person.mock';
import lastOperation from './last.operation';

describe('lastOperation', () => {
    it('given an empty array and no predicate, throw an exception', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = () => lastOperation(values);

        // THEN
        expect(result).toThrowError('No value matches the predicate');
    });

    it('given an empty array and a predicate, throw an exception', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = () => lastOperation(values, (it) => it);

        // THEN
        expect(result).toThrowError('No value matches the predicate');
    });

    it('given an array of numbers, no value matching the predicate, throw an exception', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = () => lastOperation(values, (it) => it === 0);

        // THEN
        expect(result).toThrowError('No value matches the predicate');
    });

    it('given an array of numbers and no predicate, return the last value', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = lastOperation(values);

        // THEN
        const expected = 5;
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the last value matching the predicate', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = lastOperation(values, (it) => it === 3);

        // THEN
        const expected = 3;
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return the last person matching the predicate', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane(), PersonMock.ed()];

        // WHEN
        const result = lastOperation(values, (it) => it.age === 19);

        // THEN
        const expected = PersonMock.ed();
        expect(result).toEqual(expected);
    });
});
