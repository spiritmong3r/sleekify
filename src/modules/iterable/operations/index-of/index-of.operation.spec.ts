import indexOfOperation from './index-of.operation';

describe('indexOfOperation', () => {
    it(`given an array of strings, returns the index of the matching element`, () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];
        const valuesToFind = '0';

        // WHEN
        const result = indexOfOperation(values, valuesToFind);

        // THEN
        const expected = 6;
        expect(result).toEqual(expected);
    });

    it(`given an array of strings and multiple matching elements, returns the index of the first matching element`, () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];
        const valuesToFind = '4';

        // WHEN
        const result = indexOfOperation(values, valuesToFind);

        // THEN
        const expected = 3;
        expect(result).toEqual(expected);
    });

    it(`given an empty array, returns -1`, () => {
        // GIVEN
        const values: any[] = [];
        const valuesToFind = undefined;

        // WHEN
        const result = indexOfOperation(values, valuesToFind);

        // THEN
        const expected = -1;
        expect(result).toEqual(expected);
    });

    it(`given an array of strings, returns -1 when the element doesn't exists`, () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];
        const valuesToFind = '11';

        // WHEN
        const result = indexOfOperation(values, valuesToFind);

        // THEN
        const expected = -1;
        expect(result).toEqual(expected);
    });
});
