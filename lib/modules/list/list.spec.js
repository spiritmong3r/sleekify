"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
describe('List', function () {
    describe('flatMap', function () {
        it('given an empty List, return an empty List', function () {
            // GIVEN
            var list = new list_1.List();
            // WHEN
            var result = list.flatMap(function (it) { return it; });
            // THEN
            var expected = JSON.stringify(new list_1.List());
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a List of numbers, return the same List of numbers', function () {
            // GIVEN
            var list = new list_1.List(1, 2, 3, 4, 5);
            // WHEN
            var result = list.flatMap(function (it) { return it; });
            // THEN
            var expected = JSON.stringify(new list_1.List(1, 2, 3, 4, 5));
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a List of List of numbers, return a flattened List', function () {
            // GIVEN
            var list = new list_1.List(new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8));
            // WHEN
            var result = list.flatMap(function (it) { return it; });
            // THEN
            var expected = JSON.stringify(new list_1.List(1, 2, 3, 4, 5, 6, 7, 8));
            expect(JSON.stringify(result)).toEqual(expected);
        });
        it('given a List of List of numbers, return a flattened List of strings', function () {
            // GIVEN
            var list = new list_1.List(new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8));
            jest.spyOn(list, 'map').mockImplementation(function () { return new list_1.List('1', '2', '3', '4', '5', '6', '7', '8'); });
            // WHEN
            var result = list.flatMap(function (it) { return it.map(function (value) { return value.toString(); }); });
            // THEN
            var expected = JSON.stringify(new list_1.List('1', '2', '3', '4', '5', '6', '7', '8'));
            expect(JSON.stringify(result)).toEqual(expected);
        });
    });
});
