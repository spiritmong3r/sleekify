import { PersonMock } from '../../../../test/mocks/person.mock';
import sortOperation from './sort.operation';

describe('sortOperation', () => {
    it('given an array of strings, return an array sorted from the lowest to the highest', () => {
        // GIVEN
        const values = ['1', '0', '2', '5', '4', '3', '9'];

        // WHEN
        const result = sortOperation(values);

        // THEN
        const expected = ['0', '1', '2', '3', '4', '5', '9'];
        expect(result).toEqual(expected);
    });

    it('given an array of persons, return an array in the same order', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = sortOperation(values);

        // THEN
        const expected = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];
        expect(result).toEqual(expected);
    });

    it('given a selector and an array of strings, return an array sorted from the lowest to the highest', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = sortOperation(values, (it) => it);

        // THEN
        const expected = ['0', '1', '2', '3', '4', '5', '9'];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, check this initial array has not been modified', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        sortOperation(values);

        // THEN
        const expected = ['1', '2', '5', '4', '3', '9', '0'];
        expect(values).toEqual(expected);
    });

    it('given a selector and an array of persons, return an array sorted from youngest to the oldest', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = sortOperation(values, (it) => it.age);

        // THEN
        const expected = [PersonMock.bob(), PersonMock.ed(), PersonMock.jo(), PersonMock.jane()];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];

        // WHEN
        sortOperation(values, (it) => it.firstName);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
