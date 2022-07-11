import {AbstractList} from '../../abstract-list';
import {DistinctOperation} from '../../operations/distinct/distinct.operation';
import {DropLastOperation} from '../../operations/drop-last/drop-last.operation';
import {DropOperation} from '../../operations/drop/drop.operation';
import {FilterOperation} from '../../operations/filter/filter.operation';
import {FlatmapOperation} from '../../operations/flatmap/flatmap.operation';
import {FlattenOperation} from '../../operations/flatten/flatten.operation';
import {MapOperation} from '../../operations/map/map.operation';
import {OnEachOperation} from '../../operations/on-each/on-each.operation';
import {ReverseOperation} from '../../operations/reverse/reverse.operation';
import {SortOperation} from '../../operations/sort/sort.operation';
import {TakeLastOperation} from '../../operations/take-last/take-last.operation';
import {TakeOperation} from '../../operations/take/take.operation';

/**
 * @author cleme_mo
 */
export class MutableList<T> extends AbstractList<T> {

    constructor(value: T[] = []) {
        super(value);
    }

    add(value: T): MutableList<T> {
        this.values.push(value);
        return this;
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): MutableList<T> {
        return new MutableList(FilterOperation.execute(this.values, predicate));
    }

    onEach<U>(selector: (value: T, index: number, array: T[]) => void): MutableList<T> {
        return new MutableList(OnEachOperation.execute(this.values, selector));
    }

    map<U>(selector: (value: T, index: number, array: T[]) => U): MutableList<U> {
        return new MutableList(MapOperation.execute(this.values, selector));
    }

    flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): MutableList<U> {
        return new MutableList(FlatmapOperation.execute(this.values, selector));
    }

    flatten(depth: number = 1): MutableList<T> {
        return new MutableList(FlattenOperation.execute(this.values, depth));
    }

    reverse(): MutableList<T> {
        return new MutableList(ReverseOperation.execute(this.values));
    }

    // TODO to improve by adding asc/desc option, etc ...
    sort<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(SortOperation.execute(this.values, selector));
    }

    distinct<U>(selector?: (value: T) => U): MutableList<T> {
        return new MutableList(DistinctOperation.execute(this.values, selector));
    }

    take(n: number): MutableList<T> {
        return new MutableList(TakeOperation.execute(this.values, n));
    }

    takeLast(n: number): MutableList<T> {
        return new MutableList(TakeLastOperation.execute(this.values, n));
    }

    drop(n: number): MutableList<T> {
        return new MutableList(DropOperation.execute(this.values, n));
    }

    dropLast(n: number): MutableList<T> {
        return new MutableList(DropLastOperation.execute(this.values, n));
    }

}
