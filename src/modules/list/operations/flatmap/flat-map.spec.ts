import {PersonMock} from '../../../../test/mocks/person.mock';
import {MultidimensionalArrayHelper} from '../../../common/multidimensional-array.helper';
import {List} from '../../list';
import {Flatmap} from './flatmap';

describe('Flatmap', () => {

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([]);
    });

    it('given an array of numbers, return the same List of numbers', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it);

        // THEN
        const expected = new List(1, 2, 3, 4, 5);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    });

    it('given a bidimensional array of numbers, return a flattened List of numbers', () => {
        // GIVEN
        const values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it);

        // THEN
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[1, 2, 3, 4, 5], [6, 7, 8]]);
    });

    it('given a bidimensional array of numbers, return a flattened List of strings', () => {
        // GIVEN
        const values = [[1, 2, 3, 4, 5], [6, 7, 8]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue(['1', '2', '3', '4', '5', '6', '7', '8']);

        // WHEN
        const result = Flatmap.execute(values, (it) => it.map((value) => value.toString()));

        // THEN
        const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([['1', '2', '3', '4', '5'], ['6', '7', '8']]);
    });

    it('given a tridimensional array of numbers, return a List of bidimensional array of strings', () => {
        // GIVEN
        const values = [[[1, 2, 3, 4, 5], [6, 7, 8]]];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([['1', '2', '3', '4', '5'], ['6', '7', '8']]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it.map((value1) => value1.map((value2) => value2.toString())));

        // THEN
        const expected = new List(['1', '2', '3', '4', '5'], ['6', '7', '8']);
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([[['1', '2', '3', '4', '5'], ['6', '7', '8']]]);
    });

    it('given an array of List of numbers, return a List of strings', () => {
        // GIVEN
        const values = [new List(1, 2, 3, 4, 5), new List(6, 7, 8)];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue(['1', '2', '3', '4', '5', '6', '7', '8']);

        // WHEN
        const result = Flatmap.execute(values, (it) => it.map((value) => value.toString()));

        // THEN
        const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new List('1', '2', '3', '4', '5'), new List('6', '7', '8')]);
    });

    it('given an array of bidimensional List of numbers, return a bidimensional List of strings', () => {
        // GIVEN
        const values = [new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8))];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([new List('1', '2', '3', '4', '5'), new List('6', '7', '8')]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it.map((value1) => value1.map((value2) => value2.toString())));

        // THEN
        const expected = new List(new List('1', '2', '3', '4', '5'), new List('6', '7', '8'));
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new List(new List('1', '2', '3', '4', '5'), new List('6', '7', '8'))]);
    });

    it('given an array of bidimensional List of persons, return a bidimensional List of firstnames', () => {
        // GIVEN
        const values = [new List(new List(PersonMock.ed(), PersonMock.bob()), new List(PersonMock.jo(), PersonMock.ted()))];
        MultidimensionalArrayHelper.flatDeep = jest.fn().mockReturnValue([new List('Ed', 'Bob'), new List('Jo', 'Ted')]);

        // WHEN
        const result = Flatmap.execute(values, (it) => it.map((value1) => value1.map((value2) => value2.firstName)));

        // THEN
        const expected = new List(new List('Ed', 'Bob'), new List('Jo', 'Ted'));
        expect(result).toEqual(expected);
        expect(MultidimensionalArrayHelper.flatDeep).toHaveBeenCalledWith([new List(new List('Ed', 'Bob'), new List('Jo', 'Ted'))]);
    });

});
