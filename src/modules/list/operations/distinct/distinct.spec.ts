import {PersonMock} from '../../../../test/mocks/person.mock';
import {List} from '../../list';
import {Distinct} from './distinct';

describe('Distinct', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = Distinct.execute(values);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of strings not containing any duplicate, return the same List', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = Distinct.execute(values);

        // THEN
        const expected = new List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });

    it('given an array of strings containing duplicates, return a List without any duplicate', () => {
        // GIVEN
        const values = ['1', '2', '5', '5', '4', '3', '9', '0', '2'];

        // WHEN
        const result = Distinct.execute(values);

        // THEN
        const expected = new List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });

    it('given an array of persons containing multiple 19 yo persons and a predicate, return 2', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo(), PersonMock.bob(), PersonMock.bob()];

        // WHEN
        const result = Distinct.execute(values);

        // THEN
        const expected = new List(PersonMock.ed(), PersonMock.jo(), PersonMock.bob());
        expect(result).toEqual(expected);
    });

});
