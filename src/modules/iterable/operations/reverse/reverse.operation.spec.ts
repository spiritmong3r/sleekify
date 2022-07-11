import {PersonMock} from '../../../../test/mocks/person.mock';
import {ReverseOperation} from './reverse.operation';

describe('ReverseOperation', () => {

    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = ReverseOperation.execute(values);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
    });

    it('given an array of numbers, return the same array but reversed', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        const result = ReverseOperation.execute(values);

        // THEN
        const expected = [5, 4, 3, 2, 1];
        expect(result).toEqual(expected);
    });

    it('given an array of number, check this initial array has not been modified', () => {
        // GIVEN
        const values = [1, 2, 3];

        // WHEN
        ReverseOperation.execute(values);

        // THEN
        const expected = [1, 2, 3];
        expect(values).toEqual(expected);
    });

    it('given an array of persons, return the same array but reversed', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.jane()];

        // WHEN
        const result = ReverseOperation.execute(values);

        // THEN
        const expected = [PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];
        expect(result).toEqual(expected);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];

        // WHEN
        ReverseOperation.execute(values);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });

});
