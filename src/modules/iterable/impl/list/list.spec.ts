import {PersonMock} from '../../../../test/mocks/person.mock';
import {Person} from '../../../../test/models/person';
import {JoinProps} from '../../models/JoinProps';
import * as allOperation from '../../operations/all/all.operation';
import * as anyOperation from '../../operations/any/any.operation';
import * as containsAllOperation from '../../operations/contains-all/contains-all.operation';
import * as containsOperation from '../../operations/contains/contains.operation';
import * as countOperation from '../../operations/count/count.operation';
import * as distinctOperation from '../../operations/distinct/distinct.operation';
import * as dropLastOperation from '../../operations/drop-last/drop-last.operation';
import * as dropOperation from '../../operations/drop/drop.operation';
import * as filterOperation from '../../operations/filter/filter.operation';
import * as findOperation from '../../operations/find/find.operation';
import * as firstOrNullOperation from '../../operations/first-or-null/first-or-null.operation';
import * as firstOperation from '../../operations/first/first.operation';
import * as flatMapOperation from '../../operations/flatmap/flat-map.operation';
import * as flattenOperation from '../../operations/flatten/flatten.operation';
import * as forEachOperation from '../../operations/for-each/for-each.operation';
import * as getOperation from '../../operations/get/get.operation';
import * as groupByOperation from '../../operations/group-by/group-by.operation';
import * as indexOfOperation from '../../operations/index-of/index-of.operation';
import * as isEmptyOperation from '../../operations/is-empty/is-empty.operation';
import * as joinOperation from '../../operations/join/join.operation';
import * as lastOrNullOperation from '../../operations/last-or-null/last-or-null.operation';
import * as lastOperation from '../../operations/last/last.operation';
import * as mapOperation from '../../operations/map/map.operation';
import * as maxOperation from '../../operations/max/max.operation';
import * as minOperation from '../../operations/min/min.operation';
import * as noneOperation from '../../operations/none/none.operation';
import * as onEachOperation from '../../operations/on-each/on-each.operation';
import * as reduceOperation from '../../operations/reduce/reduce.operation';
import * as reverseOperation from '../../operations/reverse/reverse.operation';
import * as sizeOperation from '../../operations/size/size.operation';
import * as someOperation from '../../operations/some/some.operation';
import * as sortOperation from '../../operations/sort/sort.operation';
import * as sumOperation from '../../operations/sum/sum.operation';
import * as takeLastOperation from '../../operations/take-last/take-last.operation';
import * as takeOperation from '../../operations/take/take.operation';
import * as toArrayOperation from '../../operations/to-array/to-array.operation';
import {MutableList} from '../mutable-list/mutable-list';
import {List} from './list';
import restoreAllMocks = jest.restoreAllMocks;

