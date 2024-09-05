import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Ultimate from "./components/Ultimate.vue";
import Infinity from "./components/Infinity.vue";
import Classic from "./components/Classic.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ultimate",
    name: "ultimate",
    component: Ultimate,
  },
  {
    path: "/infinity",
    name: "infinity",
    component: Infinity,
  },
  {
    path: "/classic",
    name: "classic",
    component: Classic,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

createApp(App).use(router).mount("#app");
