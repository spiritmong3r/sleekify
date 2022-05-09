import {List} from '../modules/list/list';
import {PersonMock} from './mocks/person.mock';
import {Person} from './models/person';

describe.skip('performances', () => {

    describe('map', () => {
        it('case 0', () => {
            // GIVEN
            const values: Person[] = Array.from(Array(60_000_000).keys()).map(() => PersonMock.bob());
            const startTime = new Date().getTime();

            // WHEN
            values.map(it => it.age);

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`case 0 => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });

        it('case 1', () => {
            // GIVEN
            const values = new List<Person>().reset(Array.from(Array(55_000_000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.map(it => it.age);

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`case 1 => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });
    });

    describe('flatmap', () => {
        it('case 1', () => {
            // GIVEN
            const values = new List(...Array.from(Array(62000).keys()).map(() => PersonMock.bob()));
            const startTime = new Date().getTime();

            // WHEN
            values.map(it => it.age);

            // THEN
            const endTime = new Date().getTime();
            const timeElapsed = endTime - startTime;
            console.log(`case 1 => ${endTime} - ${startTime} = ${timeElapsed} ms`);
        });
    });

});
