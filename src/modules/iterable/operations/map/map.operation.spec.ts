import { PersonMock } from '../../../../test/mocks/person.mock';
import mapOperation from './map.operation';

describe('mapOperation', () => {
    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = mapOperation(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return a array of strings', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = mapOperation(values, (it) => it.toString());

        // THEN
        const expected = ['1', '2', '3', '4', '5'];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a array of age', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = mapOperation(values, (it) => it.age);

        // THEN
        const expected = [18, 19, 24];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];

        // WHEN
        mapOperation(values, (it) => it.firstName);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
