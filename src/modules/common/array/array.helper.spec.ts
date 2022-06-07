import {List} from '../../list/list';
import {ArrayHelper} from './array.helper';

describe('ArrayHelper', () => {

    describe('transformToArray', () => {

        it('given an array of numbers, return the same array', () => {
            // GIVEN
            const data = [1, 2, 3, 4, 5];

            // WHEN
            const result = ArrayHelper.transformToArray(data);

            // THEN
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('given a number, return an array containing this number', () => {
            // GIVEN
            const data = 1;

            // WHEN
            const result = ArrayHelper.transformToArray(data);

            // THEN
            expect(result).toEqual([1]);
        });

        it('given a List containing numbers, return an array of the same numbers', () => {
            // GIVEN
            const data = new List(1, 2, 3, 4, 5);

            // WHEN
            const result = ArrayHelper.transformToArray(data);

            // THEN
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('given a List containing only a null value, return an empty array', () => {
            // GIVEN
            const data = null;

            // WHEN
            const result = ArrayHelper.transformToArray(data);

            // THEN
            expect(result).toEqual([]);
        });

        it('given a List containing only an undefined value, return an empty array', () => {
            // GIVEN
            const data = undefined;

            // WHEN
            const result = ArrayHelper.transformToArray(data);

            // THEN
            expect(result).toEqual([]);
        });

    });

});
