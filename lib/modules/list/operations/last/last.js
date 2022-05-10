"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Last = void 0;
var Last = /** @class */ (function () {
    function Last() {
    }
    Last.execute = function (values, predicate) {
        var valuesFound = values.filter(predicate);
        if (valuesFound.length > 0)
            return valuesFound[valuesFound.length - 1];
        else
            throw Error('No value matches the predicate');
    };
    return Last;
}());
exports.Last = Last;
