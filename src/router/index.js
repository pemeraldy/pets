import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cats from "../views/Cats.vue";
import Dogs from "../views/Dogs.vue";
import Pets from "../views/Pets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs
  },
  {
    path: "/pets",
    name: "Pets",
    component: Pets
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
