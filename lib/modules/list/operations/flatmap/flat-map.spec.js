"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_mock_1 = require("../../../../test/mocks/person.mock");
var multidimensional_array_helper_1 = require("../../../common/multidimensional-array.helper");
var list_1 = require("../../list");
var flatmap_1 = require("./flatmap");
describe('Flatmap', function () {
    it('given an empty array, return an empty List', function () {
        // GIVEN
        var values = [];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it; });
        // THEN
        var expected = new list_1.List();
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([]);
    });
    it('given an array of numbers, return the same List of numbers', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it; });
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    });
    it('given a bidimensional array of numbers, return a flattened List of numbers', function () {
        // GIVEN
        var values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it; });
        // THEN
        var expected = new list_1.List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[1, 2, 3, 4, 5], [6, 7, 8]]);
    });
    it('given a bidimensional array of numbers, return a flattened List of strings', function () {
        // GIVEN
        var values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue(['1', '2', '3', '4', '5', '6', '7', '8']);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it.map(function (value) { return value.toString(); }); });
        // THEN
        var expected = new list_1.List('1', '2', '3', '4', '5', '6', '7', '8');
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([['1', '2', '3', '4', '5'], ['6', '7', '8']]);
    });
    it('given a tridimensional array of numbers, return a List of bidimensional array of strings', function () {
        // GIVEN
        var values = [[[1, 2, 3, 4, 5], [6, 7, 8]]];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([['1', '2', '3', '4', '5'], ['6', '7', '8']]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it.map(function (value1) { return value1.map(function (value2) { return value2.toString(); }); }); });
        // THEN
        var expected = new list_1.List(['1', '2', '3', '4', '5'], ['6', '7', '8']);
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[['1', '2', '3', '4', '5'], ['6', '7', '8']]]);
    });
    it('given an array of List of numbers, return a List of strings', function () {
        // GIVEN
        var values = [new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8)];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue(['1', '2', '3', '4', '5', '6', '7', '8']);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it.map(function (value) { return value.toString(); }); });
        // THEN
        var expected = new list_1.List('1', '2', '3', '4', '5', '6', '7', '8');
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new list_1.List('1', '2', '3', '4', '5'), new list_1.List('6', '7', '8')]);
    });
    it('given an array of bidimensional List of numbers, return a bidimensional List of strings', function () {
        // GIVEN
        var values = [new list_1.List(new list_1.List(1, 2, 3, 4, 5), new list_1.List(6, 7, 8))];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([new list_1.List('1', '2', '3', '4', '5'), new list_1.List('6', '7', '8')]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it.map(function (value1) { return value1.map(function (value2) { return value2.toString(); }); }); });
        // THEN
        var expected = new list_1.List(new list_1.List('1', '2', '3', '4', '5'), new list_1.List('6', '7', '8'));
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new list_1.List(new list_1.List('1', '2', '3', '4', '5'), new list_1.List('6', '7', '8'))]);
    });
    it('given an array of bidimensional List of persons, return a bidimensional List of firstnames', function () {
        // GIVEN
        var values = [new list_1.List(new list_1.List(person_mock_1.PersonMock.ed(), person_mock_1.PersonMock.bob()), new list_1.List(person_mock_1.PersonMock.jo(), person_mock_1.PersonMock.ted()))];
        multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([new list_1.List('Ed', 'Bob'), new list_1.List('Jo', 'Ted')]);
        // WHEN
        var result = flatmap_1.Flatmap.execute(values, function (it) { return it.map(function (value1) { return value1.map(function (value2) { return value2.firstName; }); }); });
        // THEN
        var expected = new list_1.List(new list_1.List('Ed', 'Bob'), new list_1.List('Jo', 'Ted'));
        expect(result).toEqual(expected);
        expect(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new list_1.List(new list_1.List('Ed', 'Bob'), new list_1.List('Jo', 'Ted'))]);
    });
});
