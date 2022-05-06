export abstract class Any {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean => values.some(predicate);

}
