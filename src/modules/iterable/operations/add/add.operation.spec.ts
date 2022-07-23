import addOperation from './add.operation';

describe('addOperation', () => {
    it('given an array of strings, add a new entry to the current array', () => {
        // GIVEN
        const values = ['1', '2', '5', '4', '3', '9', '0', '4'];
        const valueToAdd = '7';

        // WHEN
        addOperation(values, valueToAdd);

        // THEN
        const expected = ['1', '2', '5', '4', '3', '9', '0', '4', '7'];
        expect(values).toEqual(expected);
    });
});
