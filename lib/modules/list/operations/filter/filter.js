"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var list_1 = require("../../list");
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.execute = function (values, predicate) { return new list_1.List().reset(values.filter(predicate)); };
    return Filter;
}());
exports.Filter = Filter;
