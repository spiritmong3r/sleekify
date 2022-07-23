import { PersonMock } from '../../../../test/mocks/person.mock';
import onEachOperation from './on-each.operation';

describe('onEachOperation', () => {
    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = onEachOperation(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List with the same persons', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = onEachOperation(values, (it) => it);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return a List of the same persons with age 11', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = onEachOperation(values, (it) => (it.age = 11));

        // THEN
        const expected = [
            { ...PersonMock.bob(), age: 11 },
            { ...PersonMock.jo(), age: 11 },
            { ...PersonMock.jane(), age: 11 },
        ];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];

        // WHEN
        onEachOperation(values, (it) => (it.age = 11));

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
