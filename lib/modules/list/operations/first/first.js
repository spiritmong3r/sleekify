"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First = void 0;
var First = /** @class */ (function () {
    function First() {
    }
    First.execute = function (values, predicate) {
        var value = (predicate) ? values.find(predicate) : values[0];
        if (value)
            return value;
        else
            throw Error('No value matches the predicate');
    };
    return First;
}());
exports.First = First;
