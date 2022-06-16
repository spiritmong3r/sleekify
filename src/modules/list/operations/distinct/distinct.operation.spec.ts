import {PersonMock} from '../../../../test/mocks/person.mock';
import * as object from '../../../common/object/deep-equal';
import {List} from '../../list';
import {DistinctOperation} from './distinct.operation';
import resetAllMocks = jest.resetAllMocks;

describe('DistinctOperation', () => {

    afterEach(() => resetAllMocks());

    it('given an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given an array of strings not containing any duplicate, return the same List', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values);

        // THEN
        const expected = new List('1', '2');
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(3);
    });

    it('given an array of strings containing duplicates, return a List without any duplicate', () => {
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
        const expected = new List('1', '2');
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given an array of persons containing duplicates, return a List without any duplicate', () => {
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
        const expected = new List(PersonMock.jo(), PersonMock.bob());
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, PersonMock.jo(), PersonMock.jo());
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, PersonMock.jo(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, PersonMock.bob(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, PersonMock.jo(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, PersonMock.bob(), PersonMock.bob());
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given a selector and an empty array, return an empty List', () => {
        // GIVEN
        const values: any[] = [];
        jest.spyOn(object, 'deepEqual');

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it);

        // THEN
        const expected = new List();
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenCalledTimes(0);
    });

    it('given a selector and an array of strings not containing any duplicate, return the same List', () => {
        // GIVEN
        const values = ['1', '2'];
        jest.spyOn(object, 'deepEqual')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true);

        // WHEN
        const result = DistinctOperation.execute(values, (it) => it);

        // THEN
        const expected = new List('1', '2');
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(3);
    });

    it('given a selector and an array of strings containing duplicates, return a List without any duplicate', () => {
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
        const expected = new List('1', '2');
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, '1', '1');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, '2', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, '1', '2');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, '2', '2');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

    it('given a selector and an array of persons with the same name, return a List with the first person', () => {
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
        const expected = new List(PersonMock.jo(), PersonMock.bob());
        expect(result).toEqual(expected);
        expect(object.deepEqual).toHaveBeenNthCalledWith(1, 'Jo', 'Jo');
        expect(object.deepEqual).toHaveBeenNthCalledWith(2, 'Jo', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(3, 'Bob', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(4, 'Jo', 'Bob');
        expect(object.deepEqual).toHaveBeenNthCalledWith(5, 'Bob', 'Bob');
        expect(object.deepEqual).toHaveBeenCalledTimes(5);
    });

});
