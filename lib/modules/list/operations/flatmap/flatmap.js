"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flatmap = void 0;
var multidimensional_array_helper_1 = require("../../../common/multidimensional-array.helper");
var list_1 = require("../../list");
var Flatmap = /** @class */ (function () {
    function Flatmap() {
    }
    Flatmap.execute = function (values, callback) {
        var updatedValues = values.map(callback);
        var flatten = multidimensional_array_helper_1.MultidimensionalArrayHelper.flatDeep(updatedValues);
        return (Array.isArray(flatten)) ? new list_1.List().reset(flatten) : new list_1.List(flatten);
    };
    return Flatmap;
}());
exports.Flatmap = Flatmap;
