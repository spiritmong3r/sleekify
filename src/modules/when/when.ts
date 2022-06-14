/**
 * Given an expression or value, check if there's a matching input and then execute the associated code.
 * If no matching input, then execute the default value if there's one, otherwise return `undefined`
 *
 * Usage :
 * ```
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
 * @param input Expression or value tested.
 * @param statements Array of pairs of value and function.
 * @return An object of type `R` or `undefined`.
 */
export const when = <I, R>(input: I, statements: Statement<I, R>): R | undefined => {
    for (let i = 0; i < statements.length; i = i + 2) {
        if (statements[i] === input) {
            // @ts-ignore => at this point `statements[i + 1]` can only be of type function
            return statements[i + 1]();
        }
    }

    // If the last two elements are functions, that means the last element contains the default value to return
    if (typeof statements[statements.length - 2] === 'function' && typeof statements[statements.length - 1] === 'function') {
        // @ts-ignore => at this point `statements[statements.length - 1]` can only be of type function
        return statements[statements.length - 1]();
    }
};
