import {PersonMock} from '../../../../test/mocks/person.mock';
import {List} from '../../list';
import {DistinctOperation} from './distinct.operation';

describe('DistinctOperation', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of strings not containing any duplicate, return the same List', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });

    it('given an array of strings containing duplicates, return a List without any duplicate', () => {
        // GIVEN
        const values = ['1', '2', '5', '5', '4', '3', '9', '0', '2'];

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });

    it('given an array of persons containing duplicates, return a List without any duplicate', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo(), PersonMock.bob(), PersonMock.bob()];

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List(PersonMock.ed(), PersonMock.jo(), PersonMock.bob());
        expect(result).toEqual(expected);
    });

});
