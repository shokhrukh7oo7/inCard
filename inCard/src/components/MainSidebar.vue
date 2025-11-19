<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import '../assets/css/main.css'

const router = useRouter()
const route = useRoute()

const openIndex = ref(null)
const openGroup = ref(null)
const theme = ref(localStorage.getItem('theme') || 'light')

defineProps({
    isOpen: Boolean,
})
const isMobile = computed(() => window.innerWidth < 1200)

const toggle = (index, group) => {
    if (openGroup.value === group && openIndex.value === index) {
        openGroup.value = null
        openIndex.value = null
    } else {
        openGroup.value = group
        openIndex.value = index
    }
}

const goTo = (path) => {
    if (path) router.push(path)
}

const isActive = (path) => route.path === path

onMounted(() => {
    window.addEventListener('theme-changed', (e) => {
        theme.value = e.detail
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('theme-changed', () => { })
})

// === Данные меню ===
const payments = [
    {
        label: 'Платильщики',
        icon: new URL('../assets/images/sidebar/people.svg', import.meta.url).href,
        children: [
            {
                label: 'Платильщики и Контракты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/payers/list'
            },
            {
                label: 'О персональных данных',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/payers/data'
            },
            {
                label: 'Белый лист',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/payers/whitelist'
            },
        ],
    },
    {
        label: 'Оплата',
        icon: new URL('../assets/images/sidebar/credit-card.svg', import.meta.url).href,
        children: [{
            label: 'Автоплатежи',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/payments/autopay'
        }],
    },
    {
        label: 'Платежные карты',
        icon: new URL('../assets/images/sidebar/credit-card-front.svg', import.meta.url).href,
        children: [
            {
                label: 'Все карты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/cards/all'
            },
            {
                label: 'Добавленные карты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/cards/added'
            },
            {
                label: 'Отклоненные карты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/cards/rejected'
            },
            {
                label: 'Неопознанные карты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/cards/unidentified'
            }
        ],
    },
    {
        label: 'Импорт',
        icon: new URL('../assets/images/sidebar/import.svg', import.meta.url).href,
        children: [
            {
                label: 'Импортированные файлы',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/imports/files'
            },
        ],
    },
    { label: 'Транзакции', icon: new URL('../assets/images/sidebar/char.svg', import.meta.url).href, route: '/transactions' },
    {
        label: 'Операции',
        icon: new URL('../assets/images/sidebar/operation.svg', import.meta.url).href,
        children: [
            {
                label: 'Возврат средств',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/operations/create'
            },
            {
                label: 'Синхронизация ABS',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/operations/transactions-abs'
            },
        ],
    },
]

const system = [
    {
        label: 'Организации', icon: new URL('../assets/images/sidebar/organization.svg', import.meta.url).href,
        children: [{
            label: 'Организация',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/list'
        },
        {
            label: 'Пользователи',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/add'
        },
        {
            label: 'Терминалы',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/terminals/list'
        },
        {
            label: 'Лимит настройка',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/limit'
        },
        {
            label: 'Система организации',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/system'
        },
        {
            label: 'Интеграции по API',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/add'
        },
        {
            label: 'Телеграм-бот',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/org/add'
        },
        ]
    },
    {
        label: 'Банк', icon: new URL('../assets/images/sidebar/bank.svg', import.meta.url).href,
        children: [{
            label: 'Пользователи',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/bank/accounts'
        }]
    },
    {
        label: 'Платный запрос', icon: new URL('../assets/images/sidebar/request.svg', import.meta.url).href,
        children: [{
            label: 'Запросы',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/requests'
        },
        {
            label: 'Настройки',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/requests'
        }
        ]
    },
    {
        label: 'События', icon: new URL('../assets/images/sidebar/star.svg', import.meta.url).href,
        children: [{
            label: 'Список событий',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/events'
        }]
    },
    {
        label: 'Взаимо расчет', icon: new URL('../assets/images/sidebar/diagram.svg', import.meta.url).href,
        children: [
            {
                label: 'Отчеты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/balance/debts'
            }, {
                label: 'Отчеты',
                icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
                route: '/balance/reports'
            }
        ]
    },
    {
        label: 'Настройки', icon: new URL('../assets/images/sidebar/settings.svg', import.meta.url).href,
        children: [{
            label: 'Интеграции систем',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href, route: '/settings/system'
        }, {
            label: 'Администраторы',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/settings/access'
        }]
    },
]

const partner = [
    {
        label: 'Партнеры', icon: new URL('../assets/images/sidebar/partner.svg', import.meta.url).href,
        children: [{
            label: 'Список партнёров',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/partners/list'
        }, {
            label: 'Добавить партнёра',
            icon: new URL('../assets/images/sidebar/circle.svg', import.meta.url).href,
            route: '/partners/add'
        }]
    },
]
</script>

<template>
    <aside class="sidebar" :class="{ open: isOpen }">
        <div class="logo-wrapper">
            <img v-if="theme === 'dark'" src="../assets/images/logo-white.png" alt="image" />
            <img v-else src="../assets/images/logo.svg" alt="image" />
        </div>

        <!-- === Главная (отдельно сверху) === -->
        <div class="menu-item">
            <RouterLink to="/" class="menu-link" :class="{ active: isActive('/') }">
                <div class="menu-left">
                    <img src="../assets/images/sidebar/home.svg" alt="home" />
                    <span>Главная</span>
                </div>
            </RouterLink>
        </div>

        <!-- === Погашения === -->
        <div class="section">
            <div class="section-title">
                <div class="line"></div>
                <p>Погашения</p>
            </div>

            <div v-for="(item, i) in payments" :key="i" class="menu-item">
                <div class="menu-link" :class="{ active: isActive(item.route) }"
                    @click="item.children ? toggle(i, 'payments') : goTo(item.route)">
                    <div class="menu-left">
                        <img :src="item.icon" alt="" />
                        <span>{{ item.label }}</span>
                    </div>
                    <img v-if="item.children" class="arrow"
                        :class="{ open: openGroup === 'payments' && openIndex === i }"
                        src="../assets/images/sidebar/arrow-down.svg" alt="arrow" />
                </div>

                <transition name="dropdown">
                    <div v-if="item.children && openGroup === 'payments' && openIndex === i" class="submenu">
                        <RouterLink v-for="(sub, j) in item.children" :key="j" :to="sub.route" class="submenu-link"
                            :class="{ active: isActive(sub.route) }">
                            <img v-if="sub.icon" :src="sub.icon" alt="" class="submenu-icon" />
                            {{ sub.label }}
                        </RouterLink>
                    </div>
                </transition>
            </div>
        </div>

        <!-- === Система === -->
        <div class="section">
            <div class="section-title">
                <div class="line"></div>
                <p>Система</p>
            </div>

            <div v-for="(item, i) in system" :key="i" class="menu-item">
                <div class="menu-link" :class="{ active: isActive(item.route) }"
                    @click="item.children ? toggle(i, 'system') : goTo(item.route)">
                    <div class="menu-left">
                        <img :src="item.icon" alt="" />
                        <span>{{ item.label }}</span>
                    </div>
                    <img v-if="item.children" class="arrow" :class="{ open: openGroup === 'system' && openIndex === i }"
                        src="../assets/images/sidebar/arrow-down.svg" alt="arrow" />
                </div>

                <transition name="dropdown">
                    <div v-if="item.children && openGroup === 'system' && openIndex === i" class="submenu">
                        <RouterLink v-for="(sub, j) in item.children" :key="j" :to="sub.route" class="submenu-link"
                            :class="{ active: isActive(sub.route) }">
                            <img v-if="sub.icon" :src="sub.icon" alt="" class="submenu-icon" />
                            {{ sub.label }}
                        </RouterLink>
                    </div>
                </transition>
            </div>
        </div>

        <!-- === Партнерство === -->
        <div class="section">
            <div class="section-title">
                <div class="line"></div>
                <p>Партнерство</p>
            </div>

            <div v-for="(item, i) in partner" :key="i" class="menu-item">
                <div class="menu-link" :class="{ active: isActive(item.route) }"
                    @click="item.children ? toggle(i, 'partner') : goTo(item.route)">
                    <div class="menu-left">
                        <img :src="item.icon" alt="" />
                        <span>{{ item.label }}</span>
                    </div>
                    <img v-if="item.children" class="arrow"
                        :class="{ open: openGroup === 'partner' && openIndex === i }"
                        src="../assets/images/sidebar/arrow-down.svg" alt="arrow" />
                </div>

                <transition name="dropdown">
                    <div v-if="item.children && openGroup === 'partner' && openIndex === i" class="submenu">
                        <RouterLink v-for="(sub, j) in item.children" :key="j" :to="sub.route" class="submenu-link"
                            :class="{ active: isActive(sub.route) }">
                            <img v-if="sub.icon" :src="sub.icon" alt="" class="submenu-icon" />
                            {{ sub.label }}
                        </RouterLink>
                    </div>
                </transition>
            </div>
        </div>

        <div v-if="isOpen && isMobile" class="overlay" @click="$emit('close')"></div>
    </aside>
</template>



<style scoped></style>
