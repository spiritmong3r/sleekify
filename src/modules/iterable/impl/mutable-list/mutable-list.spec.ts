import {PersonMock} from '../../../../test/mocks/person.mock';
import {Person} from '../../../../test/models/person';
import {AddOperation} from '../../operations/add/add.operation';
import {DistinctOperation} from '../../operations/distinct/distinct.operation';
import {DropLastOperation} from '../../operations/drop-last/drop-last.operation';
import {DropOperation} from '../../operations/drop/drop.operation';
import {FilterOperation} from '../../operations/filter/filter.operation';
import {FlatmapOperation} from '../../operations/flatmap/flatmap.operation';
import {FlattenOperation} from '../../operations/flatten/flatten.operation';
import {MapOperation} from '../../operations/map/map.operation';
import {OnEachOperation} from '../../operations/on-each/on-each.operation';
import {RemoveAllOperation} from '../../operations/remove-all/remove-all.operation';
import {RemoveFirstOperation} from '../../operations/remove-first/remove-first.operation';
import {RemoveLastOperation} from '../../operations/remove-last/remove-last.operation';
import {RemoveOperation} from '../../operations/remove/remove.operation';
import {ReverseOperation} from '../../operations/reverse/reverse.operation';
import {SortOperation} from '../../operations/sort/sort.operation';
import {TakeLastOperation} from '../../operations/take-last/take-last.operation';
import {TakeOperation} from '../../operations/take/take.operation';
import {MutableList} from './mutable-list';
import restoreAllMocks = jest.restoreAllMocks;

