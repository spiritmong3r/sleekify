"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drop = void 0;
var list_1 = require("../../list");
var Drop = /** @class */ (function () {
    function Drop() {
    }
    Drop.execute = function (values, n) { return new list_1.List().reset(values.slice(n, values.length)); };
    return Drop;
}());
exports.Drop = Drop;
