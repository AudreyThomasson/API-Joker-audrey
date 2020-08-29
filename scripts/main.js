import { getJoke, useJoke } from "./JokeProvider.js";
import { jokeSetup } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
 
  const addJokeSetup = () => {
    const contentElement = document.querySelector(".joke-setup");
    const joke = useJoke()

    let jokeSetupHTMLRepresentation = jokeSetup(joke);
    contentElement.innerHTML = `
        ${jokeSetupHTMLRepresentation}  
    `
}
});