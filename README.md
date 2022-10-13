<h3 align=center>
    <img src="logo_sleekify.png" alt="Sublime's custom image"/>
</h3>
<h4 align=center>
    <div>Typescript library that offers elegant and powerful utility functions.</div>
</h4>

<br />

<div align="center">

[![npm version](https://img.shields.io/badge/npm-v1.0.14-blue?style=flat)](https://www.npmjs.com/package/sleekify)
[![codecov](https://codecov.io/gh/spiritmong3r/sleekify/branch/main/graph/badge.svg?token=HLBF8VHIGS)](https://codecov.io/gh/spiritmong3r/sleekify)
[![spiritmong3r](https://circleci.com/gh/spiritmong3r/sleekify.svg?style=shield)](https://app.circleci.com/pipelines/github/spiritmong3r/sleekify)

</div>

## Why sleekify ?

Sleekify provides powerful features that make your code more lightweight.

- **Fluent iterable API**

  Offers many operations thanks to both `List` and `MutableList`, which are iterable implementations.

- **Type safe**

  The whole librairy is implemented in typescript.

- **Powerful utility function**

  `when` function is a switch-like **expression**, it is more elegant than traditional conditional statements.

## Getting start

### Installation

```sh
npm i sleekify
```

### Usage

```ts
import {List, MutableList, listOf, mutableListOf, when} from 'sleekify';
```

## API documentation

<br/>
<details>
<summary><code><font size="4"><b>List</b></font></code></summary>
<br/>

`List` is an array wrapper that offers many operations. It is an immutable iterable.

⇨ <code>all</code>

> Check if every element matches the predicate, if that's the case then returns `true`, else `false`.

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.all((value) => !isNaN(value)); // returns true
values.all((value) => isNaN(value)); // returns false
```

⇨ <code>any</code>

> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`.
>
> Alias for `some` function.

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.any((value) => value === 3); // returns true
values.any((value) => value === 0); // returns false
```

⇨ <code>contains</code>

> Check if there's at least one element matching the given entry, if that's the case then returns `true`, else `false`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.contains({name: 'Jo', age: 22}); // returns true
values.contains({name: 'Jo', age: 23}); // returns false
```

⇨ <code>containsAll</code>

> Check if the given entries are presents in the list, if that's the case then returns `true`, else `false`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.containsAll([
    {name: 'Bob', age: 18},
    {name: 'Jo', age: 22},
]); // returns true
values.containsAll({name: 'Bob', age: 18}, {name: 'Jo', age: 23}); // returns false
```

⇨ <code>count</code>

> Returns the number of elements matching the given predicate. If no predicate then behaves just like `length`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.count(); // returns 2
values.count((value) => value.age === 18); // returns 1
```

⇨ <code>distinct</code>

> Returns a new `List` without any duplicates. If a predicate is given then only duplicates among the matching elements will be removed

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo2: Person = {name: 'Jo', age: 22};
const jo3: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo2, jo3]);
values.distinct(); // returns List([bob, jo, jo3])
values.distinct((value) => value.name === 'Jo'); // returns List([bob, jo])
```

⇨ <code>drop</code>

> Returns a new `List` without the n first elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.drop(1); // returns List([jo])
```

⇨ <code>dropLast</code>

> Returns a new `List` without the n last elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.dropLast(1); // returns List([bob])
```

⇨ <code>filter</code>

> Returns a new `List` with only the elements matching the predicate

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.filter((value) => value.age === 18); // returns List([bob])
```

⇨ <code>find</code>

> Returns the first element matching the predicate

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo1]);
values.first((value) => value.name === 'jo'); // returns jo
values.first((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>first</code>

> Returns the first element matching the predicate, throw an error if there's not matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo1]);
values.first((value) => value.name === 'jo'); // returns jo
values.first((value) => value.name === 'jane'); // throw an error 'No value matches the predicate'
```

⇨ <code>firstOrUndefined</code>

> Returns the first element matching the predicate, alias for `find` function

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo1]);
values.firstOrUndefined((value) => value.name === 'jo'); // returns jo
values.firstOrUndefined((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>flatMap</code>

> Returns a new `List`, apply the given transformer and then flatten (1 level deep) the results

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([[bob], jo]);
values.flatMap((value) => value.name); // returns List(['bob', 'jo'])
```

⇨ <code>flatten</code>

> Returns a new `List` flattened 1 level deep by default, if a depth is specified then apply it

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jane: Person = {name: 'Jo', age: 22};

const values = new List([[bob], jo, [[jane]]]);
values.flatten(); // returns List([bob, jo, [jane]])
values.flatten(2); // returns List([bob, jo, jane])
```

⇨ <code>forEach</code>

> void function that applies a given action on every elements of the List

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.forEach((value) => (value.age = 18)); // returns nothing but every Person of the List are now 18
```

⇨ <code>get</code>

> Returns the element at the given index or `undefined` if the index doesn't exists

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.get(0); // returns bob
values.get(2); // returns undefined
```

⇨ <code>groupBy</code>

> Returns a Map object where the key is provided by the given selector and value is an array of all the elements matching this key

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jane: Person = {name: 'Jane', age: 22};

const values = new List([bob, jo, jane]);
values.groupBy((value) => value.age);
// returns a map like so:
// Map([
//    [18, [{name: 'Bob', age: 18}]],
//    [22, [{name: 'Jo', age: 22}, {name: 'Jane', age: 22}]]
// ])
```

⇨ <code>indexOf</code>

> Find the first index at which a given element can be found in the array

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.indexOf(5); // returns 4
values.indexOf(11); // returns -1
```

⇨ <code>isEmpty</code>

> Check if the List is empty or not

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

new List([bob, jo]).isEmpty(); // returns false
new List().isEmpty(); // returns true
```

⇨ <code>isNotEmpty</code>

> Check if the List is empty or not

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

new List([bob, jo]).isNotEmpty(); // returns true
new List().isNotEmpty(); // returns false
```

⇨ <code>join</code>

> Returns a string resulting from converting each element of the List to a string and then concatenating them together

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.join({separator: ' / '}, (value) => value.name); // returns 'bob / jo'
```

⇨ <code>last</code>

> Returns the last element matching the predicate, throw an error if there's not matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo1]);
values.last((value) => value.name === 'jo'); // returns jo1
values.last((value) => value.name === 'jane'); // throw an error 'No value matches the predicate'
```

⇨ <code>lastOrUndefined</code>

> Returns the last element matching the predicate, or `undefined` if no matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new List([bob, jo, jo1]);
values.lastOrUndefined((value) => value.name === 'jo'); // returns jo1
values.lastOrUndefined((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>map</code>

> Returns a new `List` where a given transformer is applied on every elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.map((value) => {
    value.age = 18;
    return value;
}); // returns a new List similar to values but where every Person is now 18
```

⇨ <code>max</code>

> Returns the max value or object according to the given selector.
>
> If no selector, then just returns the max among all values. The array must consist of numbers only, otherwise an error is thrown.

**examples :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.max(); // returns 5
```

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.max((value) => value.age); // returns jo
values.max(); // throw an Error 'Type of array is not number'
```

⇨ <code>min</code>

> Returns the min value or object according to the given selector.
>
> If no selector, then just returns the min among all values. The array must consist of numbers only, otherwise an error is thrown.

**examples :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.min(); // returns 1
```

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.min((value) => value.age); // returns bob
values.min(); // throw an Error 'Type of array is not number'
```

⇨ <code>none</code>

> Check if there's no element matching the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.none((value) => value === 3); // returns false
values.none((value) => value === 0); // returns true
```

⇨ <code>onEach</code>

> Returns a new `List` where a given action is applied on every elements, the selector silently returns `this`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.onEach((value) => (value.age = 18)); // returns a new List similar to values but where every Person is now 18
```

⇨ <code>reduce</code>

> Returns a value obtained after an operation (accumulator) is applied on every element of the List.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.reduce((acc, value) => acc + value.age, 0); // returns 40
```

⇨ <code>reverse</code>

> Returns a new `List` where all elements are reversed: first element become last, last become first and so on.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.reverse(); // returns List([jo, bob])
```

⇨ <code>size</code>

> Returns the number of elements in the List.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.size(); // returns 2
```

⇨ <code>some</code>

> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`.

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.some((value) => value === 3); // returns true
values.some((value) => value === 0); // returns false
```

⇨ <code>sort</code>

> Returns a new `List` where elements are sorted according to the selector if given.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([jo, bob]);
values.sort((value) => value.age); // returns List([bob, jo])
```

⇨ <code>subList</code>

> Create a new list containing the elements between the given indexes.

**example :**

```ts
const values = new List([1, 2, 3, 4, 5]);
values.subList(1, 3); // returns List([2, 3]);
values.subList(2); // returns List([3, 4, 5]);
values.subList(-2); // returns List([4, 5]);
```

⇨ <code>sum</code>

> Calculate the sum of the array according to the selector if given.
>
> If no selector is given, the `List` must be composed of numbers otherwise an error will be thrown.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.sum((value) => value.age); // returns 40
values.sum(); // throw an error 'Type of array is not number'
```

⇨ <code>take</code>

> Returns a new `List` with only the n first elements.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.take(1); // returns List([bob])
```

⇨ <code>takeLast</code>

> Returns a new `List` with only the n last elements.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.takeLast(1); // returns List([jo])
```

⇨ <code>toArray</code>

> Returns an array out of the `List`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.toArray(); // returns [bob, jo]
```

</details>

<br/>
<details>
<summary><code><font size="4"><b>MutableList</b></font></code></summary>
<br/>

`MutableList` is an array wrapper that offers many operations. It is a mutable iterable.

⇨ <code>add</code>

> Add a new element to the current `MutableList` and returns `this`.
>
> Mutable operation.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.add(6); // returns MutableList([1, 2, 3, 4, 5, 6])
```

⇨ <code>all</code>

> Check if every element matches the predicate, if that's the case then returns `true`, else `false`.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.all((value) => !isNaN(value)); // returns true
values.all((value) => isNaN(value)); // returns false
```

⇨ <code>any</code>

> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`.
>
> Alias for `some` function.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.any((value) => value === 3); // returns true
values.any((value) => value === 0); // returns false
```

⇨ <code>clear</code>

> Remove all elements from the current list.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List([bob, jo]);
values.clear(); // returns an empty MutableList
```

⇨ <code>contains</code>

> Check if there's at least one element matching the given entry, if that's the case then returns `true`, else `false`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.contains({name: 'Jo', age: 22}); // returns true
values.contains({name: 'Jo', age: 23}); // returns false
```

⇨ <code>containsAll</code>

> Check if the given entries are presents in the list, if that's the case then returns `true`, else `false`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.containsAll([
    {name: 'Bob', age: 18},
    {name: 'Jo', age: 22},
]); // returns true
values.containsAll({name: 'Bob', age: 18}, {name: 'Jo', age: 23}); // returns false
```

⇨ <code>count</code>

> Returns the number of elements matching the given predicate. If no predicate then behaves just like `length`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.count(); // returns 2
values.count((value) => value.age === 18); // returns 1
```

