export abstract class DropLastOperation {
    static execute = <T>(values: T[], n: number): T[] => values.slice(0, values.length - n);
}
