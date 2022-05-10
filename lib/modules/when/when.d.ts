/**
 * Given an expression or value, check if there's a matching statement and then execute the associated code.
 *
 * Usage :
 * ```
 *  const value = 5%2;
 *  const result = when(value, [
 *     1, () => 'right !',
 *     2, () => 'wrong !',
 *     3, () => {
 *         const label = 'wrong'
 *         return `${label} !`
 *     }
 *  ], 'No matching');
 *
 * ```
 *
 * @param input Expression or value tested.
 * @param statements Array of pairs of value and function.
 * @param defaultResult The default value to return if no matching found.
 * @return An object of type `R`.
 */
export declare const when: <I, R>(input: I, statements: Statement<I, R>, defaultResult?: R | undefined) => R | undefined;
declare type Statement<I, O> = Statement1<I, O> | Statement2<I, O> | Statement3<I, O> | Statement4<I, O> | Statement5<I, O>;
declare type Statement1<I, O> = [
    value: I,
    execute: () => O
];
declare type Statement2<I, O> = [
    value: I,
    execute: () => O,
    value: I,
    execute: () => O
];
declare type Statement3<I, O> = [
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O
];
declare type Statement4<I, O> = [
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O
];
declare type Statement5<I, O> = [
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O,
    value: I,
    execute: () => O
];
export {};
