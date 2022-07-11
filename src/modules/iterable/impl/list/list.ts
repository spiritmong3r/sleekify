import {AbstractList} from '../../abstract-list';
import {DistinctOperation} from '../../operations/distinct/distinct.operation';
import {DropLastOperation} from '../../operations/drop-last/drop-last.operation';
import {DropOperation} from '../../operations/drop/drop.operation';
import {FilterOperation} from '../../operations/filter/filter.operation';
import {FlatmapOperation} from '../../operations/flatmap/flatmap.operation';
import {FlattenOperation} from '../../operations/flatten/flatten.operation';
import {ForEachOperation} from '../../operations/for-each/for-each.operation';
import {MapOperation} from '../../operations/map/map.operation';
import {OnEachOperation} from '../../operations/on-each/on-each.operation';
import {ReverseOperation} from '../../operations/reverse/reverse.operation';
import {SortOperation} from '../../operations/sort/sort.operation';
import {TakeLastOperation} from '../../operations/take-last/take-last.operation';
import {TakeOperation} from '../../operations/take/take.operation';

/**
 * @author cleme_mo
 */
export class List<T> extends AbstractList<T> {

    constructor(value: T[] = []) {
        super(value);
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return new List(FilterOperation.execute(this.values, predicate));
    }

    onEach<U>(selector: (value: T, index: number, array: T[]) => void): List<T> {
        return new List(OnEachOperation.execute(this.values, selector));
    }

    forEach(selector: (value: T, index: number, array: T[]) => void): void {
        ForEachOperation.execute(this.values, selector);
    }

    map<U>(selector: (value: T, index: number, array: T[]) => U): List<U> {
        return new List(MapOperation.execute(this.values, selector));
    }

    flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> {
        return new List(FlatmapOperation.execute(this.values, selector));
    }

    flatten(depth: number = 1): List<T> {
        return new List(FlattenOperation.execute(this.values, depth));
    }

    reverse(): List<T> {
        return new List(ReverseOperation.execute(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    sort<U>(selector?: (value: T) => U): List<T> {
        return new List(SortOperation.execute(this.values, selector));
    }

    distinct<U>(selector?: (value: T) => U): List<T> {
        return new List(DistinctOperation.execute(this.values, selector));
    }

    take(n: number): List<T> {
        return new List(TakeOperation.execute(this.values, n));
    }

    takeLast(n: number): List<T> {
        return new List(TakeLastOperation.execute(this.values, n));
    }

    drop(n: number): List<T> {
        return new List(DropOperation.execute(this.values, n));
    }

    dropLast(n: number): List<T> {
        return new List(DropLastOperation.execute(this.values, n));
    }

}
