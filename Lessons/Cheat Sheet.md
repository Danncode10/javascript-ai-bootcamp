## Lesson 1: Variables, Data Types, Operators**

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
