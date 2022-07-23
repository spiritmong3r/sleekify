import { PersonMock } from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object';
import containsAllOperation from './contains-all.operation';
import resetAllMocks = jest.resetAllMocks;

describe('containsAllOperation', () => {
    afterEach(() => resetAllMocks());

    it('given an empty array, return false', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'object');

        // WHEN
        const result = containsAllOperation(values, []);

        // THEN
        expect(result).toBeTruthy();
        expect(object.object).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings and an array of values present in this array, return true', () => {
        // GIVEN
        const values = ['1', '3'];
        jest.spyOn(object, 'object')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = containsAllOperation(values, ['3']);

        // THEN
        expect(result).toBeTruthy();
        expect(object.object).toHaveBeenNthCalledWith(1, '1', '3');
        expect(object.object).toHaveBeenNthCalledWith(2, '3', '3');
        expect(object.object).toHaveBeenCalledTimes(2);
    });

    it('given an array of strings and an array of values not present in this array, return false', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'object')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => false);

        // WHEN
        const result = containsAllOperation(values, ['7']);

        // THEN
        expect(result).toBeFalsy();
        expect(object.object).toHaveBeenNthCalledWith(1, '1', '7');
        expect(object.object).toHaveBeenNthCalledWith(2, '2', '7');
        expect(object.object).toHaveBeenCalledTimes(2);
    });

    it('given an array of persons and an array of values present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo()];
        jest.spyOn(object, 'object').mockImplementationOnce(() => true);

        // WHEN
        const result = containsAllOperation(values, [PersonMock.ed()]);

        // THEN
        expect(result).toBeTruthy();
        expect(object.object).toHaveBeenNthCalledWith(1, PersonMock.ed(), PersonMock.ed());
        expect(object.object).toHaveBeenCalledTimes(1);
    });

    it('given an array of persons and an array of multiple same values present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.jo(), PersonMock.ed(), PersonMock.ed()];
        jest.spyOn(object, 'object')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = containsAllOperation(values, [PersonMock.ed()]);

        // THEN
        expect(result).toBeTruthy();
        expect(object.object).toHaveBeenNthCalledWith(1, PersonMock.jo(), PersonMock.ed());
        expect(object.object).toHaveBeenNthCalledWith(2, PersonMock.ed(), PersonMock.ed());
        expect(object.object).toHaveBeenCalledTimes(2);
    });
});
