# Rock Paper Scissors

An interactive browser-based implementation of the classic Rock, Paper, Scissors game, built as part of The Odin Project Foundations curriculum.

## Description
This project is a web-based game where a human player competes against a computer opponent. The game tracks the running score dynamically on the screen and announces the ultimate champion as soon as one player reaches 5 points. 

## How to Play
* **Play Online:** You can play the game directly in your browser here: [https://ksenia-25-fp.github.io/rock-paper-scissors/](https://ksenia-25-fp.github.io/rock-paper-scissors/)
* **Local Setup:**
  1. Clone this repository to your local machine.
  2. Open `index.html` in any modern web browser.
  3. Click the Rock, Paper, or Scissors buttons to play a round.
  4. The screen will instantly update with the round result and the current score.

## Key Features
* **Interactive UI:** Playable directly on the webpage using buttons, completely eliminating the need for the browser console or `prompt()` pop-ups.
* **Event-Driven Logic:** The game flow is controlled by user interactions (clicks) rather than automated loops.
* **Dynamic DOM Updates:** Round results and running scores are injected into the HTML in real-time using JavaScript.
* **Automated Opponent:** Computer moves are generated unpredictably using `Math.random()`.

## Tech Stack
* **JavaScript** (DOM Manipulation, Event Listeners, Arrow Functions)
* **HTML5** (UI structure and buttons)
* **CSS** (Basic styling and layout)
* **Git/GitHub** (Version control and deployment)

## What I Learned
Through refactoring this project from a console-based script to a UI-driven application, I practiced:
* **DOM Manipulation:** Selecting HTML elements and updating their text dynamically using methods like `querySelector` and `textContent`.
* **Event Listeners:** Attaching `addEventListener` to buttons to trigger game rounds upon user interaction.
* **Callback Functions:** Passing arguments to functions within event listeners using anonymous arrow functions.
* **Variable Scope:** Managing game state (scores) effectively outside of the round-playing function to prevent data resets.
* **Refactoring:** Breaking away from procedural loops (like `for` loops) and adapting logic to an event-driven environment.
