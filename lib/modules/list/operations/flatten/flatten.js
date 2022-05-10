"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flatten = void 0;
var multidimensional_array_helper_1 = require("../../../common/multidimensional-array.helper");
var list_1 = require("../../list");
var Flatten = /** @class */ (function () {
    function Flatten() {
    }
    Flatten.execute = function (values, depth) {
        if (depth === void 0) { depth = 1; }
        return new list_1.List().reset(multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(values, depth));
    };
    return Flatten;
}());
exports.Flatten = Flatten;
