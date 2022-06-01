import {PersonMock} from '../../../../test/mocks/person.mock';
import {List} from '../../list';
import {OnEach} from './on-each';

describe('OnEach', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = OnEach.execute(values, (it) => it);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List with the same persons', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = OnEach.execute(values, (it) => it);

        // THEN
        const expected = new List(PersonMock.bob(), PersonMock.jo(), PersonMock.jane());
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List of the same persons with age 11', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = OnEach.execute(values, (it) => it.age = 11);

        // THEN
        const expected = new List({...PersonMock.bob(), age: 11}, {...PersonMock.jo(), age: 11}, {...PersonMock.jane(), age: 11});
        expect(result).toEqual(expected);
    });

});
