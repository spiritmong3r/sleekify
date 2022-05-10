"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = void 0;
var Count = /** @class */ (function () {
    function Count() {
    }
    Count.execute = function (values, predicate) {
        var filteredValues = (predicate) ? values.filter(predicate) : values;
        return filteredValues.length;
    };
    return Count;
}());
exports.Count = Count;
