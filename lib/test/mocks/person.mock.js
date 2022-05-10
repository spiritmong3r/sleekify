"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMock = void 0;
var PersonMock = /** @class */ (function () {
    function PersonMock() {
    }
    PersonMock.bob = function () { return ({ name: 'Todd', firstName: 'Bob', age: 18 }); };
    PersonMock.ed = function () { return ({ name: 'Todd', firstName: 'Ed', age: 19 }); };
    PersonMock.jo = function () { return ({ name: 'Todd', firstName: 'Jo', age: 19 }); };
    PersonMock.jane = function () { return ({ name: 'Todd', firstName: 'Jane', age: 24 }); };
    PersonMock.ted = function () { return ({ name: 'Todd', firstName: 'Ted', age: 18 }); };
    return PersonMock;
}());
exports.PersonMock = PersonMock;
