import { Statement } from './models/statements';

/**
 * Given an expression or value, check if there's a matching input and then execute the associated code.
 * If no matching input, then execute the default value if there's one, otherwise return `undefined`
 *
 * Usage :
 * ```js
 *  const input = 5%2;
 *  const result = when(input, [
 *     1, () => 'right !',
 *     2, () => 'wrong !',
 *     3, () => {
 *         const label = 'wrong'
 *         return `${label} !`
 *     },
 *     () => 'No matching'  // <== this is the default value, which is optional
 *  ]);
 *
 * ```
 *
 * @param statements Array of pairs of value and function.
 * @return An object of type `R` or `undefined`.
 */
export function when<I extends boolean, R>(statements: Statement<I, R>): R | undefined;
export function when<I, R>(input: I, statements: Statement<I, R>): R | undefined;
export function when<I, R>(arg1: I | Statement<I, R>, arg2?: Statement<I, R>): R | undefined {
    let statements: Statement<I, R>;
    let isStatementToExecute: (index: number) => boolean;

    if (arg2) {
        const input = arg1 as I;
        statements = arg2;
        isStatementToExecute = (index: number) =>
            (Array.isArray(statements[index]) && (statements[index] as []).some((it) => it === input)) || statements[index] === input;
    } else {
        statements = arg1 as Statement<I, R>;
        isStatementToExecute = (index: number) => (typeof statements[index] == 'boolean' ? !!statements[index] : false);
    }

    for (let index = 0; index < statements.length; index = index + 2) {
        if (isStatementToExecute(index)) {
            // @ts-ignore => at this point `statements[i + 1]` can only be a function
            return statements[index + 1]();
        }
    }

    // If the last two elements are functions, that means the last element contains the default value to return
    if (typeof statements[statements.length - 2] === 'function' && typeof statements[statements.length - 1] === 'function') {
        // @ts-ignore => at this point `statements[statements.length - 1]` can only be a function
        return statements[statements.length - 1]();
    }

    return undefined;
}
