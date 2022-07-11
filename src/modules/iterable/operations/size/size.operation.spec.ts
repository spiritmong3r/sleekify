import {SizeOperation} from './size.operation';

describe('SizeOperation', () => {

    it('given an array of 5 elements, return the number 5', () => {
        // GIVEN
        const values = [0, 1, 2, 3, 4];

        // WHEN
        const result = SizeOperation.execute(values);

        // THEN
        expect(result).toEqual(5);
    });

});
