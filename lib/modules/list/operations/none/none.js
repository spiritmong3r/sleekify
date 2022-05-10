"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = void 0;
var None = /** @class */ (function () {
    function None() {
    }
    None.execute = function (values, predicate) {
        return !values.some(predicate);
    };
    return None;
}());
exports.None = None;
