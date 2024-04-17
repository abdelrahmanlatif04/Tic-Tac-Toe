<template>
  <p
    class="text-3xl font-semibold px-5 py-3 rounded-xl border-2 absolute border-red-600 text-red-600 z-10 top-2 bg-white"
  >
    coming soon
  </p>
  <div class="h-[100vh] w-full flex text-center bg-orange-500">
    <div
      class="body grid grid-cols-3 gap-1 bg-slate-700 bg-border min-w-[370px] w-3/5 max-w-[600px] aspect-square m-auto"
    >
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
      <div class="senior">
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
        <div class="junior"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
        // round : "X";
        // juniors = document.querySelectorAll(".junior");
        // juniors.forEach((e) => {
        // e.addEventListener("click", () => {
        // if(!e.textContent){
        // e.textContent = round;
        // switchRound();
        // }
        // });
        // });
        // function switchRound() {
        // round = round == "X" ? "O" : "X";
        // }
    }
},
  methods: {},
};
</script>

<style scoped>
.senior {
  @apply grid grid-cols-3 gap-1 bg-white p-1 relative;
}
.junior {
  @apply flex items-center justify-center text-2xl bg-gray-400 hover:opacity-65 cursor-pointer 
    lg:text-4xl
    md:text-3xl
    aspect-square;
}
</style>
