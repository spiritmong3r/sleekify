"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multidimensional_array_helper_1 = require("./multidimensional-array.helper");
describe('MultidimensionalArrayHelper', function () {
    describe('flatDeep', function () {
        it('given an empty array, return an empty array', function () {
            // GIVEN
            var array = [];
            // WHEN
            var result = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(array);
            // THEN
            var expected = JSON.stringify([]);
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given an array of numbers, return the same array of numbers', function () {
            // GIVEN
            var array = [1, 2, 3, 4, 5];
            // WHEN
            var result = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(array);
            // THEN
            var expected = JSON.stringify([1, 2, 3, 4, 5]);
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a bidimensionnal array of numbers, return a flattened array', function () {
            // GIVEN
            var array = [[1, 2, 3, 4, 5], [6, 7, 8]];
            // WHEN
            var result = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(array);
            // THEN
            var expected = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]);
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a tridimensionnal array of numbers, return a bidimensionnal array', function () {
            // GIVEN
            var array = [[[1, 2, 3, 4, 5]], [[6, 7, 8]]];
            // WHEN
            var result = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(array);
            // THEN
            var expected = JSON.stringify([[1, 2, 3, 4, 5], [6, 7, 8]]);
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a tridimensionnal array of numbers, return a flatten array', function () {
            // GIVEN
            var array = [[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]];
            // WHEN
            var result = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(array, 2);
            // THEN
            var expected = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            expect(JSON.stringify(result)).toEqual(expected);
        });
    });
});
