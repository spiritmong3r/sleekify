export abstract class None {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean => {
        return !values.some(predicate);
    };

}
