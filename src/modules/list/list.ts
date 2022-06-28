import {JoinProps} from './models/JoinProps';
import {AllOperation} from './operations/all/all.operation';
import {AnyOperation} from './operations/any/any.operation';
import {ContainsAllOperation} from './operations/contains-all/contains-all.operation';
import {ContainsOperation} from './operations/contains/contains.operation';
import {CountOperation} from './operations/count/count.operation';
import {DistinctOperation} from './operations/distinct/distinct.operation';
import {DropLastOperation} from './operations/drop-last/drop-last.operation';
import {DropOperation} from './operations/drop/drop.operation';
import {FilterOperation} from './operations/filter/filter.operation';
import {FindOperation} from './operations/find/find.operation';
import {FirstOrNullOperation} from './operations/first-or-null/first-or-null.operation';
import {FirstOperation} from './operations/first/first.operation';
import {FlatmapOperation} from './operations/flatmap/flatmap.operation';
import {FlattenOperation} from './operations/flatten/flatten.operation';
import {ForEachOperation} from './operations/for-each/for-each.operation';
import {GroupByOperation} from './operations/group-by/group-by.operation';
import {IsEmptyOperation} from './operations/is-empty/is-empty.operation';
import {JoinOperation} from './operations/join/join.operation';
import {LastOrNullOperation} from './operations/last-or-null/last-or-null.operation';
import {LastOperation} from './operations/last/last.operation';
import {MapOperation} from './operations/map/map.operation';
import {MaxOperation} from './operations/max/max.operation';
import {MinOperation} from './operations/min/min.operation';
import {NoneOperation} from './operations/none/none.operation';
import {OnEachOperation} from './operations/on-each/on-each.operation';
import {ReduceOperation} from './operations/reduce/reduce.operation';
import {ReverseOperation} from './operations/reverse/reverse.operation';
import {SizeOperation} from './operations/size/size.operation';
import {SomeOperation} from './operations/some/some.operation';
import {SortOperation} from './operations/sort/sort.operation';
import {SumOperation} from './operations/sum/sum.operation';
import {TakeLastOperation} from './operations/take-last/take-last.operation';
import {TakeOperation} from './operations/take/take.operation';
import {ToArrayOperation} from './operations/to-array/to-array.operation';

/**
 * @author cleme_mo
 */
export class List<T> implements Iterable<T> {

    protected values: T[];

    constructor(...value: T[]) {
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

    reset(values: T[]): List<T> {
        this.values = values;
        return this;
    }

    add(value: T): List<T> {
        this.values.push(value);
        return this;
    }

    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T> {
        return FilterOperation.execute(this.values, predicate);
    }

    onEach<U>(selector: (value: T, index: number, array: T[]) => void): List<T> {
        return OnEachOperation.execute(this.values, selector);
    }

    forEach(selector: (value: T, index: number, array: T[]) => void): void {
        ForEachOperation.execute(this.values, selector);
    }

    map<U>(selector: (value: T, index: number, array: T[]) => U): List<U> {
        return MapOperation.execute(this.values, selector);
    }

    flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U> {
        return FlatmapOperation.execute(this.values, selector);
    }

    flatten(depth: number = 1): List<T> {
        return FlattenOperation.execute(this.values, depth);
    }

    reverse(): List<T> {
        return ReverseOperation.execute(this.values);
    }

    // TODO to improve by adding asc/desc option, etc ...
    sort<U>(selector?: (value: T) => U): List<T> {
        return SortOperation.execute(this.values, selector);
    }

    distinct<U>(selector?: (value: T) => U): List<T> {
        return DistinctOperation.execute(this.values, selector);
    }

    take(n: number): List<T> {
        return TakeOperation.execute(this.values, n);
    }

    takeLast(n: number): List<T> {
        return TakeLastOperation.execute(this.values, n);
    }

    drop(n: number): List<T> {
        return DropOperation.execute(this.values, n);
    }

    dropLast(n: number): List<T> {
        return DropLastOperation.execute(this.values, n);
    }

    find(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return FindOperation.execute(this.values, predicate);
    }

    first(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return FirstOperation.execute(this.values, predicate);
    }

    firstOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return FirstOrNullOperation.execute(this.values, predicate);
    }

    last(predicate?: (value: T, index: number, array: T[]) => boolean): T {
        return LastOperation.execute(this.values, predicate);
    }

    lastOrNull(predicate?: (value: T, index: number, array: T[]) => boolean): T | undefined {
        return LastOrNullOperation.execute(this.values, predicate);
    }

    reduce<U>(operation: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        return ReduceOperation.execute(this.values, operation, initialValue);
    }

    groupBy<K>(selector: (value: T) => K): Map<K, T[]> {
        return GroupByOperation.execute(this.values, selector);
    }

    min<U>(selector?: (value: T) => U): T | undefined {
        return MinOperation.execute(this.values, selector);
    }

    max<U>(selector?: (value: T) => U): T | undefined {
        return MaxOperation.execute(this.values, selector);
    }

    some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return SomeOperation.execute(this.values, predicate);
    }

    any(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return AnyOperation.execute(this.values, predicate);
    }

    none(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return NoneOperation.execute(this.values, predicate);
    }

    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
        return AllOperation.execute(this.values, predicate);
    }

    contains(element: T): boolean {
        return ContainsOperation.execute(this.values, element);
    }

    containsAll(elements: T[]): boolean {
        return ContainsAllOperation.execute(this.values, elements);
    }

    isEmpty(): boolean {
        return IsEmptyOperation.execute(this.values);
    }

    isNotEmpty(): boolean {
        return !IsEmptyOperation.execute(this.values);
    }

    join<U>(props?: JoinProps, selector?: (value: T) => U): string {
        return JoinOperation.execute(this.values, props, selector);
    }

    sum<U>(selector?: (value: T) => U): number {
        return SumOperation.execute(this.values, selector);
    }

    count(predicate?: (value: T, index: number, array: T[]) => boolean): number {
        return CountOperation.execute(this.values, predicate);
    }

    size(): number {
        return SizeOperation.execute(this.values);
    }

    toArray(): T[] {
        return ToArrayOperation.execute(this.values);
    }

}