⇨ <code>distinct</code>

> Returns a new `MutableList` without any duplicates. If a predicate is given then only duplicates among the matching elements will be removed

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo2: Person = {name: 'Jo', age: 22};
const jo3: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo2, jo3]);
values.distinct(); // returns MutableList([bob, jo, jo3])
values.distinct((value) => value.name === 'Jo'); // returns MutableList([bob, jo])
```

⇨ <code>drop</code>

> Returns a new `MutableList` without the n first elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.drop(1); // returns MutableList([jo])
```

⇨ <code>dropLast</code>

> Returns a new `MutableList` without the n last elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.dropLast(1); // returns MutableList([bob])
```

⇨ <code>filter</code>

> Returns a new `MutableList` with only the elements matching the predicate

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.filter((value) => value.age === 18); // returns MutableList([bob])
```

⇨ <code>find</code>

> Returns the first element matching the predicate

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo1]);
values.first((value) => value.name === 'jo'); // returns jo
values.first((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>first</code>

> Returns the first element matching the predicate, throw an error if there's not matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo1]);
values.first((value) => value.name === 'jo'); // returns jo
values.first((value) => value.name === 'jane'); // throw an error 'No value matches the predicate'
```

⇨ <code>firstOrUndefined</code>

> Returns the first element matching the predicate, alias for `find` function

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo1]);
values.firstOrUndefined((value) => value.name === 'jo'); // returns jo
values.firstOrUndefined((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>flatMap</code>

> Returns a new `MutableList`, apply the given transformer and then flatten (1 level deep) the results

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([[bob], jo]);
values.flatMap((value) => value.name); // returns MutableList(['bob', 'jo'])
```

⇨ <code>flatten</code>

> Returns a new `MutableList` flattened 1 level deep by default, if a depth is specified then apply it

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jane: Person = {name: 'Jo', age: 22};

const values = new MutableList([[bob], jo, [[jane]]]);
values.flatten(); // returns MutableList([bob, jo, [jane]])
values.flatten(2); // returns MutableList([bob, jo, jane])
```

⇨ <code>forEach</code>

> void function that applies a given action on every elements of the MutableList

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.forEach((value) => (value.age = 18)); // returns nothing but every Person of the MutableList are now 18
```

⇨ <code>get</code>

> Returns the element at the given index or `undefined` if the index doesn't exists

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.get(0); // returns bob
values.get(2); // returns undefined
```

⇨ <code>groupBy</code>

> Returns a Map object where the key is provided by the given selector and value is an array of all the elements matching this key

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jane: Person = {name: 'Jane', age: 22};

const values = new MutableList([bob, jo, jane]);
values.groupBy((value) => value.age);
// returns a map like so:
// Map([
//    [18, [{name: 'Bob', age: 18}]],
//    [22, [{name: 'Jo', age: 22}, {name: 'Jane', age: 22}]]
// ])
```

⇨ <code>isEmpty</code>

> Check if the MutableList is empty or not

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

new MutableList([bob, jo]).isEmpty(); // returns false
new MutableList().isEmpty(); // returns true
```

⇨ <code>isNotEmpty</code>

> Check if the MutableList is empty or not

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

new MutableList([bob, jo]).isNotEmpty(); // returns true
new MutableList().isNotEmpty(); // returns false
```

⇨ <code>join</code>

> Returns a string resulting from converting each element of the MutableList to a string and then concatenating them together

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.join({separator: ' / '}, (value) => value.name); // returns 'bob / jo'
```

⇨ <code>last</code>

> Returns the last element matching the predicate, throw an error if there's not matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo1]);
values.last((value) => value.name === 'jo'); // returns jo1
values.last((value) => value.name === 'jane'); // throw an error 'No value matches the predicate'
```

⇨ <code>lastOrUndefined</code>

> Returns the last element matching the predicate, or `undefined` if no matching

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jo1: Person = {name: 'Jo', age: 23};

const values = new MutableList([bob, jo, jo1]);
values.lastOrUndefined((value) => value.name === 'jo'); // returns jo1
values.lastOrUndefined((value) => value.name === 'jane'); // returns undefined
```

⇨ <code>map</code>

> Returns a new `MutableList` where a given transformer is applied on every elements

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.map((value) => {
    value.age = 18;
    return value;
}); // returns a new List similar to values but where every Person is now 18
```

⇨ <code>max</code>

> Returns the max value or object according to the given selector.
>
> If no selector, then just returns the max among all values. The array must consist of numbers only, otherwise an error is thrown.

**examples :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.max(); // returns 5
```

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.max((value) => value.age); // returns jo
values.max(); // throw an Error 'Type of array is not number'
```

⇨ <code>min</code>

> Returns the min value or object according to the given selector.
>
> If no selector, then just returns the min among all values. The array must consist of numbers only, otherwise an error is thrown.

**examples :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.min(); // returns 1
```

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.min((value) => value.age); // returns bob
values.min(); // throw an Error 'Type of array is not number'
```

⇨ <code>none</code>

> Check if there's no element matching the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.none((value) => value === 3); // returns false
values.none((value) => value === 0); // returns true
```

⇨ <code>onEach</code>

> Returns a new `MutableList` where a given action is applied on every elements, the selector silently returns `this`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.onEach((value) => (value.age = 18)); // returns a new MutableList similar to values but where every Person is now 18
```

⇨ <code>reduce</code>

> Returns a value obtained after an operation (accumulator) is applied on every element of the MutableList.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.reduce((acc, value) => acc + value.age, 0); // returns 40
```

⇨ <code>remove</code>

> Remove the element at the given index from the current `MutableList` and returns `this`.
>
> Mutable operation.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5, 6]);
values.remove(5); // returns MutableList([1, 2, 3, 4, 5])
```

⇨ <code>removeAll</code>

> If the parameter is a predicate, remove all elements from the array matching this predicate.
>
> Otherwise remove all occurences of the given element from the array.
>
> Mutable operation.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};
const jane: Person = {name: 'Jane', age: 22};

const values = new MutableList([bob, jo, jane]);
values.removeAll((value) => value.age === 22); // returns MutableList([bob])
values.removeAll(bob); // returns MutableList([jo, jane])
```

⇨ <code>removeAt</code>

> Remove the element at the given index from the current `MutableList` and returns `this`.
>
> Mutable operation.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5, 6]);
values.removeAt(5); // returns MutableList([1, 2, 3, 4, 5])
```

⇨ <code>removeFirst</code>

> Remove the first element the current `MutableList` and returns `this`.
>
> Mutable operation.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5, 6]);
values.removeFirst(); // returns MutableList([2, 3, 4, 5, 6])
```

⇨ <code>removeLast</code>

> Remove the last element the current `MutableList` and returns `this`.
>
> Mutable operation.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5, 6]);
values.removeLast(); // returns MutableList([1, 2, 3, 4, 5])
```