describe('MutableList', () => {

    afterEach(() => restoreAllMocks());

    describe('add', () => {
        it('add a new element to the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(AddOperation, 'execute');

            // WHEN
            const result = list.add('9');

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
            expect(result).toEqual(expected);
            expect(AddOperation.execute).toHaveBeenCalled();
        });
    });

    describe('remove', () => {
        it('remove an element at the given index from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(RemoveOperation, 'execute');

            // WHEN
            const result = list.remove(0);

            // THEN
            const expected = new MutableList(['2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(RemoveOperation.execute).toHaveBeenCalled();
        });
    });

    describe('removeFirst', () => {
        it('remove first element from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(RemoveFirstOperation, 'execute');

            // WHEN
            const result = list.removeFirst();

            // THEN
            const expected = new MutableList(['2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(RemoveFirstOperation.execute).toHaveBeenCalled();
        });
    });

    describe('removeLast', () => {
        it('remove last element from the array', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(RemoveLastOperation, 'execute');

            // WHEN
            const result = list.removeLast();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7']);
            expect(result).toEqual(expected);
            expect(RemoveLastOperation.execute).toHaveBeenCalled();
        });
    });

    describe('removeAll', () => {
        it('remove all elements matching the given predicate', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8', '5']);
            const predicate = (it: string) => it === '5';
            jest.spyOn(RemoveAllOperation, 'execute');

            // WHEN
            const result = list.removeAll(predicate);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(RemoveAllOperation.execute).toHaveBeenCalled();
        });
    });

    describe('filter', () => {
        it('call the Filter operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            const predicate = (it: string) => it !== '5';
            jest.spyOn(FilterOperation, 'execute');

            // WHEN
            const result = list.filter(predicate);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(FilterOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('onEach', () => {
        it('call the OnEach operation class', () => {
            // GIVEN
            const list = new MutableList([PersonMock.bob(), PersonMock.jo(), PersonMock.jane()]);
            const selector = (it: Person) => it.age = 18;
            jest.spyOn(OnEachOperation, 'execute');

            // WHEN
            const result = list.onEach(selector);

            // THEN
            const expected = new MutableList([{...PersonMock.bob(), age: 18}, {...PersonMock.jo(), age: 18}, {...PersonMock.jane(), age: 18}]);
            expect(result).toEqual(expected);
            expect(OnEachOperation.execute).toHaveBeenCalled();
        });
    });

    describe('map', () => {
        it('call the Map operation class', () => {
            // GIVEN
            const list = new MutableList(['a', 'b', 'c']);
            const selector = (it: string) => it.toUpperCase();
            jest.spyOn(MapOperation, 'execute');

            // WHEN
            const result = list.map(selector);

            // THEN
            const expected = new MutableList(['A', 'B', 'C']);
            expect(result).toEqual(expected);
            expect(MapOperation.execute).toHaveBeenCalledWith(['a', 'b', 'c'], selector);
        });
    });

    describe('flatMap', () => {
        it('call the Flatmap operation class', () => {
            // GIVEN
            const list = new MutableList([[PersonMock.ted()], [PersonMock.bob()]]);
            const selector = (it: Person[]) => it.map(person => person.firstName);
            jest.spyOn(FlatmapOperation, 'execute');

            // WHEN
            const result = list.flatMap(selector);

            // THEN
            const expected = new MutableList(['Ted', 'Bob']);
            expect(result).toEqual(expected);
            expect(FlatmapOperation.execute).toHaveBeenCalledWith([[PersonMock.ted()], [PersonMock.bob()]], selector);
        });
    });

    describe('flatten', () => {
        it('call the Flatten operation class', () => {
            // GIVEN
            const list = new MutableList([['1', '2', '3', '4', '5', '6'], ['7', '8']]);
            jest.spyOn(FlattenOperation, 'execute');

            // WHEN
            const result = list.flatten(1);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(FlattenOperation.execute).toHaveBeenCalledWith([['1', '2', '3', '4', '5', '6'], ['7', '8']], 1);
        });
    });

    describe('reverse', () => {
        it('call the Reverse operation class', () => {
            // GIVEN
            const list = new MutableList([1, 2, 3, 4, 5, 6, 7, 8]);
            jest.spyOn(ReverseOperation, 'execute');

            // WHEN
            const result = list.reverse();

            // THEN
            const expected = new MutableList([8, 7, 6, 5, 4, 3, 2, 1]);
            expect(result).toEqual(expected);
            expect(ReverseOperation.execute).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });

    describe('sort', () => {
        it('call the Sort operation class without selector', () => {
            // GIVEN
            const list = new MutableList(['2', '3', '4', '5', '6', '1', '7', '8']);
            jest.spyOn(SortOperation, 'execute');

            // WHEN
            const result = list.sort();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(SortOperation.execute).toHaveBeenCalledWith(['2', '3', '4', '5', '6', '1', '7', '8'], undefined);
        });

        it('call the Sort operation class with selector', () => {
            // GIVEN
            const list = new MutableList([PersonMock.jane(), PersonMock.bob()]);
            const selector = (it: Person) => it.age;
            jest.spyOn(SortOperation, 'execute');

            // WHEN
            const result = list.sort(selector);

            // THEN
            const expected = new MutableList([PersonMock.bob(), PersonMock.jane()]);
            expect(result).toEqual(expected);
            expect(SortOperation.execute).toHaveBeenCalledWith([PersonMock.jane(), PersonMock.bob()], selector);
        });
    });

    describe('distinct', () => {
        it('call the Distinct operation class without selector', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '3', '7', '8']);
            jest.spyOn(DistinctOperation, 'execute');

            // WHEN
            const result = list.distinct();

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(DistinctOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '3', '7', '8'], undefined);
        });

        it('call the Distinct operation class with selector', () => {
            // GIVEN
            const list = new MutableList([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}]);
            const selector = (it: any) => it.name;
            jest.spyOn(DistinctOperation, 'execute');

            // WHEN
            const result = list.distinct(selector);

            // THEN
            const expected = new MutableList([{name: 'bob'}, {name: 'ted'}]);
            expect(result).toEqual(expected);
            expect(DistinctOperation.execute).toHaveBeenCalledWith([{name: 'bob'}, {name: 'bob'}, {name: 'ted'}], selector);
        });
    });

    describe('take', () => {
        it('call the Take operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(TakeOperation, 'execute');

            // WHEN
            const result = list.take(5);

            // THEN
            const expected = new MutableList(['1', '2', '3', '4', '5']);
            expect(result).toEqual(expected);
            expect(TakeOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('takeLast', () => {
        it('call the TakeLast operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(TakeLastOperation, 'execute');

            // WHEN
            const result = list.takeLast(5);

            // THEN
            const expected = new MutableList(['4', '5', '6', '7', '8']);
            expect(result).toEqual(expected);
            expect(TakeLastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('drop', () => {
        it('call the Drop operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(DropOperation, 'execute');

            // WHEN
            const result = list.drop(5);

            // THEN
            const expected = new MutableList(['6', '7', '8']);
            expect(result).toEqual(expected);
            expect(DropOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('dropLast', () => {
        it('call the DropLast operation class', () => {
            // GIVEN
            const list = new MutableList(['1', '2', '3', '4', '5', '6', '7', '8']);
            jest.spyOn(DropLastOperation, 'execute');

            // WHEN
            const result = list.dropLast(5);

            // THEN
            const expected = new MutableList(['1', '2', '3']);
            expect(result).toEqual(expected);
            expect(DropLastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

});
