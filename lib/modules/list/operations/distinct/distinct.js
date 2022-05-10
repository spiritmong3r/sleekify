"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distinct = void 0;
var list_1 = require("../../list");
var Distinct = /** @class */ (function () {
    function Distinct() {
    }
    Distinct.execute = function (values) {
        var result = values.filter(function (value, index) {
            var duplicateIndex = values.findIndex(function (it) { return JSON.stringify(it) === JSON.stringify(value); });
            return index === duplicateIndex;
        });
        return new list_1.List().reset(result);
    };
    return Distinct;
}());
exports.Distinct = Distinct;
