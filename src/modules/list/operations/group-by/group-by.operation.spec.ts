import {PersonMock} from '../../../../test/mocks/person.mock';
import {GroupByOperation} from './group-by.operation';

describe('GroupByOperation', () => {

    it('given an empty array, return an empty Map', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = GroupByOperation.execute(values, (it) => it);

        // THEN
        const expected = new Map();
        expect(result).toEqual(expected);
    });

    it('given an array of strings, return a Map of strings grouped by length', () => {
        // GIVEN
        const values = ['hello', 'i', 'am', 'groot'];

        // WHEN
        const result = GroupByOperation.execute(values, (it) => it.length);

        // THEN
        const expected = new Map([
            [1, ['i']],
            [2, ['am']],
            [5, ['hello', 'groot']]
        ]);
        expect(result).toEqual(expected);
    });

    it('given an array of Persons, return a Map of Persons grouped by age', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.ed(), PersonMock.ted(), PersonMock.jane()];

        // WHEN
        const result = GroupByOperation.execute(values, (it) => it.age);

        // THEN
        const expected = new Map([
            [18, [PersonMock.bob(), PersonMock.ted()]],
            [19, [PersonMock.jo(), PersonMock.ed()]],
            [24, [PersonMock.jane()]]
        ]);
        expect(result).toEqual(expected);
    });

    it('given an array of Persons, return a Map of Persons grouped by country', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.ed(), PersonMock.ted(), PersonMock.jane()];

        // WHEN
        const result = GroupByOperation.execute(values, (it) => it.country);

        // THEN
        const expected = new Map([
            [{name: 'US'}, [PersonMock.bob(), PersonMock.ed(), PersonMock.jane()]],
            [{name: 'CA'}, [PersonMock.jo(), PersonMock.ted()]]
        ]);
        expect(result).toEqual(expected);
    });

});
