<p style="text-align: center">
    <img src="logo_sleekify.png" alt="Sublime's custom image" style="text-align: center"/>
</p>
<div style="text-align: center; font-weight: bold">Typescript library that offers elegant and powerful utility functions.</div>

<br/>

# API documentation

---

## list

---

### `List` is an array wrapper that offers many operations.

## `all`

Check if every element matches the predicate, if that's the case then returns `true`, else `false`

**example :**

```
const values = new List(1, 2, 3, 4, 5);
values.all(value => !isNaN(value)) // returns true
values.all(value => isNaN(value)) // returns false
```

## `any`

Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`

**example :**

```
const values = new List(1, 2, 3, 4, 5);
values.any(value => value === 3) // returns true
values.any(value => value === 0) // returns false
```

## `contains`

Check if there's at least one element matching the given entry, if that's the case then returns `true`, else `false`

**example :**

```
const bob: Person = {name: 'Bob', age: 18}
const jo: Person = {name: 'Jo': age: 22}

const values = new List(bob, jo)
values.contains({name: 'Jo': age: 22}) // returns true
values.contains({name: 'Jo': age: 23}) // returns false
```

## `containsAll`

Check if the given entries are presents in the list, if that's the case then returns `true`, else `false`

**example :**

```
const bob: Person = {name: 'Bob', age: 18}
const jo: Person = {name: 'Jo': age: 22}

const values = new List(bob, jo)
values.containsAll([{name: 'Bob', age: 18}, {name: 'Jo': age: 22}]) // returns true
values.containsAll({name: 'Bob', age: 18}, {name: 'Jo': age: 23}) // returns false
```

## `count`

## `distinct`

## `drop`

## `dropLast`

## `filter`

## `find`

## `first`

## `firstOrNull`

## `flatmap`

## `flatten`

## `forEach`

## `groupBy`

## `isEmpty`

## `join`

## `last`

## `lastOrNull`

## `map`

## `max`

## `min`

## `none`

## `onEach`

## `reduce`

## `reverse`

## `size`

## `some`

## `sort`

## `sum`

## `take`

## `takeLast`

## `toArray`

## when

---
