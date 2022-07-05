export abstract class MapOperation {

    static execute = <T, U>(values: T[], selector: (value: T, index: number, array: T[]) => U): U[] => values.map(selector);

}
