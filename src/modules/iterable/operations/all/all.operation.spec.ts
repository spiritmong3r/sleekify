import { PersonMock } from '../../../../test/mocks/person.mock';
import { AllOperation } from './all.operation';

describe('AllOperation', () => {
    it('given an array of strings containing a single value 4, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = AllOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of strings containing multiple values 4, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];

        // WHEN
        const result = AllOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of strings not containing value 4, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = AllOperation.execute(values, (it) => it === '34');

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of strings not containing value 1, return true', () => {
        // GIVEN
        const values = ['1', '1', '1', '1', '1', '1', '1'];

        // WHEN
        const result = AllOperation.execute(values, (it) => it === '1');

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of persons containing a single 18 yo person, return false', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AllOperation.execute(values, (it) => it.age === 18);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of persons containing multiple 18 yo persons, return false', () => {
        // GIVEN
        const values = [PersonMock.ted(), PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AllOperation.execute(values, (it) => it.age === 18);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of persons not containing a 35 yo person, return false', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AllOperation.execute(values, (it) => it.age === 35);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of persons containing only 19 yo persons, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jo(), PersonMock.jo(), PersonMock.ed()];

        // WHEN
        const result = AllOperation.execute(values, (it) => it.age === 19);

        // THEN
        expect(result).toBeTruthy();
    });
});
