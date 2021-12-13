import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Session/Login.vue'
import Singup from './components/Session/SingUp.vue'
import Sales from './components/Sales/Sales.vue'
import Events from './components/Events/Events.vue'
import Tickets from './components/Tickets/Tickets.vue'


const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: Singup,
  },
  // {
  //   path: '/sales',
  //   name: 'sales',
  //   component:'Sales'
  // },
  {
    path: '/user/events',
    name: 'events',
    component:Events,
  },
  // {
  //   path: '/tickets',
  //   name: 'tickets',
  //   component:'Tickets'
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
