import {Any} from './operations/any/any';
import {Count} from './operations/count/count';
import {Distinct} from './operations/distinct/distinct';
import {Filter} from './operations/filter/filter';
import {Flatmap} from './operations/flatmap/flatmap';
import {Flatten} from './operations/flatten/flatten';
import {Map} from './operations/map/map';
import {MaxBy} from './operations/max-by/max-by';
import {None} from './operations/none/none';
import {Reduce} from './operations/reduce/reduce';
import {Some} from './operations/some/some';
import {SortBy} from './operations/sort-by/sort-by';
import {ToArray} from './operations/to-array/to-array';

/**
 * @author cleme_mo
 */
export class List<T> {

    protected values: T[];

    constructor(...value: T[]) {
        this.values = value;
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return Filter.execute(this.values, predicate);
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

    reduce<U>(callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return Reduce.execute(this.values, callback, initialValue);
    }

    maxBy<U>(callback: (value: T) => U): T | undefined {
        return MaxBy.execute(this.values, callback);
    }

    // TODO: to improve by adding asc/desc option, etc ...
    sortBy<U>(callback: (value: T) => U): List<T> {
        return SortBy.execute(this.values, callback);
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

    count(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        return Count.execute(this.values, predicate);
    }

    distinct(): List<T> {
        return Distinct.execute(this.values);
    }

    toArray(): T[] {
        return ToArray.execute(this.values);
    }

}
