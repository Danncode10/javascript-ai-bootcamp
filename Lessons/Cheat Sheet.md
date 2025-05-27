# Lesson 1: Variables, Data Types, Operators**

### 🔧 Basic Syntax

| Code                 | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `<script>`           | Runs JS code inside HTML                                           |
| `console.log(value)` | Print to browser console (like `print()` in Python, `cout` in C++) |

---

### 🧱 Variables

| Code            | Description                           |
| --------------- | ------------------------------------- |
| `let x = 10;`   | Block-scoped, mutable variable        |
| `const y = 20;` | Block-scoped, immutable constant      |
| `var z = 30;`   | Function-scoped, legacy (avoid using) |

---

### 🧪 Data Types

| Code             | Description                          |
| ---------------- | ------------------------------------ |
| `"Hello"`        | String                               |
| `42`, `3.14`     | Number (no int/float split)          |
| `true`, `false`  | Boolean                              |
| `[1, 2, 3]`      | Array (like Python list)             |
| `{ key: value }` | Object (like Python dict or C++ map) |
| `undefined`      | Unassigned variable                  |
| `null`           | Empty / intentional "nothing"        |

---

### 🔍 Accessing Data

| Code         | Description                                         |
| ------------ | --------------------------------------------------- |
| `arr[0]`     | Access array element                                |
| `obj.key`    | Access object property                              |
| `obj["key"]` | Alternate object property access (like Python dict) |

---

### ➕ Operators

| Symbol                  | Description                              |    |            |
| ----------------------- | ---------------------------------------- | -- | ---------- |
| `+`, `-`, `*`, `/`, `%` | Arithmetic                               |    |            |
| `===`                   | Strict equal (value **and** type match)  |    |            |
| `!==`                   | Strict not equal                         |    |            |
| `==`, `!=`              | Loose comparison (type coercion — avoid) |    |            |
| `&&`                    | Logical AND                              |    |            |
| \`                      |                                          | \` | Logical OR |
| `!`                     | Logical NOT                              |    |            |

---

### 🧪 Examples (Quick Reminders)

```js
let name = "Alex";
const age = 25;
let skills = ["HTML", "CSS", "JS"];

let person = {
  name: "Alex",
  age: 25,
  skills: skills
};

console.log(person.name);         // Access object property
console.log(skills[1]);           // Access array element
console.log(age + 5);             // Arithmetic
console.log(age === 30);          // Strict comparison
console.log(true && false);       // Logical AND
```

---

# Lesson 2: Conditions & Events – JavaScript + AI Bootcamp

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

---