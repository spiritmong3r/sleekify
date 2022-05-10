"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
var filter_1 = require("./filter");
describe('Filter', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = filter_1.Filter.execute(values, function (it) { return it % 2 === 0; });
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return a List with only even numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = filter_1.Filter.execute(values, function (it) { return it % 2 === 0; });
        // THEN
        var expected = new list_1.List(2, 4);
        expect(result).toEqual(expected);
    });
});
