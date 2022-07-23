import { PersonMock } from '../../../../test/mocks/person.mock';
import * as array from '../../../common/array';
import flatMapOperation from './flat-map.operation';

describe('flatMapOperation', () => {
    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => []);

        // WHEN
        const result = flatMapOperation(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([]);
    });

    it('given an array of numbers, return the same array of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => [1, 2, 3, 4, 5]);

        // WHEN
        const result = flatMapOperation(values, (it) => it);

        // THEN
        const expected = [1, 2, 3, 4, 5];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    });

    it('given a bidimensional array of numbers, return a flattened array of numbers', () => {
        // GIVEN
        const values = [
            [1, 2, 3, 4, 5],
            [6, 7, 8],
        ];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => [1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = flatMapOperation(values, (it) => it);

        // THEN
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([
            [1, 2, 3, 4, 5],
            [6, 7, 8],
        ]);
    });

    it('given a bidimensional array of numbers, return a flattened array of strings', () => {
        // GIVEN
        const values = [
            [1, 2, 3, 4, 5],
            [6, 7, 8],
        ];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => ['1', '2', '3', '4', '5', '6', '7', '8']);

        // WHEN
        const result = flatMapOperation(values, (it) => it.map((value) => value.toString()));

        // THEN
        const expected = ['1', '2', '3', '4', '5', '6', '7', '8'];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([
            ['1', '2', '3', '4', '5'],
            ['6', '7', '8'],
        ]);
    });

    it('given a tridimensional array of numbers, return a bidimensional array of strings', () => {
        // GIVEN
        const values = [
            [
                [1, 2, 3, 4, 5],
                [6, 7, 8],
            ],
        ];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => [
            ['1', '2', '3', '4', '5'],
            ['6', '7', '8'],
        ]);

        // WHEN
        const result = flatMapOperation(values, (it) => it.map((value1) => value1.map((value2) => value2.toString())));

        // THEN
        const expected = [
            ['1', '2', '3', '4', '5'],
            ['6', '7', '8'],
        ];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([
            [
                ['1', '2', '3', '4', '5'],
                ['6', '7', '8'],
            ],
        ]);
    });

    it('given a tridimensional array of persons, return a bidimensional array of firstnames', () => {
        // GIVEN
        const values = [
            [
                [PersonMock.ed(), PersonMock.bob()],
                [PersonMock.jo(), PersonMock.ted()],
            ],
        ];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => [
            ['Ed', 'Bob'],
            ['Jo', 'Ted'],
        ]);

        // WHEN
        const result = flatMapOperation(values, (it) => it.map((value1) => value1.map((value2) => value2.firstName)));

        // THEN
        const expected = [
            ['Ed', 'Bob'],
            ['Jo', 'Ted'],
        ];
        expect(result).toEqual(expected);
        expect(array.flatDeep).toHaveBeenCalledWith([
            [
                ['Ed', 'Bob'],
                ['Jo', 'Ted'],
            ],
        ]);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];
        jest.spyOn(array, 'flatDeep').mockImplementation(() => [bob, jo, jane]);

        // WHEN
        flatMapOperation(values, (it) => it.firstName);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
