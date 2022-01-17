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
    path: '/:year(20\\d\\d)',
    name: 'Year',
    component: Year,
    children: [
      {path: ':page', component: Year}
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  linkActiveClass: 'active'
});

export default router;
