import {PersonMock} from '../../../../test/mocks/person.mock';
import {Person} from '../../../../test/models/person';
import {MaxBy} from './max-by';

describe('MaxBy', () => {

    it('given an empty array, return undefined value', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MaxBy.execute(values, (it) => it);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given an array of numbers, return the max value', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3];

        // WHEN
        const result = MaxBy.execute(values, (it) => it);

        // THEN
        const expected = 5;
        expect(result).toEqual(expected);
    });

    it('given an array of strings, return the max value', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', 't', 'a'];

        // WHEN
        const result = MaxBy.execute(values, (it) => it);

        // THEN
        const expected = 't';
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return the oldest one', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.ed(), PersonMock.jo()];

        // WHEN
        const result = MaxBy.execute(values, (it) => it.age);

        // THEN
        const expected: Person = PersonMock.jo();
        expect(result).toEqual(expected);
    });

});
