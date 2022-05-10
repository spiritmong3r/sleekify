"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropLast = void 0;
var list_1 = require("../../list");
var DropLast = /** @class */ (function () {
    function DropLast() {
    }
    DropLast.execute = function (values, n) { return new list_1.List().reset(values.slice(0, values.length - n)); };
    return DropLast;
}());
exports.DropLast = DropLast;
