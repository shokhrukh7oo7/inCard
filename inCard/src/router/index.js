import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 🔹 Страница логина — отдельный маршрут без Layout
    {
      path: '/login',
      name: 'MainLogin',
      component: () => import('@/layouts/MainLogin.vue'),
    },

    // 🔹 Остальные страницы — с общим Layout
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
        {
          path: 'payers/contracts',
          name: 'PayersContract',
          component: () => import('@/views/payers/PayersContract.vue'),
        },
      ],
    },
  ],
})

export default router
