import { PersonMock } from '../../../../test/mocks/person.mock';
import { ForEachOperation } from './for-each.operation';

describe('ForEachOperation', () => {
    it('given an empty array, let this array unmodified', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        ForEachOperation.execute(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array of persons, let this array unmodified', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        ForEachOperation.execute(values, (it) => it);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];
        expect(values).toEqual(expected);
    });

    it('given an array of persons, modify their age to 11', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        ForEachOperation.execute(values, (it) => (it.age = 11));

        // THEN
        const expected = [
            { ...PersonMock.bob(), age: 11 },
            { ...PersonMock.jo(), age: 11 },
            { ...PersonMock.jane(), age: 11 },
        ];
        expect(values).toEqual(expected);
    });
});
