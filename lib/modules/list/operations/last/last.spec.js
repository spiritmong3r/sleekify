"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var last_1 = require("./last");
describe('Last', function () {
    it('given an empty array, throw an exception', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = function () { return last_1.Last.execute(values, function (it) { return it; }); };
        // THEN
        expect(result).toThrowError('No value matches the predicate');
    });
    it('given an array of numbers, no value matching the predicate, throw an exception', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = function () { return last_1.Last.execute(values, function (it) { return it === 0; }); };
        // THEN
        expect(result).toThrowError('No value matches the predicate');
    });
    it('given an array of numbers, return the last value matching the predicate', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = last_1.Last.execute(values, function (it) { return it === 3; });
        // THEN
        var expected = 3;
        expect(result).toEqual(expected);
    });
    it('given an array of persons, return the last person matching the predicate', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.ed()];
        // WHEN
        var result = last_1.Last.execute(values, function (it) { return it.age === 19; });
        // THEN
        var expected = person_mock_1.PersonMock.ed();
        expect(result).toEqual(expected);
    });
});