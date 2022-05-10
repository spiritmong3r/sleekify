"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultidimensionalArrayHelper = void 0;
var array_helper_1 = require("./array.helper");
var MultidimensionalArrayHelper = /** @class */ (function () {
    function MultidimensionalArrayHelper() {
    }
    /**
     *
     * @param array
     * @param depth
     * @return
     */
    MultidimensionalArrayHelper.flatDeep = function (array, depth) {
        if (depth === void 0) { depth = 1; }
        if (depth > 0) {
            return array.reduce(function (previous, current) {
                var previousAsArray = array_helper_1.ArrayHelper.transformToArray(previous);
                var currentAsArray = array_helper_1.ArrayHelper.transformToArray(current);
                return previousAsArray.concat(MultidimensionalArrayHelper.flatDeep(currentAsArray, depth - 1));
            }, []);
        }
        else {
            return array.slice();
        }
    };
    return MultidimensionalArrayHelper;
}());
exports.MultidimensionalArrayHelper = MultidimensionalArrayHelper;
