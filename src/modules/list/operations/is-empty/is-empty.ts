export abstract class IsEmpty {

    static execute = <T>(values: T[]): boolean => values.length === 0;

}
