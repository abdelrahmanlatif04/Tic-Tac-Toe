// TODO: back-to-menu button in every page to get back to the choose-mode page
<template>
  <div
    class="w-full h-[100vh] relative flex flex-col justify-center items-center"
  >
    <ul v-if="!selectedChoice">
      <li
        @click="chooseMode(choice)"
        v-for="choice in choices"
        :key="choice"
      >
        
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      choices: [
        { name: "Infinity", img: "/Infinity.png" },
        { name: "Classic", img: "/Classic.png" },
        { name: "Ultimate", img: "/Ultimate.png" },
      ],
      selectedChoice: null,
    };
  },
  methods: {
    chooseMode(selected) {
      this.selectedChoice = selected.name;
    },
  },
};
</script>

<style scoped>
ul:hover > :not(:hover) {
  @apply opacity-20 border-transparent;
}
</style>
