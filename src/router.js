import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Session/Login.vue'
import Singup from './components/Session/SingUp.vue'
import Tickets from './components/Tickets/Tickets.vue'
import Sales from './components/Sales/Sales.vue'
import Events from './components/Events/Events.vue'


<<<<<<< HEAD
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
  {
      path: '/user/tickets',
      name: 'tickets',
      component: Tickets,
  },
=======
const routes = [{
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
    // {
    //   path: '/events',
    //   name: 'events',
    //   component:'Events'
    // },
    {
        path: '/user/tickets',
        name: 'tickets',
        component: Tickets,
    },
>>>>>>> e4aca04ba64f71b1feaddcba0cc631ea1f1211ff
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router