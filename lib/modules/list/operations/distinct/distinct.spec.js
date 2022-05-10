"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var list_1 = require("../../list");
var distinct_1 = require("./distinct");
describe('Distinct', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = distinct_1.Distinct.execute(values);
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
    });
    it('given an array of strings not containing any duplicate, return the same List', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = distinct_1.Distinct.execute(values);
        // THEN
        var expected = new list_1.List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });
    it('given an array of strings containing duplicates, return a List without any duplicate', function () {
        // GIVEN
        var values = ['1', '2', '5', '5', '4', '3', '9', '0', '2'];
        // WHEN
        var result = distinct_1.Distinct.execute(values);
        // THEN
        var expected = new list_1.List('1', '2', '5', '4', '3', '9', '0');
        expect(result).toEqual(expected);
    });
    it('given an array of persons containing multiple 19 yo persons and a predicate, return 2', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = distinct_1.Distinct.execute(values);
        // THEN
        var expected = new list_1.List(person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob());
        expect(result).toEqual(expected);
    });
});
