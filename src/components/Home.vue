<template>
  <div
    class="sm:w-1/2 w-[165px] min-w-40 h-fit grid sm:gap-x-8 gap-x-4 gap-y-2 place-content-center grid-cols-1 sm:grid-cols-3"
  >
    <router-link
      class="transition-all duration-500 bg-transparent border-2 rounded-lg flex flex-col cursor-pointer"
      v-for="choice in choices"
      :key="choice"
      :to="'/' + choice.name.toLowerCase()"
      ><img class="p-2 pb-5" :src="choice.img" />
      <p
        v-text="choice.name"
        class="mb-1 lg:text-3xl md:text-2xl sm:text-lg text-2xl text-center"
      ></p
    ></router-link>
  </div>
</template>

<script>
export default {
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

<style></style>
