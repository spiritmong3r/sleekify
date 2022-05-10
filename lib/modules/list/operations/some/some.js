"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Some = void 0;
var Some = /** @class */ (function () {
    function Some() {
    }
    Some.execute = function (values, predicate) { return values.some(predicate); };
    return Some;
}());
exports.Some = Some;
