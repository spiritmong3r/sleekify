export abstract class SumOperation {

    static execute = <T, U>(values: T[], selector?: (value: T) => U): number => {
        const valuesFound = (selector) ? values.map(selector) : values;

        if (valuesFound.some(it => typeof it !== 'number')) throw Error('Type of array is not number');
        else return valuesFound
            .map(it => Number(it))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    };

}
