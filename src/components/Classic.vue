<template>
  <div
    class="bg-blue-500 w-full h-[100vh] flex flex-col justify-center items-center relative gap-10"
  >
    <div class="text-white absolute flex flex-col justify-between left-1/2 top-1/2 h-2/3 -translate-x-1/2 -translate-y-1/2">
        <p v-text="resultMessage" class="text-4xl font-semibold rotate-180"></p>
        <p v-text="resultMessage" class="text-4xl font-semibold"></p>
    </div>
    <ul
      class="flex flex-wrap relative z-10 flex-col w-80 justify-between content-between aspect-square"
    >
      <li
        v-for="(cell, i) in cells"
        :key="i"
        @click="handleCellClick(i)"
        v-text="cell"
        class="aspect-square w-[33%] h-[33%] flex items-center justify-center text-6xl bg-yellow-300 cursor-pointer hover:opacity-60 text-white"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cells: ["", "", "", "", "", "", "", "", ""],
      round: "X",
    };
  },
  computed: {
    resultMessage() {
      const winner = this.chooseWinner();
      if (winner === "X") {
        this.resetGame()
        return "Player X won 🥳!!";
      } else if (winner === "O") {
        this.resetGame()
        return "Player O won 🥳!!";
      } else if (winner === "draw") {
        this.resetGame()
        return "Draw 🤝 !!";
      } else {
        return `player ${this.round}'s turn`;
      }
    },
  },
  methods: {
    handleCellClick(index) {
      if (!this.cells[index] && !this.chooseWinner()) {
        this.cells[index] = this.round;
        this.switchRound();
      }
    },
    switchRound() {
      this.round = this.round === "X" ? "O" : "X";
    },
    resetGame() {
      setTimeout(() => {
        this.cells = ["", "", "", "", "", "", "", "", ""];
        this.round = "X";
      }, 1000);
    },
    chooseWinner() {
      let winner = null;
      const winnerComp = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < winnerComp.length; i++) {
        if (
          this.cells[winnerComp[i][0]] !== "" &&
          this.cells[winnerComp[i][0]] === this.cells[winnerComp[i][1]] &&
          this.cells[winnerComp[i][1]] === this.cells[winnerComp[i][2]]
        ) {
          winner = this.cells[winnerComp[i][0]];
          break;
        }
      }
      if (!winner) {
        let isDraw = true;
        for (let i = 0; i < this.cells.length; i++) {
          if (this.cells[i] === "") {
            isDraw = false;
            break;
          }
        }
        if (isDraw) {
          winner = "draw";
        }
      }
      return winner;
    },
  },
};
</script>
