import {PersonMock} from '../../../../test/mocks/person.mock';
import {List} from '../../list';
import {Reverse} from './reverse';

describe('Reverse', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = Reverse.execute(values);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the same array but reversed', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = Reverse.execute(values);

        // THEN
        const expected = new List(5, 4, 3, 2, 1);
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return the same array but reversed', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = Reverse.execute(values);

        // THEN
        const expected = new List(PersonMock.jane(), PersonMock.jo(), PersonMock.bob());
        expect(result).toEqual(expected);
    });

});
