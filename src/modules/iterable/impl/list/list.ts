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
import indexOfOperation from '../../operations/index-of/index-of.operation';
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
import subListOperation from '../../operations/sub-list/sub-list.operation';
import sumOperation from '../../operations/sum/sum.operation';
import takeLastOperation from '../../operations/take-last/take-last.operation';
import takeOperation from '../../operations/take/take.operation';
import toArrayOperation from '../../operations/to-array/to-array.operation';

/**
 * @author cleme_mo
 */
export class List<T> implements Iterable<T> {

    protected values: T[];

    constructor(values: T[] = []) {
        this.values = values;
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

    /**
     * Create a new list with all elements matching the given predicate.
     *
     * @param predicate Predicate to apply.
     * @return a new {@link List}.
     */
    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return new List(filterOperation(this.values, predicate));
    }

    /**
     * Create a new list where a given action is applied on every elements, the action silently returns `this`.
     *
     * @param action Action to apply on each element.
     * @return a new {@link List}.
     */
    onEach<U>(action: (value: T, index: number, array: T[]) => void): List<T> {
        return new List(onEachOperation(this.values, action));
    }

    /**
     * Apply a given action on every elements of the list.
     *
     * @param action The action to apply.
     */
    forEach(action: (value: T, index: number, array: T[]) => void): void {
        forEachOperation(this.values, action);
    }

    /**
     * Create a new list where a given transformer is applied on every elements.
     *
     * @param transformer Transformer to apply.
     * @return a new {@link List}.
     */
    map<U>(transformer: (value: T, index: number, array: T[]) => U): List<U> {
        return new List(mapOperation(this.values, transformer));
    }

    /**
     * Create a new list, apply the given transformer and then flatten (1 level deep) the results.
     *
     * @param transformer
     * @return a new {@link List}.
     */
    flatMap<U, This = undefined>(transformer: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> {
        return new List(flatMapOperation(this.values, transformer));
    }

    /**
     * Create a new list flattened 1 level deep by default, if a depth is specified then apply it.
     *
     * @param depth Depth level to apply.
     * @return a new {@link List}.
     */
    flatten(depth: number = 1): List<T> {
        return new List(flattenOperation(this.values, depth));
    }

    /**
     * Create new list where all elements are reversed: first element become last, last become first and so on.
     *
     * @return a new {@link List}.
     */
    reverse(): List<T> {
        return new List(reverseOperation(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    /**
     * Create a new list where elements are sorted according to the selector if given.
     *
     * @param selector Selector to apply.
     * @return a new {@link List}.
     */
    sort<U>(selector?: (value: T) => U): List<T> {
        return new List(sortOperation(this.values, selector));
    }

    /**
     * Create a new list without any duplicates. If a predicate is given then only duplicates among the matching elements will be removed.
     *
     * @param selector Selector to apply.
     * @return a new {@link List}.
     */
    distinct<U>(selector?: (value: T) => U): List<T> {
        return new List(distinctOperation(this.values, selector));
    }

    /**
     * Create a new list with only the `n` first elements.
     *
     * @param n Number of elements to take.
     * @return a new {@link List}.
     */
    take(n: number): List<T> {
        return new List(takeOperation(this.values, n));
    }

    /**
     * Create a new list with only the `n` last elements.
     *
     * @param n Number of elements to take.
     * @return a new {@link List}.
     */
    takeLast(n: number): List<T> {
        return new List(takeLastOperation(this.values, n));
    }

    /**
     * Create a new list without the `n` first elements.
     *
     * @param n Number of elements to remove.
     * @return a new {@link List}.
     */
    drop(n: number): List<T> {
        return new List(dropOperation(this.values, n));
    }

    /**
     * Create a new list without the `n` last elements.
     *
     * @param n Number of elements to remove.
     * @return a new {@link List}.
     */
    dropLast(n: number): List<T> {
        return new List(dropLastOperation(this.values, n));
    }

    /**
     * Create a new list containing the elements between the given indexes.
     *
     * @param fromIndex Index at which extraction starts.
     * @param toIndex Index at which extraction ends.
     * @return a new {@link List}.
     */
    subList(fromIndex?: number, toIndex?: number): List<T> {
        return new List(subListOperation(this.values, fromIndex, toIndex));
    }

    /**
     * Get the element at the given index.
     *
     * @param index The index of the element.
     * @return The element or `undefined` if the index doesn't exists.
     */
    get(index: number): T {
        return getOperation(this.values, index);
    }

    /**
     * Get the first element matching the predicate.
     *
     * @param predicate The predicate to apply.
     * @return The element or `undefined` if no matching.
     */
    find(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return findOperation(this.values, predicate);
    }

    /**
     * Get the first element matching the predicate, throw an error if there's not matching.
     *
     * @param predicate The predicate to apply, optional.
     * @return The element.
     */
    first(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return firstOperation(this.values, predicate);
    }

    /**
     * Get the first element matching the predicate, alias for `find` function.
     *
     * @param predicate The predicate to apply, optional.
     * @return The element or `undefined` if no matching.
     */
    firstOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return firstOrNullOperation(this.values, predicate);
    }

    /**
     * Get the last element matching the predicate, throw an error if there's not matching.
     *
     * @param predicate The predicate to apply, optional.
     * @return The element.
     */
    last(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return lastOperation(this.values, predicate);
    }

    /**
     * Get the last element matching the predicate, or `undefined` if no matching.
     *
     * @param predicate The predicate to apply, optional.
     * @return The element or `undefined` if no matching.
     */
    lastOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return lastOrNullOperation(this.values, predicate);
    }

    /**
     * Get a value obtained after an operation (accumulator) is applied on every element of the List.
     *
     * @param operation The operation to apply.
     * @param initialValue Value to start from.
     * @return An objet of the same type as `initialValue`.
     */
    reduce<U>(operation: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return reduceOperation(this.values, operation, initialValue);
    }

    /**
     * Build a Map object where the key is provided by the given selector and value is an array of all the elements matching this key
     *
     * @param selector Selector to apply.
     * @return an objet `Map`.
     */
    groupBy<K>(selector: (value: T) => K): Map<K, T[]> {
        return groupByOperation(this.values, selector);
    }

    /**
     * Get the min value or object according to the given selector.
     *
     * If no selector, then just returns the min among all values. The array must consist of numbers only, otherwise an error is thrown.
     *
     * @param selector The selector to apply.
     * @return An element of the list or `undefined` if the list is empty.
     */
    min<U>(selector?: (value: T) => U): T | undefined {
        return minOperation(this.values, selector);
    }

    /**
     * Get the max value or object according to the given selector.
     *
     * If no selector, then just returns the max among all values. The array must consist of numbers only, otherwise an error is thrown.
     *
     * @param selector The selector to apply.
     * @return An element of the list or `undefined` if the list is empty.
     */
    max<U>(selector?: (value: T) => U): T | undefined {
        return maxOperation(this.values, selector);
    }

    /**
     * Check if there's at least one element matching the predicate.
     *
     * @param predicate The predicate to apply.
     * @return `true` if there's at least one matching, `false` otherwise.
     */
    some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return someOperation(this.values, predicate);
    }

    /**
     * Check if there's at least one element matching the predicate.
     *
     * Alias for `some` function.
     *
     * @param predicate The predicate to apply.
     * @return `true` if there's at least one matching, `false` otherwise.
     */
    any(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return anyOperation(this.values, predicate);
    }

    /**
     * Check if there's no element matching the predicate.
     *
     * @param predicate The predicate to apply.
     * @return `true` if no matching, `false` otherwise.
     */
    none(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return noneOperation(this.values, predicate);
    }

    /**
     * Check if all elements are matching the predicate.
     *
     * @param predicate The predicate to apply.
     * @return `true` if every element are matching, `false` otherwise.
     */
    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return allOperation(this.values, predicate);
    }

