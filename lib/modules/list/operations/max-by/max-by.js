"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxBy = void 0;
var MaxBy = /** @class */ (function () {
    function MaxBy() {
    }
    MaxBy.execute = function (values, callback) {
        if (values.length === 0)
            return undefined;
        else
            return values.reduce(function (previous, current) { return (callback(previous) > callback(current)) ? previous : current; });
    };
    return MaxBy;
}());
exports.MaxBy = MaxBy;
