"use strict";
const button = document.getElementById("jokeBtn");
const Joke = document.querySelector(".newJoke");

async function getJoke() {
  const joke = await fetch(
    "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single"
  );
  const jokeData = await joke.json();
  Joke.innerHTML = jokeData.joke;
  //   console.log(jokeData.joke + "THIS IS OUR Joke");
  changeBodyColor();
}

// Added a cool function to change the background color with every joke.

function changeBodyColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

button.addEventListener("click", getJoke);

getJoke();
