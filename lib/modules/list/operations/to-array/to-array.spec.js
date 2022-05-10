"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_array_1 = require("./to-array");
describe('ToArray', function () {
    it('given an array with elements, return an array with same elements', function () {
        // GIVEN
        var values = [1, 2, 3, 4, 5];
        // WHEN
        var result = to_array_1.ToArray.execute(values);
        // THEN
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
