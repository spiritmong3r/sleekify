import addOperation from '../../operations/add/add.operation';
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
    constructor(value: T[] = []) {
        super(value);
    }

    add(value: T): MutableList<T> {
        addOperation(this.values, value);
        return this;
    }

    remove(element: T): MutableList<T> {
        removeOperation(this.values, element);
        return this;
    }

    removeAt(index: number): MutableList<T> {
        removeAtOperation(this.values, index);
        return this;
    }

    removeFirst(): MutableList<T> {
        removeFirstOperation(this.values);
        return this;
    }

    removeLast(): MutableList<T> {
        removeLastOperation(this.values);
        return this;
    }

    /**
     * Remove all elements from the array matching the predicate.
     *
     * @param predicate Predicate to apply.
     * @return `this`, a {@link MutableList}.
     */
    removeAll(predicate: (value: T, index: number, array: T[]) => boolean): MutableList<T>;
    /**
     * Remove all occurences of the given element from the array.
     *
     * @param element Element(s) to remove.
     * @return `this`, a {@link MutableList}.
     */
    removeAll(element: T): MutableList<T>;
    removeAll(arg: T | ((value: T, index: number, array: T[]) => boolean)): MutableList<T> {
        removeAllOperation(this.values, arg);
        return this;
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): MutableList<T> {
        return new MutableList(filterOperation(this.values, predicate));
    }

    onEach<U>(selector: (value: T, index: number, array: T[]) => void): MutableList<T> {
        return new MutableList(onEachOperation(this.values, selector));
    }

    map<U>(selector: (value: T, index: number, array: T[]) => U): MutableList<U> {
        return new MutableList(mapOperation(this.values, selector));
    }

    flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): MutableList<U> {
        return new MutableList(flatMapOperation(this.values, selector));
    }

    flatten(depth: number = 1): MutableList<T> {
        return new MutableList(flattenOperation(this.values, depth));
    }

    reverse(): MutableList<T> {
        return new MutableList(reverseOperation(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    sort<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(sortOperation(this.values, selector));
    }

    distinct<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(distinctOperation(this.values, selector));
    }

    take(n: number): MutableList<T> {
        return new MutableList(takeOperation(this.values, n));
    }

    takeLast(n: number): MutableList<T> {
        return new MutableList(takeLastOperation(this.values, n));
    }

    drop(n: number): MutableList<T> {
        return new MutableList(dropOperation(this.values, n));
    }

    dropLast(n: number): MutableList<T> {
        return new MutableList(dropLastOperation(this.values, n));
    }
}
