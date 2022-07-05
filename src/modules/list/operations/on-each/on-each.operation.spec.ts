import {PersonMock} from '../../../../test/mocks/person.mock';
import {OnEachOperation} from './on-each.operation';

describe('OnEachOperation', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = OnEachOperation.execute(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List with the same persons', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = OnEachOperation.execute(values, (it) => it);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List of the same persons with age 11', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = OnEachOperation.execute(values, (it) => it.age = 11);

        // THEN
        const expected = [{...PersonMock.bob(), age: 11}, {...PersonMock.jo(), age: 11}, {...PersonMock.jane(), age: 11}];
        expect(result).toEqual(expected);
    });

});