    /**
     * Check if there's at least one element matching the given entry.
     *
     * @param element
     * @return `true` if there's at least a matching, `false` otherwise.
     */
    contains(element: T): boolean {
        return containsOperation(this.values, element);
    }

    /**
     * Check if the given entries are presents in the list.
     *
     * @param elements
     * @return `true` if all entries matching, `false` otherwise.
     */
    containsAll(elements: T[]): boolean {
        return containsAllOperation(this.values, elements);
    }

    /**
     * Check if the list is empty or not.
     *
     * @return `true` if list is empty, `false` otherwise.
     */
    isEmpty(): boolean {
        return isEmptyOperation(this.values);
    }

    /**
     * Check if the list is empty or not.
     *
     * @return `true` if list contains at least an element, `false` otherwise.
     */
    isNotEmpty(): boolean {
        return !isEmptyOperation(this.values);
    }

    /**
     * Build a string resulting from converting each element of the list to a string and then concatenating them together.
     *
     * @param props Properties to apply, optional.
     * @param selector Selector to apply, optional.
     * @return a string.
     */
    join<U>(props?: JoinProps, selector?: (value: T) => U): string {
        return joinOperation(this.values, props, selector);
    }

    /**
     * Calculate the sum of the array according to the selector if given.
     *
     * If no selector is given, the list must be composed of numbers otherwise an error will be thrown.
     *
     * @param selector The selector to apply, optional.
     * @eturn a number.
     */
    sum<U>(selector?: (value: T) => U): number {
        return sumOperation(this.values, selector);
    }

    /**
     * Count the number of elements matching the given predicate. If no predicate then behaves just like `length`.
     *
     * @param predicate The predicate to apply, optional.
     * @eturn a number.
     */
    count(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        return countOperation(this.values, predicate);
    }

    /**
     * Find the first index at which a given element can be found in the array.
     *
     * @return the element index or `-1` if it doesn't exists.
     */
    indexOf(value: T): number {
        return indexOfOperation(this.values, value);
    }

    /**
     * Count the number of elements in the list.
     *
     * @return a number
     */
    size(): number {
        return sizeOperation(this.values);
    }

    /**
     * Get the array wrapped into the list.
     *
     * @return an array.
     */
    toArray(): T[] {
        return toArrayOperation(this.values);
    }

}
