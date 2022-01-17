import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Year from '../views/Year.vue';
import BaseObject from "../views/BaseObject.vue";

//const year = 'views';
//const year = '../views/About.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
//  { path: "/2021/:catchAll(.*)*", component: BaseObject },
//  { path: "/2022/:catchAll(.*)*", component: BaseObject },
  {
    path: '/:year(20\\d\\d)',
    name: 'Year',
    component: Year,
    children: [
      {path: 'About', name: 'about', component: BaseObject},
      {path: 'People', name: 'People', component: BaseObject},
      {path: 'Platform', name: 'Platform', component: BaseObject}
    ]
  },
];

//       {path: 'Platform', name: 'Platform', component: () => require('../views/Year.vue')}



//const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
//  routes
//});

const router = createRouter({
  history: createWebHistory("/"),
  routes
});


export default router;
