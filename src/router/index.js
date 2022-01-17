import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';
import Year from '../views/Year.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2021/About',
    name: 'About1',
    component: Year
  },
  {
    path: '/2021/People',
    name: 'People1',
    component: Year
  },
  {
    path: '/2021/Program',
    name: 'Program1',
    component: Year
  },
  {
    path: '/2022/About',
    name: 'About2',
    component: Year
  },
  {
    path: '/2022/People',
    name: 'People2',
    component: Year
  },
  {
    path: '/2022/Program',
    name: 'Program2',
    component: Year
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  linkActiveClass: 'active'
});


export default router;
