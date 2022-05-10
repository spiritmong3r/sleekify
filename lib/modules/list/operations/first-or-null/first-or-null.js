"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstOrNull = void 0;
var FirstOrNull = /** @class */ (function () {
    function FirstOrNull() {
    }
    FirstOrNull.execute = function (values, predicate) { return values.find(predicate); };
    return FirstOrNull;
}());
exports.FirstOrNull = FirstOrNull;
