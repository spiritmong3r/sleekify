import {MultidimensionalArrayHelper} from '../../../common/array/multidimensional-array.helper';
import {List} from '../../list';
import {FlattenOperation} from './flatten.operation';

describe('FlattenOperation', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([], 1);
    });

    it('given an array of numbers, return the same List of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = new List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5], 1);
    });

    it('given an array of List of numbers, return a flattened List', () => {
        // GIVEN
        const values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[1, 2, 3, 4, 5], [6, 7, 8]], 1);
    });

    it('given a tridimensionnal array of numbers, return a bidimensionnal List', () => {
        // GIVEN
        const values = [[[1, 2, 3, 4, 5]], [[6, 7, 8]]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = FlattenOperation.execute(values);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[[1, 2, 3, 4, 5]], [[6, 7, 8]]], 1);
    });

    it('given a tridimensionnal array of numbers, return a flatten List', () => {
        // GIVEN
        const values = [[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

        // WHEN
        const result = FlattenOperation.execute(values, 2);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]], 2);
    });

    it('given an array of List of numbers, return a List of numbers', () => {
        // GIVEN
        const values = [new List(1, 2, 3, 4, 5), new List(6, 7, 8), new List(9, 10, 11)];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

        // WHEN
        const result = FlattenOperation.execute(values, 1);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new List(1, 2, 3, 4, 5), new List(6, 7, 8), new List(9, 10, 11)], 1);
    });

    it('given an array of bidimensional List of numbers, return a List of numbers', () => {
        // GIVEN
        const values = [new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8), new List(9, 10, 11))];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

        // WHEN
        const result = FlattenOperation.execute(values, 2);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8), new List(9, 10, 11))], 2);
    });

});
