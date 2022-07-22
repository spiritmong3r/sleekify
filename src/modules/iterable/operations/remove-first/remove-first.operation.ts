export abstract class RemoveFirstOperation {
    static execute = <T>(values: T[]): void => {
        values.splice(0, 1);
    };
}
