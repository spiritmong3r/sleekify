import { PersonMock } from '../../../../test/mocks/person.mock';
import { CountOperation } from './count.operation';

describe('CountOperation', () => {
    it('given an empty array and no predicate, return 0', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = CountOperation.execute(values);

        // THEN
        expect(result).toEqual(0);
    });

    it('given an array of strings and no predicate, return 7', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = CountOperation.execute(values);

        // THEN
        expect(result).toEqual(7);
    });

    it('given an empty array and a predicate, return 0', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        const result = CountOperation.execute(values, () => true);

        // THEN
        expect(result).toEqual(0);
    });

    it('given an array of strings not containing the value 34 and a predicate, return 0', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = CountOperation.execute(values, (it) => it === '34');

        // THEN
        expect(result).toEqual(0);
    });

    it('given an array of strings containing a single value 4 and a predicate, return 1', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = CountOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toEqual(1);
    });

    it('given an array of strings containing multiples values 4 and a predicate, return 3', () => {
        // GIVEN
        const values = ['1', '4', '2', '5', '4', '3', '9', '4', '0'];

        // WHEN
        const result = CountOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toEqual(3);
    });

    it('given an array of persons not containing a 35 yo person and a predicate, return 0', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = CountOperation.execute(values, (it) => it.age === 35);

        // THEN
        expect(result).toEqual(0);
    });

    it('given an array of persons containing a single 18 yo person and a predicate, return 1', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = CountOperation.execute(values, (it) => it.age === 18);

        // THEN
        expect(result).toEqual(1);
    });

    it('given an array of persons containing multiple 19 yo persons and a predicate, return 2', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = CountOperation.execute(values, (it) => it.age === 19);

        // THEN
        expect(result).toEqual(2);
    });
});
