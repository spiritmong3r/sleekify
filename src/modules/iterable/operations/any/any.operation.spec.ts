import {PersonMock} from '../../../../test/mocks/person.mock';
import {AnyOperation} from './any.operation';

describe('AnyOperation', () => {

    it('given an array of strings containing a single value 4, return true', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of strings containing multiple values 4, return true', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it === '4');

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of strings not containing value 4, return false', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0'];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it === '34');

        // THEN
        expect(result).toBeFalsy();
    });

    it('given an array of persons containing a single 18 yo person, return true', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it.age === 18);

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of persons containing multiple 18 yo persons, return true', () => {
        // GIVEN
        const values = [PersonMock.ted(), PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it.age === 18);

        // THEN
        expect(result).toBeTruthy();
    });

    it('given an array of persons not containing a 35 yo person, return false', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.jane(), PersonMock.jo(), PersonMock.bob()];

        // WHEN
        const result = AnyOperation.execute(values, (it) => it.age === 35);

        // THEN
        expect(result).toBeFalsy();
    });

});
