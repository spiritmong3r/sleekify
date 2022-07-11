import Benchmark from "benchmark";
import {List} from "../../lib/modules/iterable/impl/list/list.js";
import {PersonMock} from "../../lib/test/mocks/person.mock.js";

const suite = new Benchmark.Suite;
suite
    .add('List#filter', () => {
        new List(Array.from(Array(1_000_000).keys()).map(() => PersonMock.bob())).filter(it => it.age === 18);
    })
    .add('Array#filter', () => {
        Array.from(Array(1_000_000).keys()).map(() => PersonMock.bob()).filter(it => it.age === 18);
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log('Fastest is ' + suite.filter('fastest').map('name'));
    })
    .run({'async': true});
