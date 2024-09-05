<template>
  <div
    class="bg-cyan-800 w-full h-[100vh] flex flex-col justify-center items-center relative gap-10"
  >
    <div
      class="text-white absolute w-full flex flex-col justify-between left-1/2 top-1/2 h-2/3 -translate-x-1/2 -translate-y-1/2"
    >
      <p
        v-text="resultMessage"
        class="text-4xl font-semibold rotate-180 text-center"
      ></p>
      <p
        v-text="resultMessage"
        class="text-4xl font-semibold text-center"
      ></p>
    </div>
    <ul
      class="flex flex-wrap text-white relative z-10 flex-col w-80 justify-between content-between aspect-square rounded-2xl overflow-hidden"
    >
      <li
        v-for="(cell, i) in cells"
        :key="i"
        @click="handleCellClick(i)"
        v-text="cell"
        :class="`${textCol(i)} aspect-square w-[33%] h-[33%] flex font-bold items-center justify-center text-6xl bg-yellow-600 cursor-pointer hover:opacity-60`"
      ></li>
    </ul>
    <router-link
    class="absolute left-1/2 -translate-x-1/2 top-2 w-full text-center py-2 bg-transparent border-2 border-red-600 text-red-600 font-semibold tracking-wide hover:border-transparent hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300 max-w-80 rounded-xl text-2xl"
    to="/"
  >
    change mood
  </router-link>
  </div>
</template>
// TODO: can't win before 3 moves for each player
<script>
export default {
  name: "App",
  data() {
    return {
      cells: ["", "", "", "", "", "", "", "", ""],
      round: "X",
      filledCells: [],
    };
  },
  computed: {
    resultMessage() {
      const winner = this.chooseWinner();
      if (winner === "X") {
        this.resetGame();
        return "Player X won 🥳!!";
      } else if (winner === "O") {
        this.resetGame();
        return "Player O won 🥳!!";
      } else if (winner === "draw") {
        this.resetGame();
        return "Draw 🤝 !!";
      } else {
        return `player ${this.round}'s turn`;
      }
    },
  },
  methods: {
    textCol(i){
      if(this.filledCells.length == 6&&i == this.filledCells[0].index&&!this.chooseWinner()){
        return "text-cyan-800 ";
      }
    },
    handleCellClick(index) {
      if (!this.cells[index] && !this.chooseWinner()) {
        this.cells[index] = this.round;
        this.switchRound();
        this.specialGame(index);
      }
    },
    specialGame(i) {
      if (this.filledCells.length == 6) {
        this.cells[this.filledCells[0].index] = "";
        this.filledCells.shift();
      }
      this.filledCells.push({
        inner: this.cells[i],
        index: i,
      });
    },
    switchRound() {
      this.round = this.round === "X" ? "O" : "X";
    },
    resetGame() {
      setTimeout(() => {
        this.cells = ["", "", "", "", "", "", "", "", ""];
        this.round = "X";
        this.filledCells = [];
      }, 1500);
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
