"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastOrNull = void 0;
var LastOrNull = /** @class */ (function () {
    function LastOrNull() {
    }
    LastOrNull.execute = function (values, predicate) {
        var valuesFound = values.filter(predicate);
        if (valuesFound.length > 0)
            return valuesFound[valuesFound.length - 1];
        else
            return undefined;
    };
    return LastOrNull;
}());
exports.LastOrNull = LastOrNull;
