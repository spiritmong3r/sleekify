import { PersonMock } from '../../../../test/mocks/person.mock';
import { JoinProps } from '../../models/JoinProps';
import joinOperation from './join.operation';

describe('joinOperation', () => {
    it('given an array of numbers, return a string representation with commas', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];

        // WHEN
        const result = joinOperation(values);

        // THEN
        const expected = '1, 2, 5, 4, 3, 9, 0';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and empty props, return a string representation with commas', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = {};

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '1, 2, 5, 4, 3, 9, 0';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with slash separator, return a string representation with slashes', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { separator: '/' };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '1/2/5/4/3/9/0';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with prefix, return a prefixed string representation ', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { prefix: '=> ' };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '=> 1, 2, 5, 4, 3, 9, 0';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with postfix, return a postfixed string representation ', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { postfix: ' <=' };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '1, 2, 5, 4, 3, 9, 0 <=';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with limit, return a limited string representation', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { limit: 6 };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '1, 2, ...';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with limit and truncated, return a limited string representation', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { limit: 6, truncated: ';;;' };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '1, 2, ;;;';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and props with prefix, postfix, limit and truncated, return a limited string representation', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];
        const props: JoinProps = { prefix: '=> ', postfix: ' <=', limit: 6, truncated: ';;;' };

        // WHEN
        const result = joinOperation(values, props);

        // THEN
        const expected = '=> 1, 2, ;;; <=';
        expect(result).toEqual(expected);
    });

    it('given an array of numbers and no props, return a string representation', () => {
        // GIVEN
        const values = [1, 2, 5, 4, 3, 9, 0];

        // WHEN
        const result = joinOperation(values, {}, (it) => it);

        // THEN
        const expected = '1, 2, 5, 4, 3, 9, 0';
        expect(result).toEqual(expected);
    });

    it('given an array of persons and props, return string representation with only firstnames and names', () => {
        // GIVEN
        const values = [PersonMock.ed(), PersonMock.bob(), PersonMock.jane()];
        const props: JoinProps = { prefix: 'people: ' };

        // WHEN
        const result = joinOperation(values, props, (it) => `${it.firstName} ${it.name}`);

        // THEN
        const expected = 'people: Ed Todd, Bob Todd, Jane Todd';
        expect(result).toEqual(expected);
    });
});
