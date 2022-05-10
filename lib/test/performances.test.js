"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../modules/list/list");
var person_mock_1 = require("./mocks/person.mock");
describe.skip('performances', function () {
    describe('map', function () {
        it('case 0', function () {
            // GIVEN
            var values = Array.from(Array(60000000).keys()).map(function () { return person_mock_1.PersonMock.bob(); });
            var startTime = new Date().getTime();
            // WHEN
            values.map(function (it) { return it.age; });
            // THEN
            var endTime = new Date().getTime();
            var timeElapsed = endTime - startTime;
            console.log("case 0 => ".concat(endTime, " - ").concat(startTime, " = ").concat(timeElapsed, " ms"));
        });
        it('case 1', function () {
            // GIVEN
            var values = new list_1.List().reset(Array.from(Array(55000000).keys()).map(function () { return person_mock_1.PersonMock.bob(); }));
            var startTime = new Date().getTime();
            // WHEN
            values.map(function (it) { return it.age; });
            // THEN
            var endTime = new Date().getTime();
            var timeElapsed = endTime - startTime;
            console.log("case 1 => ".concat(endTime, " - ").concat(startTime, " = ").concat(timeElapsed, " ms"));
        });
    });
    describe('flatmap', function () {
        it('case 1', function () {
            // GIVEN
            var values = new (list_1.List.bind.apply(list_1.List, __spreadArray([void 0], Array.from(Array(62000).keys()).map(function () { return person_mock_1.PersonMock.bob(); }), false)))();
            var startTime = new Date().getTime();
            // WHEN
            values.map(function (it) { return it.age; });
            // THEN
            var endTime = new Date().getTime();
            var timeElapsed = endTime - startTime;
            console.log("case 1 => ".concat(endTime, " - ").concat(startTime, " = ").concat(timeElapsed, " ms"));
        });
    });
});
