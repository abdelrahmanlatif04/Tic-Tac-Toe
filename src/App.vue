<template>
  <div class="bg-gray-100 font-mono overflow-hidden w-screen h-screen">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/*.v-enter-active,
.v-leave-active {
  transition: all 0.7s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(0, -100px);
}*/
/*Temporarliy closed*/
</style>
