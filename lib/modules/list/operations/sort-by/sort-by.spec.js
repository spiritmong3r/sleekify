"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var list_1 = require("../../list");
var sort_by_1 = require("./sort-by");
describe('SortBy', function () {
    it('given an array of strings, return this List sorted from the lowest to the highest', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = sort_by_1.SortBy.execute(values, function (it) { return it; });
        // THEN
        var expected = new list_1.List('0', '1', '2', '3', '4', '5', '9');
        expect(result).toEqual(expected);
    });
    it('given an array of persons, return this List sorted from youngest to the oldest', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = sort_by_1.SortBy.execute(values, function (it) { return it.age; });
        // THEN
        var expected = new list_1.List(person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.jane());
        expect(result).toEqual(expected);
    });
});
