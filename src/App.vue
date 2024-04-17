// TODO: back-to-menu button in every page to get back to the choose-mode page
<template>
  <div class="w-full h-[100vh] flex flex-col justify-center items-center">
    <ul
      class="sm:w-1/2 w-[165px] min-w-40 h-fit grid sm:gap-x-8 gap-x-4 gap-y-2 place-content-center grid-cols-1 sm:grid-cols-3"
      v-if="!selectedChoice"
    >
      <li
        @click="chooseMode(choice)"
        v-for="choice in choices"
        :key="choice"
        class="transition-all duration-500 bg-transparent border-2 rounded-lg flex flex-col cursor-pointer"
      >
        <img class="p-2 pb-5" :src="choice.img" />
        <p
          v-text="choice.name"
          class="mb-1 lg:text-3xl md:text-2xl sm:text-lg text-2xl text-center"
        ></p>
      </li>
    </ul>
    <Classic v-if="selectedChoice === 'Classic'" />
    <Ultimate v-else-if="selectedChoice === 'Ultimate'" />
    <Unlimited v-else-if="selectedChoice === 'Unlimited'" />

    <button
      v-if="selectedChoice"
      @click="selectedChoice = null"
      class="bg-red-500 p-1 px-2 absolute bottom-2 rounded-lg border-2 border-transparent hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 text-white text-lg"
    >
      Get back to menu
    </button>
  </div>
</template>

<script>
import Ultimate from "./components/Ultimate.vue";
import Unlimited from "./components/Unlimited.vue";
import Classic from "./components/Classic.vue";
import img1 from "./assets/infinity.png";
import img2 from "./assets/classic.png";
import img3 from "./assets/ultimate.png";

export default {
  name: "App",
  data() {
    return {
      choices: [
        { name: "Unlimited", img: img1 },
        { name: "Classic", img: img2 },
        { name: "Ultimate", img: img3 },
      ],
      selectedChoice: null,
    };
  },
  methods: {
    chooseMode(selected) {
      this.selectedChoice = selected.name;
    },
  },
  components: {
    Classic,
    Unlimited,
    Ultimate,
  },
};
</script>

<style scoped>
ul:hover > :not(:hover) {
  @apply opacity-20 border-transparent;
}
</style>
