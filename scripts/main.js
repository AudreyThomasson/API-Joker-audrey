import { getJoke, useJoke } from "./JokeProvider.js";
import { jokeSetup } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke()
  .then(() => {
    const joke = useJoke();

    const contentElement = document.querySelector(".joke-setup");
    

    const jokeSetupHTMLRep = jokeSetup(joke);
    contentElement.innerHTML = `
        ${jokeSetupHTMLRep}  
    `
  })
});
