import {PersonMock} from '../../../../test/mocks/person.mock';
import {List} from '../../list';
import {SortByOperation} from './sort-by.operation';

describe('SortByOperation', () => {

    it('given an array of strings, return this List sorted from the lowest to the highest', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = SortByOperation.execute(values, (it) => it);

        // THEN
        const expected = new List('0', '1', '2', '3', '4', '5', '9');
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return this List sorted from youngest to the oldest', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = SortByOperation.execute(values, (it) => it.age);

        // THEN
        const expected = new List(PersonMock.bob(), PersonMock.ed(), PersonMock.jo(), PersonMock.jane());
        expect(result).toEqual(expected);
    });

});
