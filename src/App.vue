// TODO: back-to-menu button in every page to get back to the choose-mode page
<template>
  <div class="bg-slate-400">
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
    };
  },
};
</script>

<style scoped>
ul:hover > :not(:hover) {
  @apply opacity-20 border-transparent;
}
</style>
