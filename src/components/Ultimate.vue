<template>
  <div class="h-[100vh] w-full flex text-center bg-orange-500">
    <div
      class="text-white absolute w-full flex flex-col justify-between left-1/2 top-1/2 h-2/3 -translate-x-1/2 -translate-y-1/2"
    >
      <p
        v-text="resultMessage"
        class="text-4xl font-semibold rotate-180 text-center"
      ></p>
      <p v-text="resultMessage" class="text-4xl font-semibold text-center"></p>
    </div>
    <div
      class="body grid grid-cols-3 gap-1 font-semibold bg-gray-300 bg-border w-[430px] aspect-square m-auto"
    >
      <div
        v-for="(senior, i) in cells"
        :key="senior"
        :class="`grid grid-cols-3 gap-1 w-full bg-orange-500 p-1 z-10 relative`"
      >
        <div
          v-for="(cell, j) in senior.inner"
          :key="cell"
          v-text="cell"
          @click="handleCellClick(i, j)"
          :class="`${changeStyle(
            i
          )} flex items-center justify-center text-2xl hover:opacity-65 cursor-pointer lg:text-4xl md:text-3xl aspect-square`"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cells: [
        { inner: ["X", "X", "O", "O", "O", "X", "X", "O", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        { inner: ["", "", "", "", "", "", "", "", ""], state: null },
      ],
      round: "X",
      current: null,
    };
  },
  computed: {
    resultMessage() {
      const winner = null;
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
    handleCellClick(i, j) {
      let temp = this.round;
      if (
        !this.cells[i].inner[j] &&
        (this.current == null || i == this.current)
      ) {
        this.cells[i].inner[j] = temp;
        this.switchRound();
        this.current = j;
        this.chooseJuniorWinner(i);
      }
    },
    switchRound() {
      this.round = this.round === "X" ? "O" : "X";
    },
    changeStyle(j) {
      if (this.current == null) {
        return "bg-blue-400";
      } else if (this.current != j) {
        return "bg-gray-400";
      } else {
        return "bg-blue-400";
      }
    },
    resetGame() {
      setTimeout(() => {
        this.cells = [
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
          { inner: ["", "", "", "", "", "", "", "", ""], state: null },
        ];
        this.round = "X";
      }, 1500);
    },
    chooseJuniorWinner(x) {
      let cell = this.cells[x];
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
          cell.inner[winnerComp[i][0]] !== "" &&
          cell.inner[winnerComp[i][0]] === cell.inner[winnerComp[i][1]] &&
          cell.inner[winnerComp[i][1]] === cell.inner[winnerComp[i][2]]
        ) {
          winner = cell.inner[winnerComp[i][0]];
          break;
        }
      }
      if (!winner) {
        let draw = true;
        for (let i = 0; i < 9; i++) {
          if (!cell.inner[i]) {
            draw = false;
            break;
          }
        }
        if (draw) {
          winner = "d";
        }
      }
      if (winner) {
        cell.state = winner; 
        console.log(`${x}'winners is ${winner}`);
      }
    },
  },
};
</script>

<style></style>
