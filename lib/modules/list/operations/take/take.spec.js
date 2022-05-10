"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
var take_1 = require("./take");
describe('Take', function () {
    it('given an empty array, take 5 and return an empty List', function () {
        // GIVEN
        var values = [];
        var n = 5;
        // WHEN
        var result = take_1.Take.execute(values, n);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, take 0 and return an empty List', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 0;
        // WHEN
        var result = take_1.Take.execute(values, n);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, take 2 and return an array containing the 2 first numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 2;
        // WHEN
        var result = take_1.Take.execute(values, n);
        // THEN
        var expected = new list_1.List(1, 2);
        expect(result).toEqual(expected);
    });
});
