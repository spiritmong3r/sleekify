import { PersonMock } from '../../../../test/mocks/person.mock';
import sumOperation from './sum.operation';

describe('sumOperation', () => {
    it('given an array of numbers and no selector, return the sum of all these numbers', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];

        // WHEN
        const result = sumOperation(values);

        // THEN
        const expected = 24;
        expect(result).toEqual(expected);
    });

    it('given an array of strings and no selector, throw an exception', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = () => sumOperation(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of persons and no selector, throw an exception', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = () => sumOperation(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of numbers and a selector, return the sum of all numbers', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0, 4];

        // WHEN
        const result = sumOperation(values, (it) => it);

        // THEN
        const expected = 28;
        expect(result).toEqual(expected);
    });

    it('given an array of persons and a selector on their age, return the sum of their age', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = sumOperation(values, (it) => it.age);

        // THEN
        const expected = 55;
        expect(result).toEqual(expected);
    });

    it('given an array of strings and a selector, throw an exception', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = () => sumOperation(values, (it) => it);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of persons and a selector, throw an exception', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = () => sumOperation(values, (it) => it);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });
});
