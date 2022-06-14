import {PersonMock} from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object/deep-equal';
import {ContainsOperation} from './contains.operation';
import clearAllMocks = jest.clearAllMocks;

describe('ContainsOperation', () => {

    afterEach(() => clearAllMocks());

    it('given an empty array, return false', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = ContainsOperation.execute(values, {});

        // THEN
        expect(result).toBeFalsy();
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings and a value present in this array, return true', () => {
        // GIVEN
        const values = ['1', '3'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = ContainsOperation.execute(values, '3');

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '3');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '3', '3');
        expect(object.deepEqual).toHaveBeenCalledTimes(2);
    });

    it('given an array of strings and a value not present in this array, return false', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => false);

        // WHEN
        const result = ContainsOperation.execute(values, '7');

        // THEN
        expect(result).toBeFalsy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '7');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '2', '7');
        expect(object.deepEqual).toHaveBeenCalledTimes(2);
    });

    it('given an array of persons and a person present in this array, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo()];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false);

        // WHEN
        const result = ContainsOperation.execute(values, PersonMock.ed());

        // THEN
        expect(result).toBeTruthy();
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, PersonMock.ed(), PersonMock.ed());
        expect(object.deepEqual).toHaveBeenCalledTimes(1);
    });

});
