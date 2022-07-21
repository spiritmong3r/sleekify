export abstract class GetOperation {

    static execute = <T>(values: T[], index: number): T => values[index];

}
