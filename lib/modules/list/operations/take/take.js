"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Take = void 0;
var list_1 = require("../../list");
var Take = /** @class */ (function () {
    function Take() {
    }
    Take.execute = function (values, n) { return new list_1.List().reset(values.slice(0, n)); };
    return Take;
}());
exports.Take = Take;
