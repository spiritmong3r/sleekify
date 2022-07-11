import {PersonMock} from '../../../../test/mocks/person.mock';
import {MaxOperation} from './max.operation';

describe('MaxOperation', () => {

    it('given an empty array, return undefined value', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MaxOperation.execute(values);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers, return the highest value', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = MaxOperation.execute(values);

        // THEN
        const expected = 5;
        expect(result).toEqual(expected);
    });

    it('given an array of strings, return the highest value', () => {
        // GIVEN
        const values = ['a', '1', ','];

        // WHEN
        const result = () => MaxOperation.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given a selector an empty array, return undefined value', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MaxOperation.execute(values, (it) => it);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given a selector an array of numbers, return the max value', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3];

        // WHEN
        const result = MaxOperation.execute(values, (it) => it);

        // THEN
        const expected = 5;
        expect(result).toEqual(expected);
    });

    it('given a selector an array of strings, return the max value', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', 't', 'a'];

        // WHEN
        const result = MaxOperation.execute(values, (it) => it);

        // THEN
        const expected = 't';
        expect(result).toEqual(expected);
    });

    it('given a selector an array of persons, return the oldest one', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.ed(), PersonMock.jo()];

        // WHEN
        const result = MaxOperation.execute(values, (it) => it.age);

        // THEN
        const expected = PersonMock.jo();
        expect(result).toEqual(expected);
    });

});
