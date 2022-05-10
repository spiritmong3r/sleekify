"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
var take_last_1 = require("./take-last");
describe('TakeLast', function () {
    it('given an empty array, take last 5 and return an empty List', function () {
        // GIVEN
        var values = [];
        var n = 5;
        // WHEN
        var result = take_last_1.TakeLast.execute(values, n);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, take last 0 and return an empty List', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 0;
        // WHEN
        var result = take_last_1.TakeLast.execute(values, n);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, take last 2 and return an array containing the 2 last numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 2;
        // WHEN
        var result = take_last_1.TakeLast.execute(values, n);
        // THEN
        var expected = new list_1.List(4, 5);
        expect(result).toEqual(expected);
    });
});
