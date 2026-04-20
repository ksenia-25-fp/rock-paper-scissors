# Rock Paper Scissors

A console-based implementation of the classic Rock, Paper, Scissors game, built as part of the Odin Project Foundations curriculum.

## Description
This project is a logic-based game where a human player competes against a computer. The game runs for 5 rounds, tracks scores for both players, and announces an ultimate winner at the end.

## How to Play
* **Play Online:** You can play the game directly in your browser here: [https://ksenia-25-fp.github.io/rock-paper-scissors/](https://ksenia-25-fp.github.io/rock-paper-scissors/)
* **Local Setup:**
  1. Clone this repository to your local machine.
  2. Open `index.html` in any modern web browser.
  3. Open the Browser Console (F12 / cmd+alt+I / Right-Click -> Inspect -> Console).
  4. Follow the prompts to enter your choice (rock, paper, or scissors).
  5. Check the console for round-by-round results and the final score.

## Key Features
* **Case-Insensitive Input:** Player input is automatically normalized to lowercase to ensure reliable comparisons.
* **Automated Logic:** Computer moves are generated using `Math.random()` to ensure unpredictable gameplay.
* **Encapsulated Code:** Game logic and score variables are contained within a main `playGame()` function to manage scope effectively.
* **Loop Integration:** A `for` loop handles the 5-round structure, ensuring DRY principle.

## Tech Stack
* **JavaScript** (Logic, Loops, Conditionals)
* **HTML5** (Basic structure to link the script)
* **Git/GitHub** (Version control)

## What I Learned
Through this project, I have practiced and implemented the following concepts:
* Managing **Variable Scope** (understanding the difference between global and local variables).
* Implementing **Boolean Logic** and complex conditional statements using `&&` and `||`.
* Using **Loops** to automate repetitive tasks and manage game flow.
* **Input Normalization** to handle varied user input formats.
* Functional programming basics, including function declarations and passing **arguments**.
