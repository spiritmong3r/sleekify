import {List} from './list';
import {JoinProps} from './models/JoinProps';
import {AllOperation} from './operations/all/all.operation';
import {AnyOperation} from './operations/any/any.operation';
import {ContainsOperation} from './operations/contains/contains.operation';
import {CountOperation} from './operations/count/count.operation';
import {DistinctByOperation} from './operations/distinct-by/distinct-by.operation';
import {DistinctOperation} from './operations/distinct/distinct.operation';
import {DropLastOperation} from './operations/drop-last/drop-last.operation';
import {DropOperation} from './operations/drop/drop.operation';
import {FilterOperation} from './operations/filter/filter.operation';
import {FindOperation} from './operations/find/find.operation';
import {FirstOrNullOperation} from './operations/first-or-null/first-or-null.operation';
import {FirstOperation} from './operations/first/first.operation';
import {FlatmapOperation} from './operations/flatmap/flatmap.operation';
import {FlattenOperation} from './operations/flatten/flatten.operation';
import {IsEmptyOperation} from './operations/is-empty/is-empty.operation';
import {JoinOperation} from './operations/join/join.operation';
import {LastOrNullOperation} from './operations/last-or-null/last-or-null.operation';
import {LastOperation} from './operations/last/last.operation';
import {MapOperation} from './operations/map/map.operation';
import {MaxByOperation} from './operations/max-by/max-by.operation';
import {MinByOperation} from './operations/min-by/min-by.operation';
import {NoneOperation} from './operations/none/none.operation';
import {OnEachOperation} from './operations/on-each/on-each.operation';
import {ReduceOperation} from './operations/reduce/reduce.operation';
import {ReverseOperation} from './operations/reverse/reverse.operation';
import {SomeOperation} from './operations/some/some.operation';
import {SortByOperation} from './operations/sort-by/sort-by.operation';
import {SumOperation} from './operations/sum/sum.operation';
import {TakeLastOperation} from './operations/take-last/take-last.operation';
import {TakeOperation} from './operations/take/take.operation';
import {ToArrayOperation} from './operations/to-array/to-array.operation';

