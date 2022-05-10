"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var when_1 = require("./when");
describe('when', function () {
    it('given no default, should return branch 5 value', function () {
        // GIVEN
        var value = 5;
        // WHEN
        var result = (0, when_1.when)(value, [
            5, function () { return 'Hello'; },
            6, function () { return 'Goodbye !'; }
        ]);
        // THEN
        expect(result).toEqual('Hello');
    });
    it('given no default, should return undefined', function () {
        // GIVEN
        var value = 7;
        // WHEN
        var result = (0, when_1.when)(value, [
            5, function () { return 'Hello'; },
            6, function () { return 'Goodbye !'; }
        ]);
        // THEN
        expect(result).toBeUndefined();
    });
    it('given default, should return branch 6 value', function () {
        // GIVEN
        var value = 6;
        // WHEN
        var result = (0, when_1.when)(value, [
            5, function () { return 'Hello'; },
            6, function () { return 'Goodbye !'; }
        ], 'Nothing !');
        // THEN
        expect(result).toEqual('Goodbye !');
    });
    it('given default, should return default value', function () {
        // GIVEN
        var value = 7;
        // WHEN
        var result = (0, when_1.when)(value, [
            5, function () { return 'Hello'; },
            6, function () { return 'Goodbye !'; }
        ], 'Default value');
        // THEN
        expect(result).toEqual('Default value');
    });
});
