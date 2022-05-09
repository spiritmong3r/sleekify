import {Any} from './operations/any/any';
import {Count} from './operations/count/count';
import {Distinct} from './operations/distinct/distinct';
import {DropLast} from './operations/drop-last/drop-last';
import {Drop} from './operations/drop/drop';
import {Filter} from './operations/filter/filter';
import {FirstOrNull} from './operations/first-or-null/first-or-null';
import {First} from './operations/first/first';
import {Flatmap} from './operations/flatmap/flatmap';
import {Flatten} from './operations/flatten/flatten';
import {LastOrNull} from './operations/last-or-null/last-or-null';
import {Last} from './operations/last/last';
import {Map} from './operations/map/map';
import {MaxBy} from './operations/max-by/max-by';
import {None} from './operations/none/none';
import {Reduce} from './operations/reduce/reduce';
import {Reverse} from './operations/reverse/reverse';
import {Some} from './operations/some/some';
import {SortBy} from './operations/sort-by/sort-by';
import {TakeLast} from './operations/take-last/take-last';
import {Take} from './operations/take/take';
import {ToArray} from './operations/to-array/to-array';

/**
 * @author cleme_mo
 */
export class List<T> {

    protected values: T[];

    constructor(...value: T[]) {
        this.values = value;
    }

    reset(values: T[]): List<T> {
        this.values = values;
        return this;
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return Filter.execute(this.values, predicate);
    }

    onEach(): List<T> {
        // TODO to implement
        return new List();
    }

    map<U>(callback: (value: T, index: number, array: T[]) => U): List<U> {
        return Map.execute(this.values, callback);
    }

    flatMap<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> {
        return Flatmap.execute(this.values, callback);
    }

    flatten(depth: number = 1): List<T> {
        return Flatten.execute(this.values, depth);
    }

    reverse(): List<T> {
        return Reverse.execute(this.values);
    }

    // TODO to improve by adding asc/desc option, etc ...
    sortBy<U>(callback: (value: T) => U): List<T> {
        return SortBy.execute(this.values, callback);
    }

    distinct(): List<T> {
        return Distinct.execute(this.values);
    }

    distinctBy(): List<T> {
        // TODO to implement
        return new List();
    }

    take(n: number): List<T> {
        return Take.execute(this.values, n);
    }

    takeLast(n: number): List<T> {
        return TakeLast.execute(this.values, n);
    }

    drop(n: number): List<T> {
        return Drop.execute(this.values, n);
    }

    dropLast(n: number): List<T> {
        return DropLast.execute(this.values, n);
    }

    first(predicate: (value: T, index: number, array: T[]) => unknown): T {
        return First.execute(this.values, predicate);
    }

    firstOrNull(predicate: (value: T, index: number, array: T[]) => unknown): T | undefined {
        return FirstOrNull.execute(this.values, predicate);
    }

    last(predicate: (value: T, index: number, array: T[]) => boolean): T {
        return Last.execute(this.values, predicate);
    }

    lastOrNull(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return LastOrNull.execute(this.values, predicate);
    }

    find(predicate: (value: T, index: number, array: T[]) => boolean): T {
        // TODO to implement
        return this.values[0];
    }

    reduce<U>(callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return Reduce.execute(this.values, callback, initialValue);
    }

    associateBy(): any {
        // TODO to implement
        return;
    }

    groupBy(): any {
        // TODO to implement
        return;
    }

    minBy<U>(callback: (value: T) => U): T | undefined {
        // TODO to implement
        return undefined;
    }

    maxBy<U>(callback: (value: T) => U): T | undefined {
        return MaxBy.execute(this.values, callback);
    }

    some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return Some.execute(this.values, predicate);
    }

    any(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return Any.execute(this.values, predicate);
    }

    none(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return None.execute(this.values, predicate);
    }

    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        // TODO to implement
        return false;
    }

    contains(element: T): boolean {
        // TODO to implement
        return false;
    }

    isEmpty(): boolean {
        // TODO to implement
        return false;
    }

    joinTo(): string {
        // TODO to implement
        return '';
    }

    sum(): number {
        // TODO to implement
        return 0;
    }

    sumBy(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        // TODO to implement
        return 0;
    }

    count(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        return Count.execute(this.values, predicate);
    }

    toArray(): T[] {
        return ToArray.execute(this.values);
    }

}
