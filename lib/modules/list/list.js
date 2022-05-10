"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var any_1 = require("./operations/any/any");
var count_1 = require("./operations/count/count");
var distinct_1 = require("./operations/distinct/distinct");
var drop_last_1 = require("./operations/drop-last/drop-last");
var drop_1 = require("./operations/drop/drop");
var filter_1 = require("./operations/filter/filter");
var find_1 = require("./operations/find/find");
var first_or_null_1 = require("./operations/first-or-null/first-or-null");
var first_1 = require("./operations/first/first");
var flatmap_1 = require("./operations/flatmap/flatmap");
var flatten_1 = require("./operations/flatten/flatten");
var last_or_null_1 = require("./operations/last-or-null/last-or-null");
var last_1 = require("./operations/last/last");
var map_1 = require("./operations/map/map");
var max_by_1 = require("./operations/max-by/max-by");
var none_1 = require("./operations/none/none");
var reduce_1 = require("./operations/reduce/reduce");
var reverse_1 = require("./operations/reverse/reverse");
var some_1 = require("./operations/some/some");
var sort_by_1 = require("./operations/sort-by/sort-by");
var take_last_1 = require("./operations/take-last/take-last");
var take_1 = require("./operations/take/take");
var to_array_1 = require("./operations/to-array/to-array");
/**
 * @author cleme_mo
 */
var List = /** @class */ (function () {
    function List() {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.values = value;
    }
    List.prototype.reset = function (values) {
        this.values = values;
        return this;
    };
    List.prototype.filter = function (predicate) {
        return filter_1.Filter.execute(this.values, predicate);
    };
    List.prototype.onEach = function () {
        // TODO to implement
        return new List();
    };
    List.prototype.map = function (callback) {
        return map_1.Map.execute(this.values, callback);
    };
    List.prototype.flatMap = function (callback) {
        return flatmap_1.Flatmap.execute(this.values, callback);
    };
    List.prototype.flatten = function (depth) {
        if (depth === void 0) { depth = 1; }
        return flatten_1.Flatten.execute(this.values, depth);
    };
    List.prototype.reverse = function () {
        return reverse_1.Reverse.execute(this.values);
    };
    // TODO to improve by adding asc/desc option, etc ...
    List.prototype.sortBy = function (callback) {
        return sort_by_1.SortBy.execute(this.values, callback);
    };
    List.prototype.distinct = function () {
        return distinct_1.Distinct.execute(this.values);
    };
    List.prototype.distinctBy = function () {
        // TODO to implement
        return new List();
    };
    List.prototype.take = function (n) {
        return take_1.Take.execute(this.values, n);
    };
    List.prototype.takeLast = function (n) {
        return take_last_1.TakeLast.execute(this.values, n);
    };
    List.prototype.drop = function (n) {
        return drop_1.Drop.execute(this.values, n);
    };
    List.prototype.dropLast = function (n) {
        return drop_last_1.DropLast.execute(this.values, n);
    };
    List.prototype.find = function (predicate) {
        return find_1.Find.execute(this.values, predicate);
    };
    List.prototype.first = function (predicate) {
        return first_1.First.execute(this.values, predicate);
    };
    List.prototype.firstOrNull = function (predicate) {
        return first_or_null_1.FirstOrNull.execute(this.values, predicate);
    };
    List.prototype.last = function (predicate) {
        return last_1.Last.execute(this.values, predicate);
    };
    List.prototype.lastOrNull = function (predicate) {
        return last_or_null_1.LastOrNull.execute(this.values, predicate);
    };
    List.prototype.reduce = function (callback, initialValue) {
        return reduce_1.Reduce.execute(this.values, callback, initialValue);
    };
    List.prototype.associateBy = function () {
        // TODO to implement
        return;
    };
    List.prototype.groupBy = function () {
        // TODO to implement
        return;
    };
    List.prototype.minBy = function (callback) {
        // TODO to implement
        return undefined;
    };
    List.prototype.maxBy = function (callback) {
        return max_by_1.MaxBy.execute(this.values, callback);
    };
    List.prototype.some = function (predicate) {
        return some_1.Some.execute(this.values, predicate);
    };
    List.prototype.any = function (predicate) {
        return any_1.Any.execute(this.values, predicate);
    };
    List.prototype.none = function (predicate) {
        return none_1.None.execute(this.values, predicate);
    };
    List.prototype.all = function (predicate) {
        // TODO to implement
        return false;
    };
    List.prototype.contains = function (element) {
        // TODO to implement
        return false;
    };
    List.prototype.isEmpty = function () {
        // TODO to implement
        return false;
    };
    List.prototype.joinTo = function () {
        // TODO to implement
        return '';
    };
    List.prototype.sum = function () {
        // TODO to implement
        return 0;
    };
    List.prototype.sumBy = function (predicate) {
        // TODO to implement
        return 0;
    };
    List.prototype.count = function (predicate) {
        return count_1.Count.execute(this.values, predicate);
    };
    List.prototype.toArray = function () {
        return to_array_1.ToArray.execute(this.values);
    };
    return List;
}());
exports.List = List;
