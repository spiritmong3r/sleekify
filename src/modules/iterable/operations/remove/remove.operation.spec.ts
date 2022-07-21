import {RemoveOperation} from './remove.operation';

describe('RemoveOperation', () => {

    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];
        const index = 0;

        // WHEN
        RemoveOperation.execute(values, index);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers and an index, update the array by removing the element at the given index', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];
        const index = 1;

        // WHEN
        RemoveOperation.execute(values, index);

        // THEN
        const expected = [1, 3, 4, 5];
        expect(values).toEqual(expected);
    });

});
