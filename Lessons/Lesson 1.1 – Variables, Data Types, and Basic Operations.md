## 🧰 Step 1: Set Up VS Code for JavaScript

### 🔧 What you need to install:

1. **VS Code**
   Download here: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Google Chrome**
   You’ll use it to see the result of your JavaScript.

> ✅ Once installed, open **VS Code**.

---

## 📁 Step 2: Create Your First Web Project

1. In VS Code:

   * Click **File > Open Folder** (make a new folder like `js-basics`)
   * Click **File > New File**, name it: `index.html`

2. Inside `index.html`, copy this basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lesson 1 – JS Basics</title>
  </head>
  <body>
    <h1>Hello, JavaScript!</h1>

    <script>
      // Your JavaScript goes here
      console.log("Hello from JavaScript!");
    </script>
  </body>
</html>
```

3. Save the file.

4. **Open it in Chrome:**

   * Right-click on the file > **Reveal in Finder** (Mac) or **Show in Explorer** (Windows)
   * Double-click the file → it opens in Chrome

5. **Open Developer Tools:**

   * Right-click the page → Click **Inspect**
   * Click the **Console** tab
     🔍 You should see `Hello from JavaScript!`

---

## 🎓 Now Let’s Do Lesson 1.1 – Step by Step

### 🧠 What is a Variable?

A variable is like a **labeled jar** where you store something. In JavaScript, you make jars using:

* `let` — changeable values
* `const` — locked (unchangeable) values

---

### ✅ Try this in the `<script>` section of your `index.html`:

```js
let name = "Alex";
const age = 21;

console.log(name);
console.log(age);
```

👀 In the Console tab of Chrome DevTools, you’ll see:

```
Alex
21
```

---

### 📦 Data Types You Need to Know

Try replacing the code with this:

```js
let myName = "Jenny"; // String
let myAge = 30;       // Number
let isStudent = true; // Boolean
let skills = ["HTML", "CSS", "JavaScript"]; // Array
let profile = {       // Object
  name: "Jenny",
  age: 30,
  isStudent: true
};

console.log(myName);
console.log(skills[0]); // Access first skill
console.log(profile.name); // Access from object
```

👩‍🏫 You just used **5 data types**:

* String (`"Jenny"`)
* Number (`30`)
* Boolean (`true`)
* Array (`[...]`)
* Object (`{...}`)

---

### ➕ Operators – Basic Math & Logic

Replace with:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)

console.log(a === 10); // true
console.log(a > 5 && b < 5); // true
console.log(a < 5 || b === 3); // true
```

---

### 🧪 Mini Practice: Profile Card

Now write a small program that prints a student’s intro:

```js
const student = {
  name: "Maya",
  age: 19,
  skills: ["Python", "JavaScript", "HTML"]
};

console.log("Hi! My name is " + student.name + ".");
console.log("I'm " + student.age + " years old.");
console.log("My skills are: " + student.skills.join(", "));
```

---

### 💡 AI Tip (Optional)

Try asking ChatGPT:

> "Write a JavaScript object for a student with name, age, and favorite subjects. Then print a sentence using that info."

Then change:

* The values
* Add a nested `address` object
* Use `const` or `let`

---