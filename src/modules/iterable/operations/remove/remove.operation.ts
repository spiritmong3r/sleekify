export abstract class RemoveOperation {

    static execute = <T>(values: T[], index: number): void => {
        values.splice(index, 1);
    };

}
