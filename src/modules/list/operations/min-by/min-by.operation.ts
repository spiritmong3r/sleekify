export abstract class MinByOperation {

    static execute = <T, U>(values: T[], selector: (value: T) => U): T | undefined => {
        if (values.length === 0) return undefined;
        else return values.reduce((previous, current) => (selector(previous) < selector(current)) ? previous : current);
    };

}
