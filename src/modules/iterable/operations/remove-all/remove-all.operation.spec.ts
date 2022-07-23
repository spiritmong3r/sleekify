import { PersonMock } from '../../../../test/mocks/person.mock';
import removeAllOperation from './remove-all.operation';

describe('removeAllOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        removeAllOperation(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array of Persons and a predicate, update the array according to this predicate', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.ted()];

        // WHEN
        removeAllOperation(values, (it) => it.age === 19);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.ted()];
        expect(values).toEqual(expected);
    });
});
