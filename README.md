<h3 align=center>
    <img src="logo_sleekify.png" alt="Sublime's custom image" style="text-align: center"/>
    <div style="text-align: center; font-weight: bold">Typescript library that offers elegant and powerful utility functions.</div>
</h3>

<br/>

## API documentation

---

## list

---

`List` is an array wrapper that offers many operations.

### ⇨ `all`

> Check if every element matches the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new List(1, 2, 3, 4, 5);
values.all(value => !isNaN(value)); // returns true
values.all(value => isNaN(value)); // returns false
```

### ⇨ `any`

> Check if there's at least one element matching the predicate, if that's the case then returns `true`, else `false`

**example :**

```ts
const values = new List(1, 2, 3, 4, 5);
values.any(value => value === 3); // returns true
values.any(value => value === 0); // returns false
```

### ⇨ `contains`

> Check if there's at least one element matching the given entry, if that's the case then returns `true`, else `false`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List(bob, jo);
values.contains({name: 'Jo', age: 22}); // returns true
values.contains({name: 'Jo', age: 23}); // returns false
```

### ⇨ `containsAll`

> Check if the given entries are presents in the list, if that's the case then returns `true`, else `false`

**example :**

```ts
const bob: Person = {name: 'Bob', age: 18};
const jo: Person = {name: 'Jo', age: 22};

const values = new List(bob, jo);
values.containsAll([{name: 'Bob', age: 18}, {name: 'Jo', age: 22}]); // returns true
values.containsAll({name: 'Bob', age: 18}, {name: 'Jo', age: 23}); // returns false
```

### ⇨ `count`

### ⇨ `distinct`

### ⇨ `drop`

### ⇨ `dropLast`

### ⇨ `filter`

### ⇨ `find`

### ⇨ `first`

### ⇨ `firstOrNull`

### ⇨ `flatmap`

### ⇨ `flatten`

### ⇨ `forEach`

### ⇨ `groupBy`

### ⇨ `isEmpty`

### ⇨ `join`

### ⇨ `last`

### ⇨ `lastOrNull`

### ⇨ `map`

### ⇨ `max`

### ⇨ `min`

### ⇨ `none`

### ⇨ `onEach`

### ⇨ `reduce`

### ⇨ `reverse`

### ⇨ `size`

### ⇨ `some`

### ⇨ `sort`

### ⇨ `sum`

### ⇨ `take`

### ⇨ `takeLast`

### ⇨ `toArray`

## when

---

<p>
<code>when</code> is similar to the <code>switch</code> statement, it defines a conditional expression with multiples branches. Every branch condition is checked sequentially until a matching is met.

It can also be used without argument. In this case it is similar to the <code>if/else</code> statement.

<code>when</code> is a function, which means it's an expression unlike <code>switch</code> or <code>if/else</code>, which means that `when` returns a value that you can directly attribuate to a variable for example.
</p>

**examples :**

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
    darkColorName === 'grey', () => new Grey(),
    lightColorName === 'white', () => new White(),
    lightColorName === 'yellow', () => new Yellow(),
    () => undefined // default value
]);
```

</td>
</tr>
</table>

**comparison with conditionals statements :**
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

`when` function is more lightweight than the other options.
