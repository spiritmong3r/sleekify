"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../list");
var list_of_1 = require("./list-of");
describe('listOf', function () {
    it('given multiples numbers, return a List of numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = list_of_1.listOf.apply(void 0, values);
        // THEN
        var expected = JSON.stringify(new list_1.List(1, 2, 3, 4, 5));
        expect(JSON.stringify(result)).toEqual(expected);
    });
    it('given a string, return a List of string', function () {
        // GIVEN
        var value = 'hello';
        // WHEN
        var result = (0, list_of_1.listOf)(value);
        // THEN
        var expected = JSON.stringify(new list_1.List('hello'));
        expect(JSON.stringify(result)).toEqual(expected);
    });
});
