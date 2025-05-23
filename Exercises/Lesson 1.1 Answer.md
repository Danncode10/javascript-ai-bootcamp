# Lesson 1 Answer

* `let`, `const`
* Data types (string, number, boolean, array, object)
* Basic operators (`+`, `===`, `&&`, etc.)
* `console.log()`

---

## 🧠 **JavaScript Fundamentals Exercises (Lesson 1)**

### 🔹 1. Declare and Print

> ✅ Create 3 variables: name (string), age (number), isStudent (boolean).
> 🖨️ Use `console.log()` to print each one.

```js
let name = "Dann";
let age = 20;
let isMale = True;

console.log(name);
console.log(age)
console.log(isMale)
```

---

### 🔹 2. Build a Skill List

> ✅ Create an array called `skills` with 3 programming languages.
> 🖨️ Print the second skill.

```js
let skills = ["C++", "Python", "Java"];

console.log(skills[1]);
```

---

### 🔹 3. Create a Profile Object

> ✅ Create an object `profile` with these keys: `name`, `age`, `skills`.
> 💡 `skills` should be the array from #2.
> 🖨️ Print the profile’s name and the last skill.

```js
let profile = {
    name: "Dann",
    age: 20,
    skills: ["C++", "Python", "Java"]
};

console.log(profile.name);               // Dann
console.log(profile.skills[2]);          // Java
// or dynamic last element:
console.log(profile.skills[profile.skills.length - 1]);
```

---

### 🔹 4. Use Operators

> ✅ Create two numbers: `a = 10`, `b = 4`
> ➕ Print:

* Their sum
* The result of `a % b`
* `true` if `a` is greater than `b`
* `true` if `a` is equal to 10 AND `b` is equal to 4

```js
let a = 10;
let b = 4;

console.log(a + b);               // 14
console.log(a % b);               // 2
console.log(a > b);               // true
console.log(a === 10 && b === 4); // true

```

---

### 🔹 5. String Sentence Challenge 🧩

> ✅ Use this object:

```js
const user = {
  name: "Sam",
  age: 20,
  hobbies: ["reading", "coding", "gaming"]
};

console.log("Hi, I'm " + user.name + ", I'm " + user.age + " years old and I like " + user.hobbies.join(", ") + ".");
```

> 🧠 Build this output using `console.log()`:

```
Hi, I'm Sam, I'm 20 years old and I like reading, coding, and gaming.
```