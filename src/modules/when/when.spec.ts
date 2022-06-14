import {when} from './when';

describe('when', () => {

    it('given input 5 and no default value, should return branch 5 value', () => {
        // GIVEN
        const value = 5;

        // WHEN
        const result = when(value, [
            5, () => 'Hello',
            6, () => 'Goodbye !'
        ]);

        // THEN
        expect(result).toEqual('Hello');
    });

    it('given input 7 and no default value, should return undefined', () => {
        // GIVEN
        const value = 7;

        // WHEN
        const result = when(value, [
            5, () => 'Hello',
            6, () => 'Goodbye !'
        ]);

        // THEN
        expect(result).toBeUndefined();
    });

    it('given input 6 and a default value, should return branch 6 value', () => {
        // GIVEN
        const value = 6;

        // WHEN
        const result = when(value, [
            5, () => 'Hello',
            6, () => 'Goodbye !',
            () => 'Nothing !'
        ]);

        // THEN
        expect(result).toEqual('Goodbye !');
    });

    it('given input 7 and a default value, should return default value', () => {
        // GIVEN
        const value = 7;

        // WHEN
        const result = when(value, [
            5, () => 'Hello',
            6, () => 'Goodbye !',
            () => 'Default value'
        ]);

        // THEN
        expect(result).toEqual('Default value');
    });

});
