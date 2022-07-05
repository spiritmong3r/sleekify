import {JoinProps} from './list/models/JoinProps';
import {AllOperation} from './list/operations/all/all.operation';
import {AnyOperation} from './list/operations/any/any.operation';
import {ContainsAllOperation} from './list/operations/contains-all/contains-all.operation';
import {ContainsOperation} from './list/operations/contains/contains.operation';
import {CountOperation} from './list/operations/count/count.operation';
import {FindOperation} from './list/operations/find/find.operation';
import {FirstOrNullOperation} from './list/operations/first-or-null/first-or-null.operation';
import {FirstOperation} from './list/operations/first/first.operation';
import {ForEachOperation} from './list/operations/for-each/for-each.operation';
import {GroupByOperation} from './list/operations/group-by/group-by.operation';
import {IsEmptyOperation} from './list/operations/is-empty/is-empty.operation';
import {JoinOperation} from './list/operations/join/join.operation';
import {LastOrNullOperation} from './list/operations/last-or-null/last-or-null.operation';
import {LastOperation} from './list/operations/last/last.operation';
import {MaxOperation} from './list/operations/max/max.operation';
import {MinOperation} from './list/operations/min/min.operation';
import {NoneOperation} from './list/operations/none/none.operation';
import {ReduceOperation} from './list/operations/reduce/reduce.operation';
import {SizeOperation} from './list/operations/size/size.operation';
import {SomeOperation} from './list/operations/some/some.operation';
import {SumOperation} from './list/operations/sum/sum.operation';
import {ToArrayOperation} from './list/operations/to-array/to-array.operation';

export abstract class AbstractList<T> implements Iterable<T> {

    protected values: T[];

    protected constructor(value: T[]) {
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

    reset(values: T[]): AbstractList<T> {
        this.values = values;
        return this;
    }

    abstract filter(predicate: (value: T, index: number, array: T[]) => boolean): AbstractList<T>

    abstract onEach<U>(selector: (value: T, index: number, array: T[]) => void): AbstractList<T>

    forEach(selector: (value: T, index: number, array: T[]) => void): void {
        ForEachOperation.execute(this.values, selector);
    }

    abstract map<U>(selector: (value: T, index: number, array: T[]) => U): AbstractList<U>

    abstract flatMap<U, This = undefined>(selector: (this: This, value: T, index: number, array: T[]) => U | U[]): AbstractList<U>

    abstract flatten(depth?: number): AbstractList<T>

    abstract reverse(): AbstractList<T>

    // TODO to improve by adding asc/desc option, etc ...
    abstract sort<U>(selector?: (value: T) => U): AbstractList<T>

    abstract distinct<U>(selector?: (value: T) => U): AbstractList<T>

    abstract take(n: number): AbstractList<T>

    abstract takeLast(n: number): AbstractList<T>

    abstract drop(n: number): AbstractList<T>

    abstract dropLast(n: number): AbstractList<T>

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
