# Documentation: Fetching and Displaying Chuck Norris Jokes (`fetchJoke` function)

## Overview

This document explains how the `fetchJoke` function works in the context of the Chuck Norris Joke Generator web page. The function is responsible for retrieving a random joke from the Chuck Norris API and displaying it dynamically on the page.

---

## File Location

* JavaScript file: `L5_assets/script.js` (or your relevant JS directory)
* HTML element target: `<p id="joke-text"></p>` inside the joke card container

---

## Function: `fetchJoke`

### Purpose

* To fetch a random Chuck Norris joke asynchronously from the external API
* To update the webpage with the fetched joke
* To handle loading and error states gracefully

---

### How it works

1. **Select the display element**

   The element with ID `joke-text` is selected via:

   ```js
   const jokeText = document.getElementById('joke-text');
   ```

   This is the paragraph inside the card where the joke text will be inserted.

2. **Define an asynchronous function**

   ```js
   async function fetchJoke() {
     // function body
   }
   ```

   Marking the function as `async` allows the use of `await` inside it for cleaner asynchronous code.

3. **Display loading message**

   Before fetching starts, the text content is updated:

   ```js
   jokeText.textContent = "Loading joke...";
   ```

4. **Fetch joke from API**

   The `fetch` method is called with the URL `https://api.chucknorris.io/jokes/random` to get a random joke.

   ```js
   const response = await fetch('https://api.chucknorris.io/jokes/random');
   ```

   Using `await` pauses execution until the HTTP response arrives.

5. **Check for successful response**

   The response is validated:

   ```js
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   ```

   If the HTTP status code indicates failure, an error is thrown and caught in the catch block.

6. **Parse JSON**

   The response body is parsed as JSON:

   ```js
   const data = await response.json();
   ```

7. **Display the joke**

   The joke text from the API response is extracted from the `value` property and displayed:

   ```js
   jokeText.textContent = data.value;
   ```

8. **Error handling**

   If any error occurs during fetching or parsing, a friendly error message is shown:

   ```js
   catch (error) {
     jokeText.textContent = "Oops! Could not load a joke. Please try again.";
     console.error('Fetch error:', error);
   }
   ```

---

## Usage

Call `fetchJoke()` whenever you want to load a new joke. In the current implementation, it is called once on page load to show an initial joke:

```js
fetchJoke();
```

---

## Benefits

* Uses modern `async/await` syntax for readability and ease of maintenance.
* Graceful handling of loading and error states enhances user experience.
* Modular — can be reused for fetching jokes on button clicks or other events.

---

## Notes

* The API endpoint `https://api.chucknorris.io/jokes/random` is publicly available and requires no authentication.
* Network errors or API downtime will trigger the error message.
* The function relies on the DOM element with ID `joke-text` to exist in the HTML.