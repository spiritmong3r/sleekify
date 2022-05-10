"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reverse = void 0;
var list_1 = require("../../list");
var Reverse = /** @class */ (function () {
    function Reverse() {
    }
    Reverse.execute = function (values) {
        values.reverse();
        return new list_1.List().reset(values);
    };
    return Reverse;
}());
exports.Reverse = Reverse;
