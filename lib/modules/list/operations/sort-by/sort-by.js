"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBy = void 0;
var list_1 = require("../../list");
var SortBy = /** @class */ (function () {
    function SortBy() {
    }
    SortBy.execute = function (values, callback) {
        values.sort(function (previous, current) {
            if (callback(previous) < callback(current))
                return -1;
            else if (callback(previous) > callback(current))
                return 1;
            else
                return 0;
        });
        return new list_1.List().reset(values);
    };
    return SortBy;
}());
exports.SortBy = SortBy;
