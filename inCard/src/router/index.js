import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout, // общий layout
      children: [
        {
          path: '',
          name: 'HomeView',
          component: HomeView,
        },
        {
          path: 'profile',
          name: 'Profile',
          component: () => import('@/views/ProfileView.vue'),
        },
        // {
        //   path: 'about',
        //   name: 'about',
        //   component: AboutView,
        // },
      ],
    },
  ],
})

export default router
