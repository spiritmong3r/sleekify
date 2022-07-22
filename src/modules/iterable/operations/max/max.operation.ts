export abstract class MaxOperation {
    static execute = <T, U>(values: T[], selector?: (value: T) => U): T | undefined => {
        if (values.length === 0) return undefined;
        else if (!selector && values.some((it) => typeof it !== 'number')) throw Error('Type of array is not number');
        else
            return values.reduce((previous, current) => {
                const pickedPrevious = selector ? selector(previous) : previous;
                const pickedCurrent = selector ? selector(current) : current;
                return pickedPrevious > pickedCurrent ? previous : current;
            });
    };
}
