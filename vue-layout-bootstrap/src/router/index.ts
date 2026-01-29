import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/AppHome.vue'
import About from '@/pages/AppAbout.vue'
import Contact from '@/pages/Appcontact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
})

export default router
