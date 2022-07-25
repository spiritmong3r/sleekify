import {JoinProps} from '../../models/JoinProps';
import allOperation from '../../operations/all/all.operation';
import anyOperation from '../../operations/any/any.operation';
import containsAllOperation from '../../operations/contains-all/contains-all.operation';
import containsOperation from '../../operations/contains/contains.operation';
import countOperation from '../../operations/count/count.operation';
import distinctOperation from '../../operations/distinct/distinct.operation';
import dropLastOperation from '../../operations/drop-last/drop-last.operation';
import dropOperation from '../../operations/drop/drop.operation';
import filterOperation from '../../operations/filter/filter.operation';
import findOperation from '../../operations/find/find.operation';
import firstOrNullOperation from '../../operations/first-or-null/first-or-null.operation';
import firstOperation from '../../operations/first/first.operation';
import flatMapOperation from '../../operations/flatmap/flat-map.operation';
import flattenOperation from '../../operations/flatten/flatten.operation';
import forEachOperation from '../../operations/for-each/for-each.operation';
import getOperation from '../../operations/get/get.operation';
import groupByOperation from '../../operations/group-by/group-by.operation';
import isEmptyOperation from '../../operations/is-empty/is-empty.operation';
import joinOperation from '../../operations/join/join.operation';
import lastOrNullOperation from '../../operations/last-or-null/last-or-null.operation';
import lastOperation from '../../operations/last/last.operation';
import mapOperation from '../../operations/map/map.operation';
import maxOperation from '../../operations/max/max.operation';
import minOperation from '../../operations/min/min.operation';
import noneOperation from '../../operations/none/none.operation';
import onEachOperation from '../../operations/on-each/on-each.operation';
import reduceOperation from '../../operations/reduce/reduce.operation';
import reverseOperation from '../../operations/reverse/reverse.operation';
import sizeOperation from '../../operations/size/size.operation';
import someOperation from '../../operations/some/some.operation';
import sortOperation from '../../operations/sort/sort.operation';
import sumOperation from '../../operations/sum/sum.operation';
import takeLastOperation from '../../operations/take-last/take-last.operation';
import takeOperation from '../../operations/take/take.operation';
import toArrayOperation from '../../operations/to-array/to-array.operation';

/**
 * @author cleme_mo
 */
export class List<T> implements Iterable<T> {
    protected values: T[];

    constructor(value: T[] = []) {
        this.values = value;
    }

    [Symbol.iterator](): Iterator<T, T, T | undefined> {
        let position = 0;
        return {
            next: (): IteratorResult<T, T> => ({
                value: this.values[position++],
                done: position === this.values.length - 1
            })
        };
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return new List(filterOperation(this.values, predicate));
    }

    onEach<U>(selector: (value: T, index: number, array: T[]) => void): List<T> {
        return new List(onEachOperation(this.values, selector));
    }

    forEach(selector: (value: T, index: number, array: T[]) => void): void {
        forEachOperation(this.values, selector);
    }

    map<U>(selector: (value: T, index: number, array: T[]) => U): List<U> {
        return new List(mapOperation(this.values, selector));
    }

    flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> {
        return new List(flatMapOperation(this.values, selector));
    }

    flatten(depth: number = 1): List<T> {
        return new List(flattenOperation(this.values, depth));
    }

    reverse(): List<T> {
        return new List(reverseOperation(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    sort<U>(selector?: (value: T) => U): List<T> {
        return new List(sortOperation(this.values, selector));
    }

    distinct<U>(selector?: (value: T) => U): List<T> {
        return new List(distinctOperation(this.values, selector));
    }

    take(n: number): List<T> {
        return new List(takeOperation(this.values, n));
    }

    takeLast(n: number): List<T> {
        return new List(takeLastOperation(this.values, n));
    }

    drop(n: number): List<T> {
        return new List(dropOperation(this.values, n));
    }

    dropLast(n: number): List<T> {
        return new List(dropLastOperation(this.values, n));
    }

    get(index: number): T {
        return getOperation(this.values, index);
    }

    find(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return findOperation(this.values, predicate);
    }

    first(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return firstOperation(this.values, predicate);
    }

    firstOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return firstOrNullOperation(this.values, predicate);
    }

    last(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return lastOperation(this.values, predicate);
    }

    lastOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return lastOrNullOperation(this.values, predicate);
    }

    reduce<U>(operation: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return reduceOperation(this.values, operation, initialValue);
    }

    groupBy<K>(selector: (value: T) => K): Map<K, T[]> {
        return groupByOperation(this.values, selector);
    }

    min<U>(selector?: (value: T) => U): T | undefined {
        return minOperation(this.values, selector);
    }

    max<U>(selector?: (value: T) => U): T | undefined {
        return maxOperation(this.values, selector);
    }

    some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return someOperation(this.values, predicate);
    }

    any(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return anyOperation(this.values, predicate);
    }

    none(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return noneOperation(this.values, predicate);
    }

    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return allOperation(this.values, predicate);
    }

    contains(element: T): boolean {
        return containsOperation(this.values, element);
    }

    containsAll(elements: T[]): boolean {
        return containsAllOperation(this.values, elements);
    }

    isEmpty(): boolean {
        return isEmptyOperation(this.values);
    }

    isNotEmpty(): boolean {
        return !isEmptyOperation(this.values);
    }

    join<U>(props?: JoinProps, selector?: (value: T) => U): string {
        return joinOperation(this.values, props, selector);
    }

    sum<U>(selector?: (value: T) => U): number {
        return sumOperation(this.values, selector);
    }

    count(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        return countOperation(this.values, predicate);
    }

    size(): number {
        return sizeOperation(this.values);
    }

    toArray(): T[] {
        return toArrayOperation(this.values);
    }
}
