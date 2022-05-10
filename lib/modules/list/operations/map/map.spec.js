"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var list_1 = require("../../list");
var map_1 = require("./map");
describe('Map', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = map_1.Map.execute(values, function (it) { return it; });
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return a List of strings', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = map_1.Map.execute(values, function (it) { return it.toString(); });
        // THEN
        var expected = new list_1.List('1', '2', '3', '4', '5');
        expect(result).toEqual(expected);
    });
    it('given an array of persons, return a List of age', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.jane()];
        // WHEN
        var result = map_1.Map.execute(values, function (it) { return it.age; });
        // THEN
        var expected = new list_1.List(18, 19, 24);
        expect(result).toEqual(expected);
    });
});
