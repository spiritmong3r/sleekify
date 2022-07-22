import { RemoveFirstOperation } from './remove-first.operation';

describe('RemoveFirstOperation', () => {
    it('given an empty array, do nothing', () => {
        // GIVEN
        const values: any[] = [];

        // WHEN
        RemoveFirstOperation.execute(values);

        // THEN
        const expected: any[] = [];
        expect(values).toEqual(expected);
    });

    it('given an array numbers, update the array by removing the first element', () => {
        // GIVEN
        const values = [1, 2, 3, 4, 5];

        // WHEN
        RemoveFirstOperation.execute(values);

        // THEN
        const expected = [2, 3, 4, 5];
        expect(values).toEqual(expected);
    });
});
