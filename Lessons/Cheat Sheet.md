## 📝 Lesson 1 Cheat Sheet — Keywords & Functions

| **Keyword / Symbol** | **What It Does**                          |    |            |
| -------------------- | ----------------------------------------- | -- | ---------- |
| `<script>`           | Run JS code inside HTML                   |    |            |
| `console.log()`      | Print output to browser console           |    |            |
| `let`                | Declare block-scoped, changeable variable |    |            |
| `const`              | Declare block-scoped, constant variable   |    |            |
| `var`                | Declare function-scoped variable (avoid)  |    |            |
| `"text"`             | String data type                          |    |            |
| `123`, `3.14`        | Number data type (no int/float split)     |    |            |
| `true`, `false`      | Boolean data type                         |    |            |
| `[ ]`                | Array (list)                              |    |            |
| `{ }`                | Object (key-value map)                    |    |            |
| `undefined`          | Variable declared but no value assigned   |    |            |
| `null`               | Empty or intentional “nothing” value      |    |            |
| `arr[index]`         | Access array element                      |    |            |
| `obj.key`            | Access object property                    |    |            |
| `+ - * / %`          | Arithmetic operators                      |    |            |
| `===`                | Strict equality (value + type match)      |    |            |
| `!==`                | Strict not equal                          |    |            |
| `==`, `!=`           | Loose equality (type coercion, avoid)     |    |            |
| `&&`                 | Logical AND                               |    |            |
| \`                   |                                           | \` | Logical OR |
| `!`                  | Logical NOT                               |    |            |

---

# Lesson 2 - Functions & Scope

| **Keyword**         | **What It Does**                                                |
| ------------------- | --------------------------------------------------------------- |
| `function`          | Defines a reusable block of code                                |
| `return`            | Sends a value back from a function                              |
| `console.log`       | Prints to the browser console                                   |
| `()`                | Calls (runs) a function                                         |
| `=>`                | Creates an arrow function                                       |
| `let` / `const`     | Declares variables (block-scoped)                               |
| `var`               | Declares variable (function-scoped – avoid using)               |
| `if / else`         | Makes decisions (conditions)                                    |
| `===`               | Checks equality (strict)                                        |
| `{} (curly braces)` | Groups code blocks (like in functions)                          |
| `() (parentheses)`  | Wrap parameters or conditions                                   |
| `Scope`             | Controls where variables can be used (inside/outside functions) |

---

Quick and easy for reference. Want an even **emoji-style visual version**? Just ask!









# Lesson UNKNOWN: Conditions & Events – JavaScript + AI Bootcamp

This cheat sheet covers all the essentials of **conditional logic** and **event handling** in JavaScript — with a few AI tips thrown in.

---

## 🔹 CONDITIONS (if, else, switch)

### ✅ `if`, `else if`, `else`

Use to check if something is true or false.

```js
let score = 90;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("Try again!");
}
```

🧠 **AI Tip:**

> Ask: *"Write a JS program that checks if a number is even or odd."*

---

### ✅ Comparison Operators:

| Operator  | Meaning               | Example (`a = 5, b = 10`) |
| --------- | --------------------- | ------------------------- |
| `==`      | Equal (loose)         | `a == '5'` → ✅ true       |
| `===`     | Equal (strict)        | `a === '5'` → ❌ false     |
| `!=`      | Not equal             | `a != b` → ✅ true         |
| `<` `>`   | Less/Greater          | `a < b` → ✅ true          |
| `<=` `>=` | Less/Greater or equal |                           |

---

### ✅ `switch` Statement

Good for checking multiple values of a single variable.

```js
let color = "blue";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Color unknown.");
}
```

---

## 🔹 EVENTS (click, input, load, etc.)

### ✅ Event Listener Syntax

```js
element.addEventListener("event", function);
```

| Common Event | What It Means               |
| ------------ | --------------------------- |
| `click`      | User clicks something       |
| `input`      | User types in an input box  |
| `change`     | Value changes (e.g. select) |
| `mouseover`  | Mouse hovers over           |
| `load`       | Page finishes loading       |

---

### ✅ Example: Click a Button

```js
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 💡 Best Practices:

* Keep event listeners in a separate `script.js` file
* Use meaningful IDs for HTML elements
* Combine conditions with events for interactivity
* Use `console.log()` to debug what’s happening

---

## 🤖 AI Prompts You Can Try:

| Goal           | Prompt                                                         |
| -------------- | -------------------------------------------------------------- |
| Basic logic    | "Write a JavaScript if/else to check if a number is positive." |
| Event help     | "How do I detect a button click in JS?"                        |
| Debugging      | "My event listener isn't working, here's the code…"            |
| Learn by doing | "Give me 3 exercises on conditions and events."                |

### 🧾 JavaScript Cheat Sheet: `fetch()` API

> 📚 Week 2 – JavaScript + AI Bootcamp
> Topic: **Fetch API** – Get data from another website (API)

---

### 🚀 What is `fetch()`?

> A JavaScript function that **asks another server for data** (like jokes, users, or weather) and brings it back to your site.

---

### 🧠 Why use it?

| Without fetch   | With fetch                      |
| --------------- | ------------------------------- |
| Static web page | Live, dynamic content from APIs |

---

### 📦 What does it fetch?

Usually JSON like:

```json
{
  "name": "Alice",
  "hobby": "Coding"
}
```

---

### 🛠️ Fetch Flow (no code)

1. Ask an API for data
2. Wait for response
3. Turn response into usable data
4. Show the data on the page

---

### 🧪 Examples of Public APIs:

| API              | What It Returns   |
| ---------------- | ----------------- |
| Chuck Norris API | Random joke       |
| Random User API  | Fake user profile |
| Cat Fact API     | Fun cat facts     |

---

### 💡 Remember:

| Term       | Meaning                        |
| ---------- | ------------------------------ |
| `fetch()`  | Make the request               |
| `.then()`  | Do something with the result   |
| `.catch()` | Handle errors                  |
| `JSON`     | Data format you'll usually get |

---

### 🤖 AI Tips:

* “Write a fetch request to get a joke.”
* “Why is my fetch code not working?”
* “Turn this fetch code into async/await.”

---