# Lesson 3 – Arrays and Loops (Detailed Breakdown)

---

## 1. Array Methods

### **`.push()`** — Add items to the **end** of an array

* **What it does:** Adds one or more elements to the end
* **Returns:** The new length of the array
* **Example:**

```js
let fruits = ['apple', 'banana'];
fruits.push('orange'); 
console.log(fruits); // ['apple', 'banana', 'orange']
```

---

### **`.pop()`** — Remove the **last** item from an array

* **What it does:** Removes and returns the last element
* **Returns:** The removed element
* **Example:**

```js
let fruits = ['apple', 'banana', 'orange'];
let last = fruits.pop();  
console.log(last);   // 'orange'
console.log(fruits); // ['apple', 'banana']
```

---

### **`.map()`** — Create a **new array** by transforming each element

* **What it does:** Runs a function on every element, returns a new array of results
* **Important:** Does *not* change original array
* **Example:**

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (unchanged)
```

---

### **`.forEach()`** — Run a function on each element (no new array)

* **What it does:** Executes a function on every item in the array
* **Important:** Does *not* return anything (undefined)
* **Example:**

```js
let fruits = ['apple', 'banana'];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// Output:
// APPLE
// BANANA
```

**.map() vs .forEach()**

| Feature        | `.map()`                  | `.forEach()`                                              |
| -------------- | ------------------------- | --------------------------------------------------------- |
| Returns        | New transformed array     | `undefined` (no return)                                   |
| Mutates array? | No                        | No (unless you manually do)                               |
| Use case       | When you want a new array | When you want to run code for side effects (like logging) |

---

## 2. Loops

### **`for` loop** — Repeat code a specific number of times

* **Structure:**

```js
for (initialization; condition; update) {
  // code to repeat
}
```

* **Example:**

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Output: 0 1 2
```

---

### **`while` loop** — Run code while a condition is true

* **Structure:**

```js
while (condition) {
  // code to repeat
}
```

* **Example:**

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// Output: 0 1 2
```

---

### **`for...of` loop** — Loop over iterable items (like arrays)

* **Why use it:** Cleaner syntax to loop over items directly without indexes
* **Example:**

```js
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange
```

#### If you know `python`

```py
fruits = ['apple', 'banana', 'orange']
for fruit in fruits:
    print(fruit)
```

* `for ... in` = loop over **values** in a list in `python`
---

**Summary:**

* JS uses `for (… of …)` to loop over elements
* Python uses `for … in …` for the same thing

Both loop directly over the **values** in the collection!

---

### Go to Lesson 3 Exercise 
`Exercises/Lesson 3 Exercise.md`

---

## 💡 AI Prompt Idea

Ask AI:

> “Create a JavaScript loop that doubles each number in an array and prints the results.”

Then try:

* Rewrite it using `.map()`
* Use `.reduce()` to sum all doubled numbers