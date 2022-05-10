"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var max_by_1 = require("./max-by");
describe('MaxBy', function () {
    it('given an empty array, return undefined value', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = max_by_1.MaxBy.execute(values, function (it) { return it; });
        // THEN
        expect(result).toBeUndefined();
    });
    it('given an array of numbers, return the max value', function () {
        // GIVEN
        var values = [1, 2, 5, 4, 3];
        // WHEN
        var result = max_by_1.MaxBy.execute(values, function (it) { return it; });
        // THEN
        var expected = 5;
        expect(result).toEqual(expected);
    });
    it('given an array of strings, return the max value', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', 't', 'a'];
        // WHEN
        var result = max_by_1.MaxBy.execute(values, function (it) { return it; });
        // THEN
        var expected = 't';
        expect(result).toEqual(expected);
    });
    it('given an array of persons, return the oldest one', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jo()];
        // WHEN
        var result = max_by_1.MaxBy.execute(values, function (it) { return it.age; });
        // THEN
        var expected = person_mock_1.PersonMock.jo();
        expect(result).toEqual(expected);
    });
});
