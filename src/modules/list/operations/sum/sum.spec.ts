import {PersonMock} from '../../../../test/mocks/person.mock';
import {Sum} from './sum';

describe('Sum', () => {

    it('given an array of numbers and no callback, return the sum of all these numbers', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];

        // WHEN
        const result = Sum.execute(values);

        // THEN
        const expected = 24;
        expect(result).toEqual(expected);
    });

    it('given an array of strings and no callback, throw an exception', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = () => Sum.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of persons and no callback, throw an exception', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = () => Sum.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of numbers and a callback, return the sum of all numbers', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0, 4];

        // WHEN
        const result = Sum.execute(values, it => it);

        // THEN
        const expected = 28;
        expect(result).toEqual(expected);
    });

    it('given an array of persons and a callback on their age, return the sum of their age', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = Sum.execute(values, it => it.age);

        // THEN
        const expected = 55;
        expect(result).toEqual(expected);
    });

    it('given an array of strings and a callback, throw an exception', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = () => Sum.execute(values, it => it);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given an array of persons and a callback, throw an exception', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.ted()];

        // WHEN
        const result = () => Sum.execute(values, it => it);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

});
