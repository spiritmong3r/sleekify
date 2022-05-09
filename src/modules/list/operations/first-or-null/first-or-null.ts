export abstract class FirstOrNull {

    static execute = <T>(values: T[], predicate: (value: T, index: number, array: T[]) => unknown): T | undefined => values.find(predicate);

}
