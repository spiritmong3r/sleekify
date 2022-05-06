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
export const when = <I, R>(input: I, statements: Statement<I, R>, defaultResult?: R): R | undefined => {
    for (let i = 0; i < statements.length; i = i + 2) {
        if (statements[i] === input) {
            // @ts-ignore => at this point `statements[i + 1]` can only be of type function
            return statements[i + 1]();
        }
    }

    return defaultResult;
};

type Statement<I, O> = Statement1<I, O> | Statement2<I, O> | Statement3<I, O> | Statement4<I, O> | Statement5<I, O>

type Statement1<I, O> = [
    value: I, execute: () => O,
]

type Statement2<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
]

type Statement3<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
]

type Statement4<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
]

type Statement5<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
]
