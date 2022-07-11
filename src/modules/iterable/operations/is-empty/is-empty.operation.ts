export abstract class IsEmptyOperation {

    static execute = <T>(values: T[]): boolean => values.length === 0;

}
