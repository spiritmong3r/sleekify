import {IsEmpty} from './is-empty';

describe('IsEmpty', () => {

    it('given an array of strings, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = IsEmpty.execute(values);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an empty array, return true', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = IsEmpty.execute(values);

        // THEN
        expect(result).toBeTruthy();
    });

});
