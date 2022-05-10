"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var list_1 = require("../../list");
var Map = /** @class */ (function () {
    function Map() {
    }
    Map.execute = function (values, callback) { return new list_1.List().reset(values.map(callback)); };
    return Map;
}());
exports.Map = Map;
