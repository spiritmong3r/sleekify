import {PersonMock} from '../../../../test/mocks/person.mock';
import {MapOperation} from './map.operation';

describe('MapOperation', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = MapOperation.execute(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return a List of strings', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = MapOperation.execute(values, (it) => it.toString());

        // THEN
        const expected = ['1', '2', '3', '4', '5'];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List of age', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = MapOperation.execute(values, (it) => it.age);

        // THEN
        const expected = [18, 19, 24];
        expect(result).toEqual(expected);
    });

});
