"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = void 0;
var Find = /** @class */ (function () {
    function Find() {
    }
    Find.execute = function (values, predicate) { return values.find(predicate); };
    return Find;
}());
exports.Find = Find;
