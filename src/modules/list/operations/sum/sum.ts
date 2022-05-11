export abstract class Sum {

    static execute = <T>(values: T[]): number => {
        if (values.some(it => typeof it !== 'number')) throw Error('Type of array is not number');
        return values
            .map(it => Number(it))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    };

}