⇨ <code>reverse</code>

> Returns a new `MutableList` where all elements are reversed: first element become last, last become first and so on.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.reverse(); // returns MutableList([jo, bob])
```

⇨ <code>size</code>

> Returns the number of elements in the MutableList.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.size(); // returns 2
```

⇨ <code>some</code>

> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.some((value) => value === 3); // returns true
values.some((value) => value === 0); // returns false
```

⇨ <code>sort</code>

> Returns a new `MutableList` where elements are sorted according to the selector if given.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([jo, bob]);
values.sort((value) => value.age); // returns MutableList([bob, jo])
```

⇨ <code>subList</code>

> Create a new list containing the elements between the given indexes.

**example :**

```ts
const values = new MutableList([1, 2, 3, 4, 5]);
values.subList(1, 3); // returns MutableList([2, 3]);
values.subList(2); // returns MutableList([3, 4, 5]);
values.subList(-2); // returns MutableList([4, 5]);
```

⇨ <code>sum</code>

> Calculate the sum of the array according to the selector if given.
>
> If no selector is given, the `MutableList` must be composed of numbers otherwise an error will be thrown.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.sum((value) => value.age); // returns 40
values.sum(); // throw an error 'Type of array is not number'
```

⇨ <code>take</code>

> Returns a new `MutableList` with only the n first elements.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.take(1); // returns MutableList([bob])
```

