import {when} from './when';

describe('when', () => {
    describe('with input and branches with simple value', () => {
        it('given an input, no default value and a matching value, should return branch with matching value', () => {
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

        it('given an input, no default value and no matching value, should return undefined', () => {
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

        it('given an input, a default value and a matching value, should return branch with matching value', () => {
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

        it('given an input, a default value and no matching value, should return default value', () => {
            // GIVEN
            const value = 7;

            // WHEN
            const result = when(value, [
                null, () => 'null !',
                () => 'not null !'
            ]);

            // THEN
            expect(result).toEqual('not null !');
        });

        it('given null input, no default value and a matching value, should return branch with null value', () => {
            // GIVEN
            const value = null;

            // WHEN
            const result = when(value, [
                5, () => 'Hello',
                6, () => 'Goodbye !',
                null, () => 'null !'
            ]);

            // THEN
            expect(result).toEqual('null !');
        });

        it('given input undefined, no default value and a matching value, should return branch with undefined value', () => {
            // GIVEN
            const value = undefined;

            // WHEN
            const result = when(value, [
                5, () => 'Hello',
                6, () => 'Goodbye !',
                undefined, () => 'undefined !'
            ]);

            // THEN
            expect(result).toEqual('undefined !');
        });
    });

    describe('with input and branches with an array as value', () => {
        it('given an input, a default value and a matching value, should return branch with matching value', () => {
            // GIVEN
            const value = 6;

            // WHEN
            const result = when(value, [
                5, () => 'Hello',
                [4, 6], () => 'Goodbye !',
                () => 'Nothing !'
            ]);

            // THEN
            expect(result).toEqual('Goodbye !');
        });

        it('given an input, a default value and no matching value, should return default value', () => {
            // GIVEN
            const value = 7;

            // WHEN
            const result = when(value, [
                5, () => 'Hello',
                [4, 6], () => 'Goodbye !',
                () => 'Nothing !'
            ]);

            // THEN
            expect(result).toEqual('Nothing !');
        });
    });

    describe('without input and branches with an array as value', () => {
        it('given an input, a default value and a matching value, should return branch with matching value', () => {
            // GIVEN
            const getValue = (): number => 5;

            // WHEN
            const result = when([
                getValue() === 5, () => 'Hello',
                () => 'Nothing !'
            ]);

            // THEN
            expect(result).toEqual('Hello');
        });

        it('given an input, a default value and no matching value, should return default value', () => {
            // GIVEN
            const getValue = (): number => 6;

            // WHEN
            const result = when([
                getValue() === 5, () => 'Hello',
                () => 'Nothing !'
            ]);

            // THEN
            expect(result).toEqual('Nothing !');
        });

        it('given an input, no default value and no matching value, should return undefined', () => {
            // GIVEN
            const getValue = (): number => 6;

            // WHEN
            const result = when([
                getValue() === 5, () => 'Hello'
            ]);

            // THEN
            expect(result).toBeUndefined();
        });

        it('given an input, no default value and a matching value, should return branch with matching value', () => {
            // GIVEN
            const getValue = (): number => 5;

            // WHEN
            const result = when([
                getValue() === 5, () => 'Hello',
                getValue() === 6, () => 'Goodbye !'
            ]);

            // THEN
            expect(result).toEqual('Hello');
        });
    });
});
