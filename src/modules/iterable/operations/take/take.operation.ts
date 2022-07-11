export abstract class TakeOperation {

    static execute = <T>(values: T[], n: number): T[] => values.slice(0, n);

}
