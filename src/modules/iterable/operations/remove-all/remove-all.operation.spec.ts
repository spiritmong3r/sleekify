import {PersonMock} from '../../../../test/mocks/person.mock';
import {RemoveAllOperation} from './remove-all.operation';

describe('RemoveAllOperation', () => {

    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        RemoveAllOperation.execute(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array of Persons and a predicate, update the array according to this predicate', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.ted()];

        // WHEN
        RemoveAllOperation.execute(values, (it) => it.age === 19);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.ted()];
        expect(values).toEqual(expected);
    });

});
