import {List} from './list';

describe('List', () => {

    describe('flatMap', () => {
        it('given an empty List, return an empty List', () => {
            // GIVEN
            const list = new List();

            // WHEN
            const result = list.flatMap((it) => it);

            // THEN
            const expected = JSON.stringify(new List());
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a List of numbers, return the same List of numbers', () => {
            // GIVEN
            const list = new List(1, 2, 3, 4, 5);

            // WHEN
            const result = list.flatMap((it) => it);

            // THEN
            const expected = JSON.stringify(new List(1, 2, 3, 4, 5));
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a List of List of numbers, return a flattened List', () => {
            // GIVEN
            const list = new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8));

            // WHEN
            const result = list.flatMap((it) => it);

            // THEN
            const expected = JSON.stringify(new List(1, 2, 3, 4, 5, 6, 7, 8));
            expect(JSON.stringify(result)).toEqual(expected);
        });

        it('given a List of List of numbers, return a flattened List of strings', () => {
            // GIVEN
            const list = new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8));
            jest.spyOn(list, 'map').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.flatMap((it) => it.map(value => value.toString()));

            // THEN
            const expected = JSON.stringify(new List('1', '2', '3', '4', '5', '6', '7', '8'));
            expect(JSON.stringify(result)).toEqual(expected);
        });
    });

});
