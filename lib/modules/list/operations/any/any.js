"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Any = void 0;
var Any = /** @class */ (function () {
    function Any() {
    }
    Any.execute = function (values, predicate) { return values.some(predicate); };
    return Any;
}());
exports.Any = Any;
