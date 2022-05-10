"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../list/list");
var array_helper_1 = require("./array.helper");
describe('ArrayHelper', function () {
    describe('transformToArray', function () {
        it('given an array of numbers, return the same array', function () {
            // GIVEN
            var data = [1, 2, 3, 4, 5];
            // WHEN
            var result = array_helper_1.ArrayHelper.transformToArray(data);
            // THEN
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
        it('given a number, return an array containing this number', function () {
            // GIVEN
            var data = 1;
            // WHEN
            var result = array_helper_1.ArrayHelper.transformToArray(data);
            // THEN
            expect(result).toEqual([1]);
        });
        it('given a List containing numbers, return an array of the same numbers', function () {
            // GIVEN
            var data = new list_1.List(1, 2, 3, 4, 5);
            // WHEN
            var result = array_helper_1.ArrayHelper.transformToArray(data);
            // THEN
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
        it('given a List containing only a null value, return an empty array', function () {
            // GIVEN
            var data = null;
            // WHEN
            var result = array_helper_1.ArrayHelper.transformToArray(data);
            // THEN
            expect(result).toEqual([]);
        });
        it('given a List containing only an undefined value, return an empty array', function () {
            // GIVEN
            var data = undefined;
            // WHEN
            var result = array_helper_1.ArrayHelper.transformToArray(data);
            // THEN
            expect(result).toEqual([]);
        });
    });
});
