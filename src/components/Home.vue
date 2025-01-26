<template>
  <div class="w-full h-[100vh] flex justify-center items-center">
    <div
      class="sm:max-w-2xl max-w-40 mx-auto h-fit grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
    >
      <router-link
        class="transition-all duration-300 bg-white shadow-lg p-1 rounded-lg flex flex-col cursor-pointer hover:opacity-50"
        v-for="choice in choices"
        :key="choice"
        :to="'/' + choice.toLowerCase()"
        ><img class="p-2 pb-5" :src="'./' + choice + '.png'" />
        <p
          v-text="choice"
          class="mb-1 text-2xl  text-center"
        ></p
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: ["Infinity", "Classic", "Ultimate"],
    };
  },
};
</script>

<style></style>
