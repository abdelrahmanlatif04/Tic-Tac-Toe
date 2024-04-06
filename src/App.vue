
<script>
export default {
  name: "App",
  data() {
    return {
      cells: ["", "", "", "", "", "", "", "", ""],
      round: "X",
    };
  },
  methods: {
    play(i) {
      if (!this.cells[i] && !this.chooseWinner()) {
        this.cells[i] = this.round;
        this.switchRound();
      }
    },
    switchRound() {
      this.round = this.round == "X" ? "O" : "X";
    },
    showResult(winner) {
      if (winner == "X") {
        this.resetGame();
        return "player X won 🥳!!";
      } else if (winner == "O") {
        this.resetGame();
        return "player O won 🥳!!";
      } else if (winner == "draw") {
        this.resetGame();
        return "Draw 🤝 !!";
      }
    },
    resetGame() {
      setTimeout(() => {
        location.reload();
      }, 600);
    },
    chooseWinner() {
      let winner = null;
      let winnerComp = [
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
        }
      }
      if (!winner) {
        let isDraw = true;
        for (let i = 0; i < this.cells.length; i++) {
          if (this.cells[i] == "") {
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



<template>
  <div
    class="bg-purple-400 w-full h-[100vh] flex flex-col justify-center items-center relative gap-10"
  >
    <h1
      class="text-5xl font-semibold text-gray-200 absolute top-20"
      @click="this.resetGame()"
    >
      Tic Tac Toe
    </h1>
    <ul
      class="flex flex-wrap flex-col w-80 justify-between content-between aspect-square"
    >
      <li
        v-for="(cell, i) in cells"
        :key="cell"
        v-text="cells[i]"
        @click="
          play(i);
          chooseWinner();
        "
        class="aspect-square w-[33%] h-[33%] flex items-center justify-center text-6xl bg-yellow-300 cursor-pointer hover:opacity-60 text-white"
      ></li>
    </ul>
    <div
    v-text="showResult(this.chooseWinner())"
      class="result text-white text-3xl absolute bottom-28 font-semibold"
    ></div>
  </div>
</template>