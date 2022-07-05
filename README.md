<h3 align=center>
    <img src="logo_sleekify.png" alt="Sublime's custom image" style="text-align: center"/>
</h3>
<h4 align=center>
    <div>Typescript library that offers elegant and powerful utility functions.</div>
</h4>

<br/>

## Why sleekify ?

Sleekify provides powerful utility functions that makes your code more lightweight. The idea is to offer the possibility to the developer to write less code thanks to these functions.

<br/>

## Getting start

### Prerequisites

- npm
- node

### Installation

  ```sh
  npm i sleekify
  ```

### Usage

  ```ts
  import List from 'sleekify';
  ```

<br/>

## API documentation

### ⇨ list

`List` is an array wrapper that offers many operations.


<details><summary><code>all</code></summary>

> Check if every element matches the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new List(1, 2, 3, 4, 5);
values.all(value => !isNaN(value)); // returns true
values.all(value => isNaN(value)); // returns false
```

</details>

<details><summary><code>any</code></summary>


> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new List(1, 2, 3, 4, 5);
values.any(value => value === 3); // returns true
values.any(value => value === 0); // returns false
```

</details>

<details><summary><code>contains</code></summary>

> Check if there's at least one element matching the given entry, if that's the case then returns `true`, else `false`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List(bob, jo);
values.contains({name: 'Jo', age: 22}); // returns true
values.contains({name: 'Jo', age: 23}); // returns false
```

</details>

<details><summary><code>containsAll</code></summary>

> Check if the given entries are presents in the list, if that's the case then returns `true`, else `false`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List(bob, jo);
values.containsAll([{name: 'Bob', age: 18}, {name: 'Jo', age: 22}]); // returns true
values.containsAll({name: 'Bob', age: 18}, {name: 'Jo', age: 23}); // returns false
```

</details>

<details><summary><code>count</code></summary>
</details>

<details><summary><code>distinct</code></summary>
</details>

<details><summary><code>drop</code></summary>
</details>

<details><summary><code>dropLast</code></summary>
</details>

<details><summary><code>filter</code></summary>
</details>

<details><summary><code>find</code></summary>
</details>

<details><summary><code>first</code></summary>
</details>

<details><summary><code>firstOrNull</code></summary>
</details>

<details><summary><code>flatmap</code></summary>
</details>

<details><summary><code>flatten</code></summary>
</details>

<details><summary><code>forEach</code></summary>
</details>

<details><summary><code>groupBy</code></summary>
</details>

<details><summary><code>isEmpty</code></summary>
</details>

<details><summary><code>join</code></summary>
</details>

<details><summary><code>last</code></summary>
</details>

<details><summary><code>lastOrNull</code></summary>
</details>

<details><summary><code>map</code></summary>
</details>

<details><summary><code>max</code></summary>
</details>

<details><summary><code>min</code></summary>
</details>

<details><summary><code>none</code></summary>
</details>

<details><summary><code>onEach</code></summary>
</details>

<details><summary><code>reduce</code></summary>
</details>

<details><summary><code>reverse</code></summary>
</details>

<details><summary><code>size</code></summary>
</details>

<details><summary><code>some</code></summary>
</details>

<details><summary><code>sort</code></summary>
</details>

<details><summary><code>sum</code></summary>
</details>

<details><summary><code>take</code></summary>
</details>

<details><summary><code>takeLast</code></summary>
</details>

<details><summary><code>toArray</code></summary>
</details>

### ⇨ listOf

<p>
    <code>listOf</code> is a utility fonction to instantiate a <code>List</code>.
</p>

<b>examples</b>

```ts
const values = listOf(1, 2, 3, 4, 5);
```

### ⇨ when

<p>
<code>when</code> is similar to the <code>switch</code> statement, it defines a conditional expression with multiples branches. Every branch condition is checked sequentially until a matching is met.

It can also be used without argument. In this case it is similar to the <code>if/else</code> statement.

<code>when</code> is a function, which means it's an expression unlike <code>switch</code> or <code>if/else</code>, which means that `when` returns a value that you can directly attribuate to a variable for example.
</p>

<details><summary><b>examples</b></summary>
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
    () => undefined // default value
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
    () => undefined // default value
]);
```

</td>
</tr>
</table>
</details>

`when` function is more lightweight in term of code than the other conditional options.
<details><summary><b>comparison with conditionals statements</b></summary>
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
