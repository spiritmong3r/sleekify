import { PersonMock } from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object';
import groupByOperation from './group-by.operation';
import resetAllMocks = jest.resetAllMocks;

describe('groupByOperation', () => {
    afterEach(() => resetAllMocks());

    it('given an empty array, return an empty Map', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'object');

        // WHEN
        const result = groupByOperation(values, (it) => it);

        // THEN
        const expected = new Map();
        expect(result).toEqual(expected);
        expect(object.object).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings, return a Map of strings grouped by length', () => {
        // GIVEN
        const values = ['hello', 'i', 'am', 'groot'];
        jest.spyOn(object, 'object');

        // WHEN
        const result = groupByOperation(values, (it) => it.length);

        // THEN
        const expected = new Map([
            [1, ['i']],
            [2, ['am']],
            [5, ['hello', 'groot']],
        ]);
        expect(result).toEqual(expected);
        expect(object.object).toHaveBeenCalledTimes(0);
    });

    it('given an array of Persons, return a Map of Persons grouped by age', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo(), PersonMock.ed(), PersonMock.ted(), PersonMock.jane()];
        jest.spyOn(object, 'object');

        // WHEN
        const result = groupByOperation(values, (it) => it.age);

        // THEN
        const expected = new Map([
            [18, [PersonMock.bob(), PersonMock.ted()]],
            [19, [PersonMock.jo(), PersonMock.ed()]],
            [24, [PersonMock.jane()]],
        ]);
        expect(result).toEqual(expected);
        expect(object.object).toHaveBeenCalledTimes(0);
    });

    it('given an array of Persons, return a Map of Persons grouped by country', () => {
        // GIVEN
        const values = [PersonMock.bob(), PersonMock.jo()];
        jest.spyOn(object, 'object')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = groupByOperation(values, (it) => it.country);

        // THEN
        const expected = new Map([
            [{ name: 'US' }, [PersonMock.bob()]],
            [{ name: 'CA' }, [PersonMock.jo()]],
        ]);
        expect(result).toEqual(expected);
        expect(object.object).toHaveBeenNthCalledWith(1, { name: 'US' }, { name: 'US' });
        expect(object.object).toHaveBeenNthCalledWith(2, { name: 'US' }, { name: 'CA' });
        expect(object.object).toHaveBeenNthCalledWith(3, { name: 'US' }, { name: 'CA' });
        expect(object.object).toHaveBeenNthCalledWith(4, { name: 'CA' }, { name: 'CA' });
        expect(object.object).toHaveBeenCalledTimes(4);
    });
});