describe('List', () => {
    afterEach(() => restoreAllMocks());

    describe('filter', () => {
        it('call the Filter operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it !== '5';
            jest.spyOn(filterOperation, 'default');

            // WHEN
            const result = list.filter(predicate);

            // THEN
            const expected = new List(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(filterOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.filter((it) => it.firstName === 'Bob');

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('onEach', () => {
        it('call the OnEach operation class', () => {
            // GIVEN
            const list = new List([PersonMock.bob(), PersonMock.jo(), PersonMock.jane()]);
            const selector = (it: Person) => (it.age = 18);
            jest.spyOn(onEachOperation, 'default');

            // WHEN
            const result = list.onEach(selector);

            // THEN
            const expected = new List([{...PersonMock.bob(), age: 18}, {...PersonMock.jo(), age: 18}, {...PersonMock.jane(), age: 18}]);
            expect(result).toEqual(expected);
            expect(onEachOperation.default).toHaveBeenCalled();
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.onEach((it) => (it.firstName = 'Bob'));

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('forEach', () => {
        it('call the ForEach operation class', () => {
            // GIVEN
            const list = new List([PersonMock.ted(), PersonMock.jo()]);
            const action = (it: Person) => {
                it.name = 'Hololo';
                return it;
            };
            jest.spyOn(forEachOperation, 'default');

            // WHEN
            list.forEach(action);

            // THEN
            const expected = new List([{...PersonMock.ted(), name: 'Hololo'}, {...PersonMock.jo(), name: 'Hololo'}]);
            expect(list).toEqual(expected);
            expect(forEachOperation.default).toHaveBeenCalled();
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.forEach((it) => (it.firstName = 'Bob'));

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('map', () => {
        it('call the Map operation class', () => {
            // GIVEN
            const list = new List(['a', 'b', 'c']);
            const selector = (it: string) => it.toUpperCase();
            jest.spyOn(mapOperation, 'default');

            // WHEN
            const result = list.map(selector);

            // THEN
            const expected = new List(['A', 'B', 'C']);
            expect(result).toEqual(expected);
            expect(mapOperation.default).toHaveBeenCalledWith(['a', 'b', 'c'], selector);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.map((it) => it.firstName);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('flatMap', () => {
        it('call the Flatmap operation class', () => {
            // GIVEN
            const list = new List([[PersonMock.ted()], [PersonMock.bob()]]);
            const selector = (it: Person[]) => it.map((person) => person.firstName);
            jest.spyOn(flatMapOperation, 'default');

            // WHEN
            const result = list.flatMap(selector);

            // THEN
            const expected = new List(['Ted', 'Bob']);
            expect(result).toEqual(expected);
            expect(flatMapOperation.default).toHaveBeenCalledWith([[PersonMock.ted()], [PersonMock.bob()]], selector);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.flatMap((it) => it.firstName);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('flatten', () => {
        it('call the Flatten operation class', () => {
            // GIVEN
            const list = new List([['1', '2', '3', '4', '5', '6'], ['7', '8']]);
            jest.spyOn(flattenOperation, 'default');

            // WHEN
            const result = list.flatten(1);

            // THEN
            const expected = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(flattenOperation.default).toHaveBeenCalledWith([['1', '2', '3', '4', '5', '6'], ['7', '8']], 1);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.flatten();

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('reverse', () => {
        it('call the Reverse operation class', () => {
            // GIVEN
            const list = new List([1, 2, 3, 4, 5, 6, 7, 8]);
            jest.spyOn(reverseOperation, 'default');

            // WHEN
            const result = list.reverse();

            // THEN
            const expected = new List([8, 7, 6, 5, 4, 3, 2, 1]);
            expect(result).toEqual(expected);
            expect(reverseOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6, 7, 8]);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.reverse();

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('sort', () => {
        it('call the Sort operation class without selector', () => {
            // GIVEN
            const list = new List(['2', '3', '4', '5', '6', '1', '7', '8']);
            jest.spyOn(sortOperation, 'default');

            // WHEN
            const result = list.sort();

            // THEN
            const expected = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(sortOperation.default).toHaveBeenCalledWith(['2', '3', '4', '5', '6', '1', '7', '8'], undefined);
        });

        it('call the Sort operation class with selector', () => {
            // GIVEN
            const list = new List([PersonMock.jane(), PersonMock.bob()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(sortOperation, 'default');

            // WHEN
            const result = list.sort(selector);

            // THEN
            const expected = new List([PersonMock.bob(), PersonMock.jane()]);
            expect(result).toEqual(expected);
            expect(sortOperation.default).toHaveBeenCalledWith([PersonMock.jane(), PersonMock.bob()], selector);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.sort();

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('distinct', () => {
        it('call the Distinct operation class without selector', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '3', '7', '8']);
            jest.spyOn(distinctOperation, 'default');

            // WHEN
            const result = list.distinct();

            // THEN
            const expected = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(distinctOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '3', '7', '8'], undefined);
        });

        it('call the Distinct operation class with selector', () => {
            // GIVEN
            const list = new List([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}]);
            const selector = (it: any) => it.name;
            jest.spyOn(distinctOperation, 'default');

            // WHEN
            const result = list.distinct(selector);

            // THEN
            const expected = new List([{name: 'bob'}, {name: 'ted'}]);
            expect(result).toEqual(expected);
            expect(distinctOperation.default).toHaveBeenCalledWith([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}], selector);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.distinct();

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('take', () => {
        it('call the Take operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(takeOperation, 'default');

            // WHEN
            const result = list.take(5);

            // THEN
            const expected = new List(['1', '2', '3', '4', '5']);
            expect(result).toEqual(expected);
            expect(takeOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.take(2);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('takeLast', () => {
        it('call the TakeLast operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(takeLastOperation, 'default');

            // WHEN
            const result = list.takeLast(5);

            // THEN
            const expected = new List(['4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(takeLastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.takeLast(2);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('drop', () => {
        it('call the Drop operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(dropOperation, 'default');

            // WHEN
            const result = list.drop(5);

            // THEN
            const expected = new List(['6', '7', '8']);
            expect(result).toEqual(expected);
            expect(dropOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.drop(2);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('dropLast', () => {
        it('call the DropLast operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(dropLastOperation, 'default');

            // WHEN
            const result = list.dropLast(5);

            // THEN
            const expected = new List(['1', '2', '3']);
            expect(result).toEqual(expected);
            expect(dropLastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.dropLast(2);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('get', () => {
        it('call the GetOperation operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(getOperation, 'default');

            // WHEN
            const result = list.get(5);

            // THEN
            const expected = '6';
            expect(result).toEqual(expected);
            expect(getOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });

        it('check immutability', () => {
            // GIVEN
            const bob = PersonMock.bob();
            const jo = PersonMock.jo();
            const jane = PersonMock.jane();
            const list = new List([bob, jo, jane]);

            // WHEN
            list.get(2);

            // THEN
            expect(list.size()).toEqual(3);
            expect(list.get(0) === bob).toBeTruthy();
            expect(list.get(1) === jo).toBeTruthy();
            expect(list.get(2) === jane).toBeTruthy();
        });
    });

    describe('find', () => {
        it('call the Find operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = () => true;
            jest.spyOn(findOperation, 'default');

            // WHEN
            const result = list.find(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(findOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('first', () => {
        it('call the First operation class with a predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = () => true;
            jest.spyOn(firstOperation, 'default');

            // WHEN
            const result = list.first(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(firstOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the First operation class without predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(firstOperation, 'default');

            // WHEN
            const result = list.first();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(firstOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('firstOrNull', () => {
        it('call the FirstOrNull operation class with a predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = () => true;
            jest.spyOn(firstOrNullOperation, 'default');

            // WHEN
            const result = list.firstOrNull(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(firstOrNullOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the FirstOrNull operation class without predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(firstOrNullOperation, 'default');

            // WHEN
            const result = list.firstOrNull();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(firstOrNullOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });

        it('call the FirstOrNull operation class, return undefined', () => {
            // GIVEN
            const list = new List();
            jest.spyOn(firstOrNullOperation, 'default');

            // WHEN
            const result = list.firstOrNull();

            // THEN
            expect(result).toBeUndefined();
            expect(firstOrNullOperation.default).toHaveBeenCalledWith([], undefined);
        });
    });

    describe('last', () => {
        it('call the Last operation class with a predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = () => true;
            jest.spyOn(lastOperation, 'default');

            // WHEN
            const result = list.last(predicate);

            // THEN
            const expected = '8';
            expect(result).toEqual(expected);
            expect(lastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the Last operation class without predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(lastOperation, 'default');

            // WHEN
            const result = list.last();

            // THEN
            const expected = '8';
            expect(result).toEqual(expected);
            expect(lastOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('lastOrNull', () => {
        it('call the LastOrNull operation class with a predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = () => true;
            jest.spyOn(lastOrNullOperation, 'default');

            // WHEN
            const result = list.lastOrNull(predicate);

            // THEN
            const expected = '8';
            expect(result).toEqual(expected);
            expect(lastOrNullOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the LastOrNull operation class without predicate', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(lastOrNullOperation, 'default');

            // WHEN
            const result = list.lastOrNull();

            // THEN
            const expected = '8';
            expect(result).toEqual(expected);
            expect(lastOrNullOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });

        it('call the LastOrNull operation class, return undefined', () => {
            // GIVEN
            const list = new List();
            jest.spyOn(lastOrNullOperation, 'default');

            // WHEN
            const result = list.lastOrNull();

            // THEN
            expect(result).toBeUndefined();
            expect(lastOrNullOperation.default).toHaveBeenCalledWith([], undefined);
        });
    });

    describe('reduce', () => {
        it('call the Reduce operation class', () => {
            // GIVEN
            const list = new List([1, 2, 3, 4, 5]);
            const operation = (acc: number, current: number) => acc + current;
            jest.spyOn(reduceOperation, 'default');

            // WHEN
            const result = list.reduce(operation, 0);

            // THEN
            const expected = 15;
            expect(result).toEqual(expected);
            expect(reduceOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5], operation, 0);
        });
    });

    describe('groupBy', () => {
        it('call the GroupBy operation class', () => {
            // GIVEN
            const list = new List([PersonMock.bob(), PersonMock.jo()]);
            const selector = (it: Person) => it.name;
            jest.spyOn(groupByOperation, 'default');

            // WHEN
            const result = list.groupBy(selector);

            // THEN
            const expected = new Map([['Todd', [PersonMock.bob(), PersonMock.jo()]]]);
            expect(result).toEqual(expected);
            expect(groupByOperation.default).toHaveBeenCalledWith([PersonMock.bob(), PersonMock.jo()], selector);
        });
    });

    describe('min', () => {
        it('call the Min operation class without selector', () => {
            // GIVEN
            const list = new List([1, 2, 3, 4, 5, 6]);
            jest.spyOn(minOperation, 'default');

            // WHEN
            const result = list.min();

            // THEN
            const expected = 1;
            expect(result).toEqual(expected);
            expect(minOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6], undefined);
        });

        it('call the Min operation class with selector', () => {
            // GIVEN
            const list = new List([PersonMock.jo(), PersonMock.bob()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(minOperation, 'default');

            // WHEN
            const result = list.min(selector);

            // THEN
            const expected = PersonMock.bob();
            expect(result).toEqual(expected);
            expect(minOperation.default).toHaveBeenCalledWith([PersonMock.jo(), PersonMock.bob()], selector);
        });
    });

    describe('max', () => {
        it('call the Max operation class without operator', () => {
            // GIVEN
            const list = new List([1, 2, 3, 4, 5, 6]);
            jest.spyOn(maxOperation, 'default');

            // WHEN
            const result = list.max();

            // THEN
            const expected = 6;
            expect(result).toEqual(expected);
            expect(maxOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6], undefined);
        });

        it('call the Max operation class with operator', () => {
            // GIVEN
            const list = new List([PersonMock.jo(), PersonMock.bob()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(maxOperation, 'default');

            // WHEN
            const result = list.max(selector);

            // THEN
            const expected = PersonMock.jo();
            expect(result).toEqual(expected);
            expect(maxOperation.default).toHaveBeenCalledWith([PersonMock.jo(), PersonMock.bob()], selector);
        });
    });

    describe('some', () => {
        it('call the Some operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '6';
            jest.spyOn(someOperation, 'default');

            // WHEN
            const result = list.some(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(someOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the Some operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '9';
            jest.spyOn(someOperation, 'default');

            // WHEN
            const result = list.some(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(someOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('any', () => {
        it('call the Any operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '6';
            jest.spyOn(anyOperation, 'default');

            // WHEN
            const result = list.any(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(anyOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the Any operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '9';
            jest.spyOn(anyOperation, 'default').mockImplementation(() => false);

            // WHEN
            const result = list.any(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(anyOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('none', () => {
        it('call the None operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '9';
            jest.spyOn(noneOperation, 'default').mockImplementation(() => true);

            // WHEN
            const result = list.none(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(noneOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the None operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it === '6';
            jest.spyOn(noneOperation, 'default').mockImplementation(() => false);

            // WHEN
            const result = list.none(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(noneOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('all', () => {
        it('call the All operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => typeof it === 'string';
            jest.spyOn(allOperation, 'default');

            // WHEN
            const result = list.all(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(allOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });

        it('call the All operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => typeof it === 'number';
            jest.spyOn(allOperation, 'default').mockImplementation(() => false);

            // WHEN
            const result = list.all(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(allOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('contains', () => {
        it('call the Contains operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(containsOperation, 'default');

            // WHEN
            const result = list.contains('1');

            // THEN
            expect(result).toBeTruthy();
            expect(containsOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], '1');
        });

        it('call the Contains operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(containsOperation, 'default');

            // WHEN
            const result = list.contains('9');

            // THEN
            expect(result).toBeFalsy();
            expect(containsOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], '9');
        });
    });

    describe('containsAll', () => {
        it('call the ContainsAll operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(containsAllOperation, 'default');

            // WHEN
            const result = list.containsAll(['1']);

            // THEN
            expect(result).toBeTruthy();
            expect(containsAllOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], ['1']);
        });

        it('call the ContainsAll operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(containsAllOperation, 'default');

            // WHEN
            const result = list.containsAll(['9']);

            // THEN
            expect(result).toBeFalsy();
            expect(containsAllOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], ['9']);
        });
    });

    describe('isEmpty', () => {
        it('call the IsEmpty operation class, return true', () => {
            // GIVEN
            const list = new List();
            jest.spyOn(isEmptyOperation, 'default');

            // WHEN
            const result = list.isEmpty();

            // THEN
            expect(result).toBeTruthy();
            expect(isEmptyOperation.default).toHaveBeenCalledWith([]);
        });

        it('call the IsEmpty operation class, return false', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(isEmptyOperation, 'default');

            // WHEN
            const result = list.isEmpty();

            // THEN
            expect(result).toBeFalsy();
            expect(isEmptyOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('isNotEmpty', () => {
        it('call the IsEmpty operation class, return true', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(isEmptyOperation, 'default');

            // WHEN
            const result = list.isNotEmpty();

            // THEN
            expect(result).toBeTruthy();
            expect(isEmptyOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });

        it('call the IsNotEmpty operation class, return false', () => {
            // GIVEN
            const list = new List();
            jest.spyOn(isEmptyOperation, 'default');

            // WHEN
            const result = list.isNotEmpty();

            // THEN
            expect(result).toBeFalsy();
            expect(isEmptyOperation.default).toHaveBeenCalledWith([]);
        });
    });

    describe('join', () => {
        it('call the Join operation class with both parameters', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            const props: JoinProps = {separator: '/'};
            const selector = (it: string) => it;
            jest.spyOn(joinOperation, 'default');

            // WHEN
            const result = list.join(props, selector);

            // THEN
            const expected = '1/2/3/4/5/6/7/8';
            expect(result).toEqual(expected);
            expect(joinOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], props, selector);
        });

        it('call the Join operation class without parameters', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(joinOperation, 'default');

            // WHEN
            const result = list.join();

            // THEN
            const expected = '1, 2, 3, 4, 5, 6, 7, 8';
            expect(result).toEqual(expected);
            expect(joinOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined, undefined);
        });
    });

    describe('sum', () => {
        it('call the Sum operation class without selector', () => {
            // GIVEN
            const list = new List([1, 2, 3, 4, 5]);
            jest.spyOn(sumOperation, 'default');

            // WHEN
            const result = list.sum();

            // THEN
            const expected = 15;
            expect(result).toEqual(expected);
            expect(sumOperation.default).toHaveBeenCalledWith([1, 2, 3, 4, 5], undefined);
        });

        it('call the Sum operation class with selector', () => {
            // GIVEN
            const list = new List([PersonMock.bob(), PersonMock.jo()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(sumOperation, 'default');

            // WHEN
            const result = list.sum(selector);

            // THEN
            const expected = 37;
            expect(result).toEqual(expected);
            expect(sumOperation.default).toHaveBeenCalledWith([PersonMock.bob(), PersonMock.jo()], selector);
        });
    });

    describe('count', () => {
        it('call the Count operation class with selector', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8', '3']);
            const predicate = (it: string) => it === '3';
            jest.spyOn(countOperation, 'default');

            // WHEN
            const result = list.count(predicate);

            // THEN
            const expected = 2;
            expect(result).toEqual(expected);
            expect(countOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8', '3'], predicate);
        });

        it('call the Count operation class without selector', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(countOperation, 'default');

            // WHEN
            const result = list.count();

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(countOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('indexOf', () => {
        it('call the Clear operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            const value = '4';
            jest.spyOn(indexOfOperation, 'default');

            // WHEN
            const result = list.indexOf(value);

            // THEN
            expect(result).toEqual(3);
            expect(indexOfOperation.default).toHaveBeenCalled();
        });
    });

    describe('size', () => {
        it('call the Size operation class', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(sizeOperation, 'default');

            // WHEN
            const result = list.size();

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(sizeOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('toArray', () => {
        it('call the ToArray operation class with selector', () => {
            // GIVEN
            const list = new List(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(toArrayOperation, 'default');

            // WHEN
            const result = list.toArray();

            // THEN
            const expected = ['1', '2', '3', '4', '5', '6', '7', '8'];
            expect(result).toEqual(expected);
            expect(toArrayOperation.default).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });
});
