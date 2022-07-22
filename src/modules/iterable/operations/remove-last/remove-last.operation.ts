export abstract class RemoveLastOperation {
    static execute = <T>(values: T[]): void => {
        values.splice(values.length - 1, 1);
    };
}
