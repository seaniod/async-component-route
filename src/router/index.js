import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BaseObject from "../views/BaseObject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { path: "/object/about", name: "about", component: BaseObject },
  { path: "/object/people", name: "people", component: BaseObject }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
