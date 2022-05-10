"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var count_1 = require("./count");
describe('Count', function () {
    it('given an empty array and no predicate, return 0', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = count_1.Count.execute(values);
        // THEN
        expect(result).toEqual(0);
    });
    it('given an array of strings and no predicate, return 7', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = count_1.Count.execute(values);
        // THEN
        expect(result).toEqual(7);
    });
    it('given an empty array and a predicate, return 0', function () {
        // GIVEN
        var values = [];
        // WHEN
        var result = count_1.Count.execute(values, function () { return true; });
        // THEN
        expect(result).toEqual(0);
    });
    it('given an array of strings not containing the value 34 and a predicate, return 0', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it === '34'; });
        // THEN
        expect(result).toEqual(0);
    });
    it('given an array of strings containing a single value 4 and a predicate, return 1', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it === '4'; });
        // THEN
        expect(result).toEqual(1);
    });
    it('given an array of strings containing multiples values 4 and a predicate, return 3', function () {
        // GIVEN
        var values = ['1', '4', '2', '5', '4', '3', '9', '4', '0'];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it === '4'; });
        // THEN
        expect(result).toEqual(3);
    });
    it('given an array of persons not containing a 35 yo person and a predicate, return 0', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it.age === 35; });
        // THEN
        expect(result).toEqual(0);
    });
    it('given an array of persons containing a single 18 yo person and a predicate, return 1', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it.age === 18; });
        // THEN
        expect(result).toEqual(1);
    });
    it('given an array of persons containing multiple 19 yo persons and a predicate, return 2', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = count_1.Count.execute(values, function (it) { return it.age === 19; });
        // THEN
        expect(result).toEqual(2);
    });
});