describe('List', () => {

    describe('reset', () => {
        it('assign a new value to the array', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');

            // WHEN
            const result = list.reset(['1', '3', '5']);

            // THEN
            const expected = new List('1', '3', '5');
            expect(result).toEqual(expected);
        });
    });

    describe('add', () => {
        it('add an element to the array', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');

            // WHEN
            const result = list.add('9');

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8', '9');
            expect(result).toEqual(expected);
        });
    });

    describe('filter', () => {
        it('call the Filter operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(FilterOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.filter(predicate);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(FilterOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('onEach', () => {
        it('call the OnEach operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(OnEachOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.onEach(callback);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(OnEachOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('map', () => {
        it('call the Map operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(MapOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.map(callback);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(MapOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('flatMap', () => {
        it('call the Flatmap operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(FlatmapOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.flatMap(callback);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(FlatmapOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('flatten', () => {
        it('call the Flatten operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(FlattenOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.flatten(1);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(FlattenOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 1);
        });
    });

    describe('reverse', () => {
        it('call the Reverse operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(ReverseOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.reverse();

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(ReverseOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('sortBy', () => {
        it('call the SortBy operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(SortByOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.sortBy(callback);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(SortByOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('distinct', () => {
        it('call the Distinct operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(DistinctOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.distinct();

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(DistinctOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('distinctBy', () => {
        it('call the DistinctBy operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(DistinctByOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.distinctBy(callback);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(DistinctByOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('take', () => {
        it('call the Take operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(TakeOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.take(5);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(TakeOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('takeLast', () => {
        it('call the TakeLast operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(TakeLastOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.takeLast(5);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(TakeLastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('drop', () => {
        it('call the Drop operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(DropOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.drop(5);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(DropOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('dropLast', () => {
        it('call the DropLast operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(DropLastOperation, 'execute').mockImplementation(() => new List('1', '2', '3', '4', '5', '6', '7', '8'));

            // WHEN
            const result = list.dropLast(5);

            // THEN
            const expected = new List('1', '2', '3', '4', '5', '6', '7', '8');
            expect(result).toEqual(expected);
            expect(DropLastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], 5);
        });
    });

    describe('find', () => {
        it('call the Find operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(FindOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.find(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(FindOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('first', () => {
        it('call the First operation class with a predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(FirstOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.first(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(FirstOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the First operation class without predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(FirstOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.first();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(FirstOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('firstOrNull', () => {
        it('call the FirstOrNull operation class with a predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(FirstOrNullOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.firstOrNull(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(FirstOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the FirstOrNull operation class without predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(FirstOrNullOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.firstOrNull();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(FirstOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
        it('call the FirstOrNull operation class, return undefined', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(FirstOrNullOperation, 'execute').mockImplementation(() => undefined);

            // WHEN
            const result = list.firstOrNull();

            // THEN
            expect(result).toBeUndefined();
            expect(FirstOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('last', () => {
        it('call the Last operation class with a predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(LastOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.last(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(LastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the First operation class without predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(LastOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.last();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(LastOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('lastOrNull', () => {
        it('call the LastOrNull operation class with a predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(LastOrNullOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.lastOrNull(predicate);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(LastOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the LastOrNull operation class without predicate', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(LastOrNullOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.lastOrNull();

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(LastOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
        it('call the LastOrNull operation class, return undefined', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(LastOrNullOperation, 'execute').mockImplementation(() => undefined);

            // WHEN
            const result = list.lastOrNull();

            // THEN
            expect(result).toBeUndefined();
            expect(LastOrNullOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('reduce', () => {
        it('call the Reduce operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(ReduceOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.reduce(callback, '');

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(ReduceOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback, '');
        });
    });

    describe('minBy', () => {
        it('call the MinBy operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(MinByOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.minBy(callback);

            // THEN
            const expected = '1';
            expect(result).toEqual(expected);
            expect(MinByOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('maxBy', () => {
        it('call the MaxBy operation class', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(MaxByOperation, 'execute').mockImplementation(() => '8');

            // WHEN
            const result = list.maxBy(callback);

            // THEN
            const expected = '8';
            expect(result).toEqual(expected);
            expect(MaxByOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
    });

    describe('some', () => {
        it('call the Some operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(SomeOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.some(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(SomeOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the Some operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(SomeOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.some(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(SomeOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('any', () => {
        it('call the Any operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(AnyOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.any(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(AnyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the Any operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(AnyOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.any(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(AnyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('none', () => {
        it('call the None operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(NoneOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.none(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(NoneOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the None operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(NoneOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.none(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(NoneOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('all', () => {
        it('call the All operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(AllOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.all(predicate);

            // THEN
            expect(result).toBeTruthy();
            expect(AllOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the All operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(AllOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.all(predicate);

            // THEN
            expect(result).toBeFalsy();
            expect(AllOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
    });

    describe('contains', () => {
        it('call the Contains operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(ContainsOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.contains('1');

            // THEN
            expect(result).toBeTruthy();
            expect(ContainsOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], '1');
        });
        it('call the Contains operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(ContainsOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.contains('9');

            // THEN
            expect(result).toBeFalsy();
            expect(ContainsOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], '9');
        });
    });

    describe('isEmpty', () => {
        it('call the IsEmpty operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(IsEmptyOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.isEmpty();

            // THEN
            expect(result).toBeTruthy();
            expect(IsEmptyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
        it('call the IsEmpty operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(IsEmptyOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.isEmpty();

            // THEN
            expect(result).toBeFalsy();
            expect(IsEmptyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('isNotEmpty', () => {
        it('call the IsEmpty operation class, return true', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(IsEmptyOperation, 'execute').mockImplementation(() => false);

            // WHEN
            const result = list.isNotEmpty();

            // THEN
            expect(result).toBeTruthy();
            expect(IsEmptyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
        it('call the IsNotEmpty operation class, return false', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(IsEmptyOperation, 'execute').mockImplementation(() => true);

            // WHEN
            const result = list.isNotEmpty();

            // THEN
            expect(result).toBeFalsy();
            expect(IsEmptyOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

    describe('join', () => {
        it('call the Join operation class with both parameters', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const props: JoinProps = {};
            const callback = (it: string) => it;
            jest.spyOn(JoinOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.join(props, callback);

            // THEN
            expect(result).toBeTruthy();
            expect(JoinOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], props, callback);
        });
        it('call the Join operation class without parameters', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(JoinOperation, 'execute').mockImplementation(() => '1');

            // WHEN
            const result = list.join();

            // THEN
            expect(result).toBeTruthy();
            expect(JoinOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined, undefined);
        });
    });

    describe('sum', () => {
        it('call the Sum operation class with callback', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const callback = (it: string) => it;
            jest.spyOn(SumOperation, 'execute').mockImplementation(() => 8);

            // WHEN
            const result = list.sum(callback);

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(SumOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], callback);
        });
        it('call the Sum operation class without callback', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(SumOperation, 'execute').mockImplementation(() => 8);

            // WHEN
            const result = list.sum();

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(SumOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('count', () => {
        it('call the Count operation class with callback', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            const predicate = () => true;
            jest.spyOn(CountOperation, 'execute').mockImplementation(() => 8);

            // WHEN
            const result = list.count(predicate);

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(CountOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], predicate);
        });
        it('call the Count operation class without callback', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(CountOperation, 'execute').mockImplementation(() => 8);

            // WHEN
            const result = list.count();

            // THEN
            const expected = 8;
            expect(result).toEqual(expected);
            expect(CountOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8'], undefined);
        });
    });

    describe('toArray', () => {
        it('call the ToArray operation class with callback', () => {
            // GIVEN
            const list = new List('1', '2', '3', '4', '5', '6', '7', '8');
            jest.spyOn(ToArrayOperation, 'execute').mockImplementation(() => ['1', '2', '3', '4', '5', '6', '7', '8']);

            // WHEN
            const result = list.toArray();

            // THEN
            const expected = ['1', '2', '3', '4', '5', '6', '7', '8'];
            expect(result).toEqual(expected);
            expect(ToArrayOperation.execute).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6', '7', '8']);
        });
    });

});
