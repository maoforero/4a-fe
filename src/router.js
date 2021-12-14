import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Session/Login.vue'
import Singup from './components/Session/SingUp.vue'
import Tickets from './components/Tickets/Tickets.vue'
import Sales from './components/Sales/Sales.vue'
import Events from './components/Events/Events.vue'

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
  {
    path: '/user/events',
    name: 'events',
    component:Events,
  },
  {
      path: '/user/tickets',
      name: 'tickets',
      component: Tickets,
  },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router