⇨ <code>takeLast</code>

> Returns a new `MutableList` with only the n last elements.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.takeLast(1); // returns MutableList([jo])
```

⇨ <code>toArray</code>

> Returns an array out of the `MutableList`.

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new MutableList([bob, jo]);
values.toArray(); // returns [bob, jo]
```

</details>

<br/>
<details>
<summary><code><font size="4"><b>listOf</b></font></code></summary>
<br/>
<p><code>listOf</code> is a utility fonction to instantiate a <code>List</code>.</p>

<b>examples</b>

```ts
const values = listOf(1, 2, 3, 4, 5);
```

</details>

<br/>
<details>
<summary><code><font size="4"><b>mutableListOf</b></font></code></summary>
<br/>
<p><code>mutableListOf</code> is a utility fonction to instantiate a <code>MutableList</code>.</p>

<b>examples</b>

```ts
const values = mutableListOf(1, 2, 3, 4, 5);
```

</details>

<br/>
<details>
<summary><code><font size="4"><b>when</b></font></code></summary>
<br/>
<code>when</code> is similar to the <code>switch</code> statement, it defines a conditional expression with multiples branches. Every branch condition is checked sequentially until a matching is met.

It can also be used without argument. In this case it is similar to the <code>if/else</code> statement.

<code>when</code> is a function, which means it's an expression unlike <code>switch</code> or <code>if/else</code>, which means that `when` returns a value that you can directly attribuate to a variable for example.

