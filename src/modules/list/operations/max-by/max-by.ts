export abstract class MaxBy {

    static execute = <T, U>(values: T[], callback: (value: T) => U): T | undefined => {
        if (values.length === 0) return undefined;
        else return values.reduce((previous, current) => (callback(previous) > callback(current)) ? previous : current);
    };

}
