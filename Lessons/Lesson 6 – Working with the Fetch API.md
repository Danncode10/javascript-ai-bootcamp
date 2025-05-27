# Lesson 6 – Working with the Fetch API

## 🎯 **Goal of this Lesson**

You’ll learn how to **get live data from the internet (like a joke)** using JavaScript — specifically using something called the **Fetch API**.

---

## 🧠 **What is `fetch()`?**

* `fetch()` is a built-in JavaScript function used to **get data from an external source**, like a website or API.
* It works like:

  > “Hey website, give me this data. I’ll wait, then do something with it.”

Think of it like ordering food:

* `fetch()` = placing your order
* `.then()` = what to do when food arrives
* `.catch()` = what to do if there’s an error (e.g. restaurant is closed)

---

## 🧱 **Basic Fetch Syntax**

```js
fetch("https://api.example.com/data")
  .then(response => response.json())     // convert response to JSON
  .then(data => {
    // use the data
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

---

## 💡 **What You’ll Use in This Lesson**

| **Keyword / Method** | **What It Does**                              |
| -------------------- | --------------------------------------------- |
| `fetch(url)`         | Requests data from the URL                    |
| `.then()`            | Runs after the fetch is successful            |
| `response.json()`    | Converts raw response into usable JSON format |
| `.catch()`           | Handles any error (like network failure)      |

---

## 🧪 Example: Display a Random Joke

### 🖼️ HTML

```html
<button id="btn">Get Joke</button>
<p id="joke">Click to get a joke!</p>
```

### 💻 JavaScript

```js
let btn = document.querySelector("#btn");
let jokeDisplay = document.querySelector("#joke");

btn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())         // turn response into JSON
    .then(data => {
      jokeDisplay.innerHTML = `${data.setup} <br>${data.punchline}`;
    })
    .catch(error => {
      jokeDisplay.innerHTML = "Oops! Couldn't fetch a joke.";
      console.error("Error:", error);
    });
});
```

---

### 🗂️ How it works step-by-step:

1. You click the button.
2. `fetch()` goes to the joke API and asks for a joke.
3. `.then()` waits for the joke to arrive and processes it.
4. The joke text appears inside the `<p>` tag.
5. If something breaks, `.catch()` handles it gracefully.

---

### 🧠 AI Tip 💡

Try asking:

> *“Generate a fetch example that shows a quote instead of a joke.”*
> Then tweak it — change the API URL, update styles, or even add a **loading spinner**.