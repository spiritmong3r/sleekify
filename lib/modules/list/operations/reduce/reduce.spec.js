"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
describe('Reduce', function () {
    it('given an empty array of strings, return an empty string', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = reduce_1.Reduce.execute(values, function (acc, value) { return acc + value; }, '');
        // THEN
        var expected = '';
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return the sum of those numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = reduce_1.Reduce.execute(values, function (acc, value) { return acc + value; }, 0);
        // THEN
        var expected = 15;
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return the sum of those numbers + 7', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = reduce_1.Reduce.execute(values, function (acc, value) { return acc + value; }, 7);
        // THEN
        var expected = 22;
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return the string representation', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = reduce_1.Reduce.execute(values, function (acc, value) { return acc + value; }, '');
        // THEN
        var expected = '12345';
        expect(result).toEqual(expected);
    });
    it('given a bidimensional array of numbers, return an array of numbers', function () {
        // GIVEN
        var values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        // WHEN
        var result = reduce_1.Reduce.execute(values, function (acc, value) { return acc.concat(value); }, []);
        // THEN
        var expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(result).toEqual(expected);
    });
});
