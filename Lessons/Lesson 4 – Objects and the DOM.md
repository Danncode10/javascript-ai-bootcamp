# 🧠 Lesson 4 – Objects and the DOM (Simple + Clear)

---

## ✅ 1. **JavaScript Objects (Object Literals)**

Objects let you group related data.

### 💡 Basic Object

```js
let user = {
  name: "Alex",
  age: 25,
  isStudent: true
};
```

### 🧪 Accessing Object Data

```js
console.log(user.name);      // "Alex"
console.log(user["age"]);    // 25
```

* `obj.key` — dot notation
* `obj["key"]` — bracket notation (for dynamic keys)

---

## ✅ 2. **DOM (Document Object Model)**

The DOM is how JavaScript interacts with your HTML page.

---

### 🧱 Key DOM Functions

| Code                             | What it does                               |
| -------------------------------- | ------------------------------------------ |
| `document.querySelector()`       | Selects the first matching HTML element    |
| `.innerHTML`                     | Gets/sets HTML content inside an element   |
| `.addEventListener("click",...)` | Listens for events like clicks, keys, etc. |

---

### 🧪 Example: Change Text on Button Click

**HTML:**

```html
<button id="myBtn">Click Me</button>
<p id="message">Hello!</p>
```

**JavaScript:**

```js
let btn = document.querySelector("#myBtn");
let msg = document.querySelector("#message");

btn.addEventListener("click", function(event) {
  msg.innerHTML = "You clicked the button!";
});
```

---

## 💬 What is `event.target`?

* `event.target` refers to the **actual HTML element** that triggered the event.

Example:

```js
btn.addEventListener("click", function(event) {
  console.log(event.target); // logs the button element
});
```

---

## 🧪 You Do:

1. Create a simple HTML page with a button and a message
2. Use JavaScript to:

   * Select the button
   * Add a click listener
   * Change the text of a message when clicked

---

## 💡 AI Tip

Ask:

> “Add a click event listener to a button that changes page text.”

Then tweak:

* Change styles too (e.g., `style.color`)
* Use `event.target` to change the button itself