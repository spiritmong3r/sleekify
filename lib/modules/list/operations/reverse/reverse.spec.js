"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var list_1 = require("../../list");
var reverse_1 = require("./reverse");
describe('Reverse', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = reverse_1.Reverse.execute(values);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of numbers, return the same array but reversed', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = reverse_1.Reverse.execute(values);
        // THEN
        var expected = new list_1.List(5, 4, 3, 2, 1);
        expect(result).toEqual(expected);
    });
    it('given an array of persons, return the same array but reversed', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.jane()];
        // WHEN
        var result = reverse_1.Reverse.execute(values);
        // THEN
        var expected = new list_1.List(person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob());
        expect(result).toEqual(expected);
    });
});
