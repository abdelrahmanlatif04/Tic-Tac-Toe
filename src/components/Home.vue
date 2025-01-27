<template>
  <div class="w-full h-[100vh] flex justify-center items-center font-bold tracking-widest">
    <div
      class="sm:max-w-2xl max-w-40 mx-auto h-fit grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
    >
      <router-link
        class="transition-all duration-300 bg-white shadow-lg rounded-lg flex flex-col cursor-pointer hover:opacity-50 hover:scale-110 "
        v-for="choice in choices"
        :key="choice"
        :to="'/' + choice.toLowerCase()"
        ><img class="p-3" :src="'./' + choice + '.png'" />
        <p
          v-text="choice"
          class="text-2xl text-center border-t border-slate-400 py-2"
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
