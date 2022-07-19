const Benchmark = require('benchmark');
const {List, MutableList} = require("../../dist/cjs");

const bob = {name: 'Todd', firstName: 'Bob', age: 18, country: {name: 'US'}}

const listSuite = new Benchmark.Suite;
listSuite
    .add('List#filter', () => {
        new List(Array.from(Array(1_000).keys()).map(() => ({...bob}))).filter(it => it.age === 18);
    })
    .add('Array#filter', () => {
        Array.from(Array(1_000).keys()).map(() => ({...bob})).filter(it => it.age === 18);
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log(`Fastest is ${listSuite.filter('fastest').map('name')}`);
    })
    .run({'async': true});

const mutableListSuite = new Benchmark.Suite;
mutableListSuite
    .add('MutableList#filter', () => {
        new MutableList(Array.from(Array(1_000).keys()).map(() => ({...bob}))).filter(it => it.age === 18);
    })
    .add('Array#filter', () => {
        Array.from(Array(1_000).keys()).map(() => ({...bob})).filter(it => it.age === 18);
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log(`Fastest is ${mutableListSuite.filter('fastest').map('name')}`);
    })
    .run({'async': true});
