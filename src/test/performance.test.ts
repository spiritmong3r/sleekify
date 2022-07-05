import {List} from '../modules/list/list';
import {PersonMock} from './mocks/person.mock';
import {Person} from './models/person';

describe.skip('performance', () => {

    it('filter', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.filter(it => it.age === 18);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('onEach', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.onEach(it => it.age = 18);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('forEach', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.forEach(it => it.age = 18);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('map', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.map(it => it.age);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('flatMap', () => {
        // GIVEN
        const values = new List<List<Person>>(Array.from(Array(10_000_000).keys()).map(() => new List([PersonMock.bob()])));
        const startTime = new Date().getTime();

        // WHEN
        values.flatMap(it => it);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('flatten', () => {
        // GIVEN
        const values = new List<List<Person>>(Array.from(Array(10_000_000).keys()).map(() => new List([PersonMock.bob()])));
        const startTime = new Date().getTime();

        // WHEN
        values.flatten();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('reverse', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.reverse();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    describe('sort', () => {
        it('native', () => {
            // GIVEN
            const values = Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob());
            const startTime = new Date().getTime();

            // WHEN
            values.sort();

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });

        it('without selector', () => {
            // GIVEN
            const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.sort();

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });

        // TODO check if it can be improved
        it('with selector', () => {
            // GIVEN
            const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.sort(it => it.age);

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });
    });

    describe('distinct', () => {
        // TODO: check how to improve distinct
        it('without selector', () => {
            // GIVEN
            const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.distinct();

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });

        it('with selector', () => {
            // GIVEN
            const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.distinct(it => it.name);

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);

        });
    });

    it('take', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.take(10_000_000);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('takeLast', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.takeLast(10_000_000);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('drop', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.drop(1_000_000);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('dropLast', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.dropLast(1_000_000);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('find', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.find(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('first', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.first(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('firstOrNull', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.firstOrNull(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('last', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.last(it => it.firstName === 'Bob');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('lastOrNull', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.lastOrNull(it => it.firstName === 'Bob');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('reduce', () => {
        // GIVEN
        const values = new List<number>(Array.from(Array(10_000_000).keys()).map(() => 1));
        const startTime = new Date().getTime();

        // WHEN
        values.reduce((acc, value) => acc + value, 0);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('groupBy', () => {
        // TODO check if it can be improved
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.groupBy(it => it.name);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('min', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.min(it => it.name);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('max', () => {
        // GIVEN
        const values = new List<Person>(Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob()));
        const startTime = new Date().getTime();

        // WHEN
        values.max(it => it.name);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('some', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.some(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('any', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.any(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('none', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.none(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('all', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.all(it => it.firstName === 'Jo');

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('contains', () => {
        // TODO check if it can be improved
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.contains(PersonMock.jo());

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('containsAll', () => {
        // TODO check if it can be improved
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.containsAll([PersonMock.jo()]);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('isEmpty', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.isEmpty();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('isNotEmpty', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.isNotEmpty();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('join', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.join();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('sum', () => {
        // TODO check if it can be improved
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.sum(it => it.age);

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    describe('count', () => {
        it('without predicate', () => {
            // GIVEN
            const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
            const startTime = new Date().getTime();

            // WHEN
            values.count();

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });

        it('with predicate', () => {
            // GIVEN
            const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
            const startTime = new Date().getTime();

            // WHEN
            values.count(it => it.firstName === 'Bob');

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });
    });

    it('size', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.size();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

    it('toArray', () => {
        // GIVEN
        const values = new List<Person>(...[Array.from(Array(10_000_000).keys()).map(() => PersonMock.bob())], PersonMock.jo());
        const startTime = new Date().getTime();

        // WHEN
        values.toArray();

        // THEN
        const endTime = new Date().getTime();
        const timeElapsed = endTime - startTime;
        console.log(`sleekify method => ${endTime} - ${startTime} = ${timeElapsed} ms`);
    });

});
