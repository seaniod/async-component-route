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
      {path: 'About', name: 'About', component: Year},
      {path: 'People', name: 'People', component: Year},
      {path: 'Platform', name: 'Platform', component: Year}
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  linkActiveClass: 'active'
});


export default router;
