"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var none_1 = require("./none");
describe('None', function () {
    it('given an array of strings containing a single value 4, return false', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it === '4'; });
        // THEN
        expect(result).toBeFalsy();
    });
    it('given an array of strings containing multiple values 4, return false', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0', '4'];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it === '4'; });
        // THEN
        expect(result).toBeFalsy();
    });
    it('given an array of strings not containing value 4, return true', function () {
        // GIVEN
        var values = ['1', '2', '5', '4', '3', '9', '0'];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it === '34'; });
        // THEN
        expect(result).toBeTruthy();
    });
    it('given an array of persons containing a single 18 yo person, return false', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it.age === 18; });
        // THEN
        expect(result).toBeFalsy();
    });
    it('given an array of persons containing multiple 18 yo persons, return false', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ted(), person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it.age === 18; });
        // THEN
        expect(result).toBeFalsy();
    });
    it('given an array of persons not containing a 35 yo person, return true', function () {
        // GIVEN
        var values = [person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.jane(), person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.bob()];
        // WHEN
        var result = none_1.None.execute(values, function (it) { return it.age === 35; });
        // THEN
        expect(result).toBeTruthy();
    });
});
