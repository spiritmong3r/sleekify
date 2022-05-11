import {PersonMock} from '../../../../test/mocks/person.mock';
import {Sum} from './sum';

describe('Sum', () => {

    it('given an array of numbers, return the sum of all these numbers', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];

        // WHEN
        const result = Sum.execute(values);

        // THEN
        const expected = 24;
        expect(result).toEqual(expected);
    });

    it('given an array of strings, throw an exception', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = () => Sum.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of persons, throw an exception', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = () => Sum.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

});
