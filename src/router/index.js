import { createRouter, createWebHistory } from 'vue-router'
import OngoingProjectsView from '../views/OngoingProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ongoing-projects',
      component: OngoingProjectsView
    }
  ]
})

export default router 