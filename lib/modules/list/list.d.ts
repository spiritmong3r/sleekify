/**
 * @author cleme_mo
 */
export declare class List<T> {
    protected values: T[];
    constructor(...value: T[]);
    reset(values: T[]): List<T>;
    filter(predicate: (value: T, index: number, array: T[]) => boolean): List<T>;
    onEach(): List<T>;
    map<U>(callback: (value: T, index: number, array: T[]) => U): List<U>;
    flatMap<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | U[]): List<U>;
    flatten(depth?: number): List<T>;
    reverse(): List<T>;
    sortBy<U>(callback: (value: T) => U): List<T>;
    distinct(): List<T>;
    distinctBy(): List<T>;
    take(n: number): List<T>;
    takeLast(n: number): List<T>;
    drop(n: number): List<T>;
    dropLast(n: number): List<T>;
    find(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined;
    first(predicate?: (value: T, index: number, array: T[]) => boolean): T;
    firstOrNull(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined;
    last(predicate: (value: T, index: number, array: T[]) => boolean): T;
    lastOrNull(predicate: (value: T, index: number, array: T[]) => boolean): T | undefined;
    reduce<U>(callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    associateBy(): any;
    groupBy(): any;
    minBy<U>(callback: (value: T) => U): T | undefined;
    maxBy<U>(callback: (value: T) => U): T | undefined;
    some(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    any(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    none(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    all(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    contains(element: T): boolean;
    isEmpty(): boolean;
    joinTo(): string;
    sum(): number;
    sumBy(predicate?: (value: T, index: number, array: T[]) => boolean): number;
    count(predicate?: (value: T, index: number, array: T[]) => boolean): number;
    toArray(): T[];
}
