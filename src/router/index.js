import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

//const year = 'views';
//const year = '../views/About.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:name',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => require(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
