"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multidimensional_array_helper_1 = require("../../../common/multidimensional-array.helper");
var list_1 = require("../../list");
var flatten_1 = require("./flatten");
describe('Flatten', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([]);
        // WHEN
        var result = flatten_1.Flatten.execute(values);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([], 1);
    });
    it('given an array of numbers, return the same List of numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);
        // WHEN
        var result = flatten_1.Flatten.execute(values);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5], 1);
    });
    it('given an array of List of numbers, return a flattened List', function () {
        // GIVEN
        var values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);
        // WHEN
        var result = flatten_1.Flatten.execute(values);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[1, 2, 3, 4, 5], [6, 7, 8]], 1);
    });
    it('given a tridimensionnal array of numbers, return a bidimensionnal List', function () {
        // GIVEN
        var values = [[[1, 2, 3, 4, 5]], [[6, 7, 8]]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);
        // WHEN
        var result = flatten_1.Flatten.execute(values);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[[1, 2, 3, 4, 5]], [[6, 7, 8]]], 1);
    });
    it('given a tridimensionnal array of numbers, return a flatten List', function () {
        // GIVEN
        var values = [[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        // WHEN
        var result = flatten_1.Flatten.execute(values, 2);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]], 2);
    });
    it('given an array of List of numbers, return a List of numbers', function () {
        // GIVEN
        var values = [new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8), new list_1.List(9, 10, 11)];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        // WHEN
        var result = flatten_1.Flatten.execute(values, 1);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8), new list_1.List(9, 10, 11)], 1);
    });
    it('given an array of bidimensional List of numbers, return a List of numbers', function () {
        // GIVEN
        var values = [new list_1.List(new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8), new list_1.List(9, 10, 11))];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        // WHEN
        var result = flatten_1.Flatten.execute(values, 2);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new list_1.List(new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8), new list_1.List(9, 10, 11))], 2);
    });
});
