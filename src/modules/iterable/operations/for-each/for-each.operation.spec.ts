import { PersonMock } from '../../../../test/mocks/person.mock';
import forEachOperation from './for-each.operation';

describe('forEachOperation', () => {
    it('given an empty array, let this array unmodified', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        forEachOperation(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array of persons, let this array unmodified', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        forEachOperation(values, (it) => it);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];
        expect(values).toEqual(expected);
    });

    it('given an array of persons, modify their age to 11', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        forEachOperation(values, (it) => (it.age = 11));

        // THEN
        const expected = [
            { ...PersonMock.bob(), age: 11 },
            { ...PersonMock.jo(), age: 11 },
            { ...PersonMock.jane(), age: 11 },
        ];
        expect(values).toEqual(expected);
    });
});
