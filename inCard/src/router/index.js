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
          path: 'payers/list',
          name: 'PayersContract',
          component: () => import('@/views/payers/PayersContract.vue'),
        },
        {
          path: 'payers/:id',
          name: 'PayersContractItem',
          component: () => import('@/views/payers/payers_contract_item/PayersContractItem.vue'),
          props: true,
        },
        {
          path: 'payments/autopay',
          name: 'AutoPayers',
          component: () => import('@/views/payers/AutopPayers.vue'),
          props: true,
        },
        {
          path: 'payers/data',
          name: 'PersonalData',
          component: () => import('@/views/personal-data/PersonalData.vue'),
          props: true,
        },
        {
          path: '/payers/whitelist',
          name: 'WhiteList',
          component: () => import('@/views/payers/WhiteList.vue'),
          props: true,
        },
        {
          path: '/cards/all',
          name: 'AllCards',
          component: () => import('@/views/payment-cards/AllCards.vue'),
          props: true,
        },
        {
          path: '/cards/added',
          name: 'AddedCards',
          component: () => import('@/views/payment-cards/AddedCards.vue'),
          props: true,
        },
        {
          path: '/cards/rejected',
          name: 'RejectedCards',
          component: () => import('@/views/payment-cards/RejectedCards.vue'),
          props: true,
        },
        {
          path: '/cards/unidentified',
          name: 'UnidentifiedCards',
          component: () => import('@/views/payment-cards/UnidentifiedCards.vue'),
          props: true,
        },
        {
          path: '/imports/files',
          name: 'ImportFiles',
          component: () => import('@/views/imports/ImportFiles.vue'),
          props: true,
        },
        {
          path: '/transactions',
          name: 'TransactionsView',
          component: () => import('@/views/transactions/TransactionsView.vue'),
          props: true,
        },
      ],
    },
  ],
})

export default router
