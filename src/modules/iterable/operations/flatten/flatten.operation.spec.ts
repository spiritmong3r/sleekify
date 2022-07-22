import { PersonMock } from '../../../../test/mocks/person.mock';
import { MultidimensionalArrayHelper } from '../../../common/array/multidimensional-array.helper';
import { FlattenOperation } from './flatten.operation';

describe('FlattenOperation', () => {
    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([], 1);
    });

    it('given an array of numbers, return the same array of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = [1, 2, 3, 4, 5];
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5], 1);
    });

    it('given a bidimmensional array of numbers, return a flattened array', () => {
        // GIVEN
        const values = [
            [1, 2, 3, 4, 5],
            [6, 7, 8],
        ];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith(
            [
                [1, 2, 3, 4, 5],
                [6, 7, 8],
            ],
            1
        );
    });

    it('given a tridimensionnal array of numbers, return a bidimensionnal array', () => {
        // GIVEN
        const values = [[[1, 2, 3, 4, 5]], [[6, 7, 8]]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[[1, 2, 3, 4, 5]], [[6, 7, 8]]], 1);
    });

    it('given a tridimensional array of numbers, return a flatten array', () => {
        // GIVEN
        const values = [
            [[1, 2, 3, 4, 5]],
            [
                [6, 7, 8],
                [9, 10, 11],
            ],
        ];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

        // WHEN
        const result = FlattenOperation.execute(values, 2);

        // THEN
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith(
            [
                [[1, 2, 3, 4, 5]],
                [
                    [6, 7, 8],
                    [9, 10, 11],
                ],
            ],
            2
        );
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([bob, jo, jane]);

        // WHEN
        FlattenOperation.execute(values, 2);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });
});
