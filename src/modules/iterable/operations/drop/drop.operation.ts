export abstract class DropOperation {
    static execute = <T>(values: T[], n: number): T[] => values.slice(n, values.length);
}
