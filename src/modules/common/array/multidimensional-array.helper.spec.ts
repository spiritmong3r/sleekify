import {PersonMock} from '../../../test/mocks/person.mock';
import {MultidimensionalArrayHelper} from './multidimensional-array.helper';

describe('MultidimensionalArrayHelper', () => {

    describe('flatDeep', () => {

        it('given an empty array, return an empty array', () => {
            // GIVEN
            const array: any[] = [];

            // WHEN
            const result = MultidimensionalArrayHelper.flatDeep(array);

            // THEN
            const expected = JSON.stringify([]);
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given an array of numbers, return the same array of numbers', () => {
            // GIVEN
            const array = [1, 2, 3, 4, 5];

            // WHEN
            const result = MultidimensionalArrayHelper.flatDeep(array);

            // THEN
            const expected = JSON.stringify([1, 2, 3, 4, 5]);
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a bidimensionnal array of numbers, return a flattened array', () => {
            // GIVEN
            const array = [[1, 2, 3, 4, 5], [6, 7, 8]];

            // WHEN
            const result = MultidimensionalArrayHelper.flatDeep(array);

            // THEN
            const expected = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]);
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a tridimensionnal array of numbers, return a bidimensionnal array', () => {
            // GIVEN
            const array = [[[1, 2, 3, 4, 5]], [[6, 7, 8]]];

            // WHEN
            const result = MultidimensionalArrayHelper.flatDeep(array);

            // THEN
            const expected = JSON.stringify([[1, 2, 3, 4, 5], [6, 7, 8]]);
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a tridimensionnal array of numbers, return a flatten array', () => {
            // GIVEN
            const array = [[[1, 2, 3, 4, 5]], [[6, 7, 8], [9, 10, 11]]];

            // WHEN
            const result = MultidimensionalArrayHelper.flatDeep(array, 2);

            // THEN
            const expected = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const values = [bob, jo, jane];

            // WHEN
            MultidimensionalArrayHelper.flatDeep(values, 2);

            // THEN
            expect(values.length).toEqual(3);
            expect(values[0] === bob).toBeTruthy();
            expect(values[1] === jo).toBeTruthy();
            expect(values[2] === jane).toBeTruthy();
        });

    });

});