**examples**

<table>
<th><code>with argument</code></th>
<th><code>without argument</code></th>
<tr>
<td>

```ts
const colorName = getRandomColor();

const color = when(colorName, [
    'orange', () => new Orange(),
    ['red', 'redish'], () => new Red(),
    'green', () => new Green(),
    () => undefined, // default value
]);
```

</td>
<td>

```ts
const darkColorName = getRandomColor();
const lightColorName = getRandomColor();

const color = when([
    darkColorName === 'black', () => new Black(),
    lightColorName === 'white', () => new White(),
    lightColorName === 'yellow', () => new Yellow(),
    () => undefined, // default value
]);
```

</td>
</tr>
</table>

`when` function is more lightweight in term of code than the other conditional options :

<table>
<th><code>when</code></th>
<th><code>if/else</code> with brackets</th>
<th><code>if/else</code> without brackets</th>
<th><code>switch</code></th>
<tr>
<td>

```ts
const colorName = getRandomColor();

const color = when(colorName, [
    'orange', () => new Orange(),
    ['red', 'redish'], () => new Red(),
    'green', () => new Green(),
    () => undefined
]);
```

</td>
<td>

```ts
const colorName = getRandomColor();

let color = undefined;
if (colorName === 'orange') {
    color = new Orange();
} else if (colorName === 'red' || colorName === 'redish') {
    color = new Red();
} else if (colorName === 'green') {
    color = new Green();
}
```

</td>
<td>

```ts
const colorName = getRandomColor();

let color;
if (colorName === 'orange') color = new Orange();
else if (colorName === 'red' || colorName === 'redish') color = new Red();
else if (colorName === 'green') color = new Green();
else color = undefined;
```

</td>
<td>

```ts
const colorName = getRandomColor();

let color;
switch (color) {
    case 'orange':
        color = new Orange();
        break;
    case 'red':
    case 'redish':
        color = new Red();
        break;
    case 'green':
        color = new Green();
        break;
    default:
        color = undefined;
        break;
}
```

</td>
</tr>
</table>
</details>
