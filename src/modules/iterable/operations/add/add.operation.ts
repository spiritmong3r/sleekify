export abstract class AddOperation {
    static execute = <T>(values: T[], value: T): void => {
        values.push(value);
    };
}
