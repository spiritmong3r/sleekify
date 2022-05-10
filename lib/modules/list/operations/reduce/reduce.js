"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
var Reduce = /** @class */ (function () {
    function Reduce() {
    }
    Reduce.execute = function (values, callback, initialValue) { return values.reduce(callback, initialValue); };
    return Reduce;
}());
exports.Reduce = Reduce;
