export abstract class ReverseOperation {

    static execute = <T>(values: T[]): T[] => [...values].reverse();

}
