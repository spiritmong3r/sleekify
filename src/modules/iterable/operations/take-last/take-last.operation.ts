export abstract class TakeLastOperation {

    static execute = <T>(values: T[], n: number): T[] => values.slice(values.length - n, values.length);

}
