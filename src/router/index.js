import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Year from '../views/Year.vue';

//const year = 'views';
//const year = '../views/About.vue';


const routes = [
  {
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
  },
];

//       {path: 'Platform', name: 'Platform', component: () => require('../views/Year.vue')}



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
