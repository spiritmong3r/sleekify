"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeLast = void 0;
var list_1 = require("../../list");
var TakeLast = /** @class */ (function () {
    function TakeLast() {
    }
    TakeLast.execute = function (values, n) { return new list_1.List().reset(values.slice(values.length - n, values.length)); };
    return TakeLast;
}());
exports.TakeLast = TakeLast;
