import {PersonMock} from '../../../../test/mocks/person.mock';
import {Person} from '../../../../test/models/person';
import * as addOperation from '../../operations/add/add.operation';
import * as clearOperation from '../../operations/clear/clear.operation';
import * as distinctOperation from '../../operations/distinct/distinct.operation';
import * as dropLastOperation from '../../operations/drop-last/drop-last.operation';
import * as dropOperation from '../../operations/drop/drop.operation';
import * as filterOperation from '../../operations/filter/filter.operation';
import * as flatMapOperation from '../../operations/flatmap/flat-map.operation';
import * as flattenOperation from '../../operations/flatten/flatten.operation';
import * as mapOperation from '../../operations/map/map.operation';
import * as onEachOperation from '../../operations/on-each/on-each.operation';
import * as removeAllOperation from '../../operations/remove-all/remove-all.operation';
import * as removeAtOperation from '../../operations/remove-at/remove-at.operation';
import * as removeFirstOperation from '../../operations/remove-first/remove-first.operation';
import * as removeLastOperation from '../../operations/remove-last/remove-last.operation';
import * as removeOperation from '../../operations/remove/remove.operation';
import * as reverseOperation from '../../operations/reverse/reverse.operation';
import * as sortOperation from '../../operations/sort/sort.operation';
import * as takeLastOperation from '../../operations/take-last/take-last.operation';
import * as takeOperation from '../../operations/take/take.operation';
import {MutableList} from './mutable-list';
import restoreAllMocks = jest.restoreAllMocks;

