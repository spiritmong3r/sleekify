"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
var list_1 = require("../list/list");
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    /**
     * Transform an object to array.
     *
     * @param data This is either an object or an array of objects.
     * @return An array of objects.
     */
    ArrayHelper.transformToArray = function (data) {
        var array;
        if (data instanceof list_1.List)
            array = data.toArray();
        else if (!Array.isArray(data) && data)
            array = [data];
        else if (Array.isArray(data))
            array = data;
        else
            array = [];
        return array;
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;
