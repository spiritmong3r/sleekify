import {PersonMock} from '../../../../test/mocks/person.mock';
import {ContainsOperation} from './contains.operation';

describe('ContainsOperation', () => {

    it('given an empty array, return false', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = ContainsOperation.execute(values, {});

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of strings and a value present in this array, return true', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = ContainsOperation.execute(values, '3');

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of strings and a value not present in this array, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = ContainsOperation.execute(values, '7');

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of persons and a person present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = ContainsOperation.execute(values, PersonMock.ed());

        // THEN
        expect(result).toBeTruthy();
    });

});
