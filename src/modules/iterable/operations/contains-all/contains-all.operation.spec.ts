import { PersonMock } from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object/deep-equal';
import { ContainsAllOperation } from './contains-all.operation';
import resetAllMocks = jest.resetAllMocks;

describe('ContainsAllOperation', () => {
    afterEach(() => resetAllMocks());

    it('given an empty array, return false', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = ContainsAllOperation.execute(values, []);

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings and an array of values present in this array, return true', () => {
        // GIVEN
        const values = ['1', '3'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = ContainsAllOperation.execute(values, ['3']);

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '3');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '3', '3');
        expect(object.deepEqual).toHaveBeenCalledTimes(2);
    });

    it('given an array of strings and an array of values not present in this array, return false', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => false);

        // WHEN
        const result = ContainsAllOperation.execute(values, ['7']);

        // THEN
        expect(result).toBeFalsy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '7');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '2', '7');
        expect(object.deepEqual).toHaveBeenCalledTimes(2);
    });

    it('given an array of persons and an array of values present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo()];
        jest.spyOn(object, 'deepEqual').mockImplementationOnce(() => true);

        // WHEN
        const result = ContainsAllOperation.execute(values, [PersonMock.ed()]);

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, PersonMock.ed(), PersonMock.ed());
        expect(object.deepEqual).toHaveBeenCalledTimes(1);
    });

    it('given an array of persons and an array of multiple same values present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.jo(), PersonMock.ed(), PersonMock.ed()];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = ContainsAllOperation.execute(values, [PersonMock.ed()]);

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, PersonMock.jo(), PersonMock.ed());
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, PersonMock.ed(), PersonMock.ed());
        expect(object.deepEqual).toHaveBeenCalledTimes(2);
    });
});
