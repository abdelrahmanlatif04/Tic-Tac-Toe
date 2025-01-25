# Tic-Tac-Toe Game

This is a simple and interactive Tic-Tac-Toe game built using **Vue.js** for the front-end logic and **Tailwind CSS** for styling. The game offers three exciting modes: **Classic**, **Infinity**, and **Ultimate**. Each mode presents a unique twist on the traditional Tic-Tac-Toe gameplay.

### [Try it Now](https://tic-tac-toe-hero.vercel.app/)

## Features

- **Three Game Modes**:
  - **Classic Mode**: The traditional Tic-Tac-Toe game.
  - **Infinity Mode**: Players can only have three active symbols on the grid. As new moves are made, the oldest ones disappear.
  - **Ultimate Mode**: A nested Tic-Tac-Toe game where each square is a mini Tic-Tac-Toe grid. The game becomes a test of strategy across multiple boards!

## Game Modes

### 1. Classic Mode

In **Classic Mode**, players take turns placing their symbols (X or O) on a 3x3 grid. The first player to align three of their symbols horizontally, vertically, or diagonally wins the game. This mode offers the classic and simple Tic-Tac-Toe experience.

### 2. Infinity Mode

**Infinity Mode** introduces a challenging twist:

- Players are limited to having only three active symbols on the grid at any time.
- Once a player places their fourth symbol, their first symbol disappears.
- This forces players to constantly adapt their strategy to both create winning lines and prevent their opponent from winning.

### 3. Ultimate Mode

In **Ultimate Mode**, each cell of the 3x3 grid is itself a mini Tic-Tac-Toe board. The objective is to win three mini-games in a row to win the main game:

- The game begins with an empty main grid and players take turns playing in mini-grids.
- Players are sent to specific mini-grids based on the location of the previous player's move.
- Victory is achieved by winning three mini-grids either horizontally, vertically, or diagonally, just like in Classic Mode.




## Technologies Used

- **Vue.js**: Handles the game's state, turn logic, and user interactions.
- **Tailwind CSS**: Used for styling the game board and layout, ensuring a responsive and modern design.
