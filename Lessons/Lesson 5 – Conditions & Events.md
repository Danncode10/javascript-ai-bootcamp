# 🧠 Lesson 5 – Conditions & Events

---

## ✅ 1. **if, else, else if**

Used to make decisions based on conditions.

```js
let score = 85;

if (score >= 90) {
  console.log("A+");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("Fail");
}
```

---

## ✅ 2. **switch Statement**

Good when checking exact values (like menu options):

```js
let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Keep trying!");
}
```

---

## ✅ 3. **Handling User Input (from form or prompt)**

### 📥 Using `prompt()`:

```js
let score = prompt("Enter your score:");

if (score >= 75) {
  alert("You passed!");
} else {
  alert("You failed!");
}
```

### 📥 Using input field + button (DOM):

**HTML:**

```html
<input type="number" id="scoreInput" placeholder="Enter score" />
<button id="checkBtn">Check Grade</button>
<p id="result"></p>
```

**JavaScript:**

```js
document.querySelector("#checkBtn").addEventListener("click", function() {
  let score = parseInt(document.querySelector("#scoreInput").value);
  let result = document.querySelector("#result");

  if (score >= 90) {
    result.innerHTML = "A+";
  } else if (score >= 80) {
    result.innerHTML = "A";
  } else if (score >= 70) {
    result.innerHTML = "B";
  } else {
    result.innerHTML = "Fail";
  }
});
```

---

## 💡 AI Tip

Prompt idea:

> "Build a JS program to check if a user passed based on their score. Add input validation (number only, not empty)."

Try modifying it to:

* Give emoji feedback (✅ / ❌)
* Use `switch` instead of `if` for specific grades

---

Want a **short cheat sheet** or want to try building the grade calculator now?
