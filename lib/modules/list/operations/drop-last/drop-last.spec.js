"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
var drop_last_1 = require("./drop-last");
describe('DropLast', function () {
    it('given an empty array, drop 5 and return an empty List', function () {
        // GIVEN
        var values = [];
        var n = 5;
        // WHEN
        var result = drop_last_1.DropLast.execute(values, n);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, drop 0 and return the same List', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 0;
        // WHEN
        var result = drop_last_1.DropLast.execute(values, n);
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, drop 2 and return an array without the 2 last numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        var n = 2;
        // WHEN
        var result = drop_last_1.DropLast.execute(values, n);
        // THEN
        var expected = new list_1.List(1, 2, 3);
        expect(result).toEqual(expected);
    });
});
