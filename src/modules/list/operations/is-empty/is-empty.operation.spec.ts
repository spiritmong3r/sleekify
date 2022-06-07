import {IsEmptyOperation} from './is-empty.operation';

describe('IsEmptyOperation', () => {

    it('given an array of strings, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = IsEmptyOperation.execute(values);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an empty array, return true', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = IsEmptyOperation.execute(values);

        // THEN
        expect(result).toBeTruthy();
    });

});