describe('MutableList', () => {
    afterEach(() => restoreAllMocks());

    describe('add', () => {
        it('add a new element to the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(addOperation, 'default');

            // WHEN
            const result = list.add('9');

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
            expect(result).toEqual(expected);
            expect(addOperation.default).toHaveBeenCalled();
        });
    });

    describe('remove', () => {
        it('remove an element from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(removeOperation, 'default');

            // WHEN
            const result = list.remove('1');

            // THEN
            const expected = new MutableList(['2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(removeOperation.default).toHaveBeenCalled();
        });
    });

    describe('removeAt', () => {
        it('remove an element at the given index from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(removeAtOperation, 'default');

            // WHEN
            const result = list.removeAt(0);

            // THEN
            const expected = new MutableList(['2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(removeAtOperation.default).toHaveBeenCalled();
        });
    });

    describe('removeFirst', () => {
        it('remove first element from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(removeFirstOperation, 'default');

            // WHEN
            const result = list.removeFirst();

            // THEN
            const expected = new MutableList(['2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(removeFirstOperation.default).toHaveBeenCalled();
        });
    });

    describe('removeLast', () => {
        it('remove last element from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(removeLastOperation, 'default');

            // WHEN
            const result = list.removeLast();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7']);
            expect(result).toEqual(expected);
            expect(removeLastOperation.default).toHaveBeenCalled();
        });
    });

    describe('removeAll', () => {
        it('remove all elements matching the given element', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8', '5']);
            jest.spyOn(removeAllOperation, 'default');

            // WHEN
            const result = list.removeAll('5');

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(removeAllOperation.default).toHaveBeenCalled();
        });
        it('remove all elements matching the given predicate', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8', '5']);
            const predicate = (it: string) => it === '5';
            jest.spyOn(removeAllOperation, 'default');

            // WHEN
            const result = list.removeAll(predicate);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(removeAllOperation.default).toHaveBeenCalled();
        });
    });

    describe('filter', () => {
        it('call the Filter operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it !== '5';
            jest.spyOn(filterOperation, 'default');

            // WHEN
            const result = list.filter(predicate);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(filterOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('onEach', () => {
        it('call the OnEach operation class', () => {
            // GIVEN
            const list = new MutableList([PersonMock.bob(), PersonMock.jo(), PersonMock.jane()]);
            const action = (it: Person) => (it.age = 18);
            jest.spyOn(onEachOperation, 'default');

            // WHEN
            const result = list.onEach(action);

            // THEN
            const expected = new MutableList([{...PersonMock.bob(), age: 18}, {...PersonMock.jo(), age: 18}, {...PersonMock.jane(), age: 18}]);
            expect(result).toEqual(expected);
            expect(onEachOperation.default).toHaveBeenCalled();
        });
    });

    describe('map', () => {
        it('call the Map operation class', () => {
            // GIVEN
            const list = new MutableList(['a', 'b', 'c']);
            const transformer = (it: string) => it.toUpperCase();
            jest.spyOn(mapOperation, 'default');

            // WHEN
            const result = list.map(transformer);

            // THEN
            const expected = new MutableList(['A', 'B', 'C']);
            expect(result).toEqual(expected);
            expect(mapOperation.default).toHaveBeenCalledWith(['a', 'b', 'c'], transformer);
        });
    });

    describe('flatMap', () => {
        it('call the Flatmap operation class', () => {
            // GIVEN
            const list = new MutableList([[PersonMock.ted()], [PersonMock.bob()]]);
            const transformer = (it: Person[]) => it.map((person) => person.firstName);
            jest.spyOn(flatMapOperation, 'default');

            // WHEN
            const result = list.flatMap(transformer);

            // THEN
            const expected = new MutableList(['Ted', 'Bob']);
            expect(result).toEqual(expected);
            expect(flatMapOperation.default).toHaveBeenCalledWith([[PersonMock.ted()], [PersonMock.bob()]], transformer);
        });
    });

    describe('flatten', () => {
        it('call the Flatten operation class', () => {
            // GIVEN
            const list = new MutableList([['1', '2', '3', '4', '5', '6'], ['7', '8']]);
            jest.spyOn(flattenOperation, 'default');

            // WHEN
            const result = list.flatten(1);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(flattenOperation.default).toHaveBeenCalledWith([['1', '2', '3', '4', '5', '6'], ['7', '8']], 1
            );
        });
    });

    describe('reverse', () => {
        it('call the Reverse operation class', () => {
            // GIVEN
            const list = new MutableList([1, 2, 3, 4, 5, 6, 7, 8]);
            jest.spyOn(reverseOperation, 'default');

            // WHEN
            const result = list.reverse();

            // THEN
            const expected = new MutableList([8, 7, 6, 5, 4, 3, 2, 1]);
            expect(result).toEqual(expected);
            expect(reverseOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });

    describe('sort', () => {
        it('call the Sort operation class without selector', () => {
            // GIVEN
            const list = new MutableList(['2', '3', '4', '5', '6', '1', '7', '8']);
            jest.spyOn(sortOperation, 'default');

            // WHEN
            const result = list.sort();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(sortOperation.default).toHaveBeenCalledWith(['2', '3', '4', '5', '6', '1', '7', '8'], undefined);
        });

        it('call the Sort operation class with selector', () => {
            // GIVEN
            const list = new MutableList([PersonMock.jane(), PersonMock.bob()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(sortOperation, 'default');

            // WHEN
            const result = list.sort(selector);

            // THEN
            const expected = new MutableList([PersonMock.bob(), PersonMock.jane()]);
            expect(result).toEqual(expected);
            expect(sortOperation.default).toHaveBeenCalledWith([PersonMock.jane(), PersonMock.bob()], selector);
        });
    });

    describe('distinct', () => {
        it('call the Distinct operation class without selector', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '3', '7', '8']);
            jest.spyOn(distinctOperation, 'default');

            // WHEN
            const result = list.distinct();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(distinctOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '3', '7', '8'], undefined);
        });

        it('call the Distinct operation class with selector', () => {
            // GIVEN
            const list = new MutableList([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}]);
            const selector = (it: any) => it.name;
            jest.spyOn(distinctOperation, 'default');

            // WHEN
            const result = list.distinct(selector);

            // THEN
            const expected = new MutableList([{name: 'bob'}, {name: 'ted'}]);
            expect(result).toEqual(expected);
            expect(distinctOperation.default).toHaveBeenCalledWith([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}], selector);
        });
    });

    describe('take', () => {
        it('call the Take operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(takeOperation, 'default');

            // WHEN
            const result = list.take(5);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5']);
            expect(result).toEqual(expected);
            expect(takeOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('takeLast', () => {
        it('call the TakeLast operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(takeLastOperation, 'default');

            // WHEN
            const result = list.takeLast(5);

            // THEN
            const expected = new MutableList(['4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(takeLastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('drop', () => {
        it('call the Drop operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(dropOperation, 'default');

            // WHEN
            const result = list.drop(5);

            // THEN
            const expected = new MutableList(['6', '7', '8']);
            expect(result).toEqual(expected);
            expect(dropOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('dropLast', () => {
        it('call the DropLast operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(dropLastOperation, 'default');

            // WHEN
            const result = list.dropLast(5);

            // THEN
            const expected = new MutableList(['1', '2', '3']);
            expect(result).toEqual(expected);
            expect(dropLastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('clear', () => {
        it('call the Clear operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(clearOperation, 'default');

            // WHEN
            const result = list.clear();

            // THEN
            expect(result.size()).toEqual(0);
            expect(clearOperation.default).toHaveBeenCalled();
        });
    });
});
