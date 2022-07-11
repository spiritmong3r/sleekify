import {PersonMock} from '../../../test/mocks/person.mock';
import {deepEqual} from './deep-equal';

describe('DeepEqual', () => {

    it('given 2 identical string, return true', () => {
        // GIVEN
        const object1 = 'bob';
        const object2 = 'bob';

        // WHEN
        const result = deepEqual(object1, object2);

        // THEN
        expect(result).toBeTruthy();
    });

    it('given 2 different string, return false', () => {
        // GIVEN
        const object1 = 'bob';
        const object2 = 'jo';

        // WHEN
        const result = deepEqual(object1, object2);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given 2 identical nested objects with same datas, return true', () => {
        // GIVEN
        const object1 = PersonMock.bob();
        const object2 = PersonMock.bob();

        // WHEN
        const result = deepEqual(object1, object2);

        // THEN
        expect(result).toBeTruthy();
    });

    it('given 2 identical nested objects with different datas, return false', () => {
        // GIVEN
        const object1 = PersonMock.bob();
        const object2 = {...PersonMock.bob(), country: {name: 'FR'}};

        // WHEN
        const result = deepEqual(object1, object2);

        // THEN
        expect(result).toBeFalsy();
    });

    it('given 2 different nested objects, return false', () => {
        // GIVEN
        const object1 = PersonMock.bob();
        const object2 = {id: 1};

        // WHEN
        const result = deepEqual(object1, object2);

        // THEN
        expect(result).toBeFalsy();
    });

    it('check immutability', () => {
        // GIVEN
        const bob = PersonMock.bob();
        const jo = PersonMock.jo();
        const bobCopy = bob;
        const joCopy = jo;

        // WHEN
        deepEqual(bob, jo);

        // THEN
        expect(bob === bobCopy).toBeTruthy();
        expect(jo === joCopy).toBeTruthy();
    });

});
