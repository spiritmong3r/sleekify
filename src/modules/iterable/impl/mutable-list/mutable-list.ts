import addOperation from '../../operations/add/add.operation';
import clearOperation from '../../operations/clear/clear.operation';
import distinctOperation from '../../operations/distinct/distinct.operation';
import dropLastOperation from '../../operations/drop-last/drop-last.operation';
import dropOperation from '../../operations/drop/drop.operation';
import filterOperation from '../../operations/filter/filter.operation';
import flatMapOperation from '../../operations/flatmap/flat-map.operation';
import flattenOperation from '../../operations/flatten/flatten.operation';
import mapOperation from '../../operations/map/map.operation';
import onEachOperation from '../../operations/on-each/on-each.operation';
import removeAllOperation from '../../operations/remove-all/remove-all.operation';
import removeAtOperation from '../../operations/remove-at/remove-at.operation';
import removeFirstOperation from '../../operations/remove-first/remove-first.operation';
import removeLastOperation from '../../operations/remove-last/remove-last.operation';
import removeOperation from '../../operations/remove/remove.operation';
import reverseOperation from '../../operations/reverse/reverse.operation';
import sortOperation from '../../operations/sort/sort.operation';
import takeLastOperation from '../../operations/take-last/take-last.operation';
import takeOperation from '../../operations/take/take.operation';
import {List} from '../list/list';

/**
 * @author cleme_mo
 */
export class MutableList<T> extends List<T> {

    constructor(values: T[] = []) {
        super(values);
    }

    /**
     * Add one or more elements to the end of the current list.
     *
     * @param elements The elements to add.
     * @return `this`, a {@link MutableList}.
     */
    add(...elements: T[]): MutableList<T> {
        addOperation(this.values, elements);
        return this;
    }

    /**
     * Remove the first matching element from the current list.
     *
     * @param element The element to remove.
     * @return `this`, a {@link MutableList}.
     */
    remove(element: T): MutableList<T> {
        removeOperation(this.values, element);
        return this;
    }

    /**
     * Remove the element at the given position from the current list.
     *
     * @param index Index of the element.
     * @return `this`, a {@link MutableList}.
     */
    removeAt(index: number): MutableList<T> {
        removeAtOperation(this.values, index);
        return this;
    }

    /**
     * Remove the first element from the current list.
     *
     * @return `this`, a {@link MutableList}.
     */
    removeFirst(): MutableList<T> {
        removeFirstOperation(this.values);
        return this;
    }

    /**
     * Remove the last element from the current list.
     *
     * @return `this`, a {@link MutableList}.
     */
    removeLast(): MutableList<T> {
        removeLastOperation(this.values);
        return this;
    }

    /**
     * Remove all elements matching the predicate from current list.
     *
     * @param predicate Predicate to apply.
     * @return `this`, a {@link MutableList}.
     */
    removeAll(predicate: (value: T, index: number, array: T[]) => boolean): MutableList<T>;

    /**
     * Remove all occurences of the given element from the current list.
     *
     * @param element Element(s) to remove.
     * @return `this`, a {@link MutableList}.
     */
    removeAll(element: T): MutableList<T>;
    removeAll(arg: T | ((value: T, index: number, array: T[]) => boolean)): MutableList<T> {
        removeAllOperation(this.values, arg);
        return this;
    }

    /**
     * Create a new list with all elements matching the given predicate.
     *
     * @param predicate Predicate to apply.
     * @return a new {@link MutableList}.
     */
    filter(predicate: (value: T, index: number, array: T[]) => boolean): MutableList<T> {
        return new MutableList(filterOperation(this.values, predicate));
    }

    /**
     * Create a new list where a given action is applied on every elements, the action silently returns `this`.
     *
     * @param action Action to apply on each element.
     * @return a new {@link MutableList}.
     */
    onEach<U>(action: (value: T, index: number, array: T[]) => void): MutableList<T> {
        return new MutableList(onEachOperation(this.values, action));
    }

    /**
     * Create a new list where a given transformer is applied on every elements.
     *
     * @param transformer Transformer to apply.
     * @return a new {@link MutableList}.
     */
    map<U>(transformer: (value: T, index: number, array: T[]) => U): MutableList<U> {
        return new MutableList(mapOperation(this.values, transformer));
    }

    /**
     * Create a new list, apply the given transformer and then flatten (1 level deep) the results.
     *
     * @param transformer
     * @return a new {@link MutableList}.
     */
    flatMap<U, This = undefined>(transformer: (this: This, value: T, index: number, array: T[]) => U | U[]): MutableList<U> {
        return new MutableList(flatMapOperation(this.values, transformer));
    }

    /**
     * Create a new list flattened 1 level deep by default, if a depth is specified then apply it.
     *
     * @param depth Depth level to apply.
     * @return a new {@link MutableList}.
     */
    flatten(depth: number = 1): MutableList<T> {
        return new MutableList(flattenOperation(this.values, depth));
    }

    /**
     * Create new list where all elements are reversed: first element become last, last become first and so on.
     *
     * @return a new {@link MutableList}.
     */
    reverse(): MutableList<T> {
        return new MutableList(reverseOperation(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    /**
     * Create a new list where elements are sorted according to the selector if given.
     *
     * @param selector Selector to apply.
     * @return a new {@link MutableList}.
     */
    sort<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(sortOperation(this.values, selector));
    }

    /**
     * Create a new list without any duplicates. If a predicate is given then only duplicates among the matching elements will be removed.
     *
     * @param selector Selector to apply.
     * @return a new {@link MutableList}.
     */
    distinct<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(distinctOperation(this.values, selector));
    }

    /**
     * Create a new list with only the `n` first elements.
     *
     * @param n Number of elements to take.
     * @return a new {@link MutableList}.
     */
    take(n: number): MutableList<T> {
        return new MutableList(takeOperation(this.values, n));
    }

    /**
     * Create a new list with only the `n` last elements.
     *
     * @param n Number of elements to take.
     * @return a new {@link MutableList}.
     */
    takeLast(n: number): MutableList<T> {
        return new MutableList(takeLastOperation(this.values, n));
    }

    /**
     * Create a new list without the `n` first elements.
     *
     * @param n Number of elements to remove.
     * @return a new {@link MutableList}.
     */
    drop(n: number): MutableList<T> {
        return new MutableList(dropOperation(this.values, n));
    }

    /**
     * Create a new list without the `n` last elements.
     *
     * @param n Number of elements to remove.
     * @return a new {@link MutableList}.
     */
    dropLast(n: number): MutableList<T> {
        return new MutableList(dropLastOperation(this.values, n));
    }

    /**
     * Remove all elements from the current list.
     *
     * @return `this`, a {@link MutableList}.
     */
    clear(): MutableList<T> {
        clearOperation(this.values);
        return this;
    }

}
