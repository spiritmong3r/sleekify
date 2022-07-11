import {PersonMock} from '../../../../test/mocks/person.mock';
import {Person} from '../../../../test/models/person';
import {MinOperation} from './min.operation';

describe('MinOperation', () => {

    it('given an empty array, return undefined value', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MinOperation.execute(values);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers, return the lowest value', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = MinOperation.execute(values);

        // THEN
        const expected = 1;
        expect(result).toEqual(expected);
    });

    it('given an array of strings, throw an error', () => {
        // GIVEN
        const values = ['a', '1', ','];

        // WHEN
        const result = () => MinOperation.execute(values);

        // THEN
        expect(result).toThrowError('Type of array is not number');
    });

    it('given a selector and an empty array, return undefined value', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MinOperation.execute(values, (it) => it);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given a selector and an array of numbers, return the min value', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3];

        // WHEN
        const result = MinOperation.execute(values, (it) => it);

        // THEN
        const expected = 1;
        expect(result).toEqual(expected);
    });

    it('given a selector and an array of strings, return the min value', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', 't', 'a'];

        // WHEN
        const result = MinOperation.execute(values, (it) => it);

        // THEN
        const expected = '1';
        expect(result).toEqual(expected);
    });

    it('given a selector and an array of persons, return the youngest one', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.ed(), PersonMock.jo()];

        // WHEN
        const result = MinOperation.execute(values, (it) => it.age);

        // THEN
        const expected: Person = PersonMock.bob();
        expect(result).toEqual(expected);
    });

});
