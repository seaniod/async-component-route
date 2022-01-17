import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Year from '../views/Year.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:year(20\\d\\d)',
    name: 'About',
    component: Year,
    children: [
      {path: 'About', name: 'About', component: Year},
      {path: 'People', name: 'People', component: Year},
      {path: 'Program', name: 'Program', component: Year}
    ]
  },
  {
    path: '/:pathMatch(.*)*', // https://stackoverflow.com/questions/50961082
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});


export default router;
