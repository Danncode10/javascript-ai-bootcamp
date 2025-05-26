const jokeText = document.getElementById('joke-text');

async function fetchJoke() {
  try {
    jokeText.textContent = "Loading joke...";

    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    jokeText.textContent = data.value;
  } catch (error) {
    jokeText.textContent = "Oops! Could not load a joke. Please try again.";
    console.error('Fetch error:', error);
  }
}

fetchJoke();
console.log('Joke fetched successfully');
