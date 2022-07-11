import {PersonMock} from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object/deep-equal';
import {DistinctOperation} from './distinct.operation';
import resetAllMocks = jest.resetAllMocks;

describe('DistinctOperation', () => {

    afterEach(() => resetAllMocks());

    it('given an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings not containing any duplicate, return the same array', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = ['1', '2'];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(3);
    });

    it('given an array of strings containing duplicates, return a array without any duplicate', () => {
        // GIVEN
        const values = ['1', '2', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = ['1', '2'];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given an array of persons containing duplicates, return a array without any duplicate', () => {
        // GIVEN
        const values = [PersonMock.jo(), PersonMock.bob(), PersonMock.bob()];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = [PersonMock.jo(), PersonMock.bob()];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, PersonMock.jo(), PersonMock.jo());
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, PersonMock.jo(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, PersonMock.bob(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, PersonMock.jo(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, PersonMock.bob(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given a selector and an empty array, return an empty array', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it);

        // THEN
        const expected: any[] = [];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given a selector and an array of strings not containing any duplicate, return the same array', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it);

        // THEN
        const expected = ['1', '2'];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(3);
    });

    it('given a selector and an array of strings containing duplicates, return a array without any duplicate', () => {
        // GIVEN
        const values = ['1', '2', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it);

        // THEN
        const expected = ['1', '2'];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given a selector and an array of persons with the same name, return a array with the first person', () => {
        // GIVEN
        const values = [PersonMock.jo(), PersonMock.bob(), PersonMock.bob()];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it.firstName);

        // THEN
        const expected = [PersonMock.jo(), PersonMock.bob()];
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, 'Jo', 'Jo');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, 'Jo', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, 'Bob', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, 'Jo', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, 'Bob', 'Bob');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const jane = PersonMock.jane();
        const values = [bob, jo, jane];
        jest.spyOn(object, 'deepEqual').mockImplementationOnce(() => true);


        // WHEN
        DistinctOperation.execute(values, it => it.firstName);

        // THEN
        expect(values.length).toEqual(3);
        expect(values[0] === bob).toBeTruthy();
        expect(values[1] === jo).toBeTruthy();
        expect(values[2] === jane).toBeTruthy();
    });

});
