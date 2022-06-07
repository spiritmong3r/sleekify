export abstract class SumOperation {

    static execute = <T, U>(values: T[], callback?: (value: T) => U): number => {
        const valuesFound = (callback) ? values.map(callback) : values;

        if (valuesFound.some(it => typeof it !== 'number')) throw Error('Type of array is not number');
        else return valuesFound
            .map(it => Number(it))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    };

}
