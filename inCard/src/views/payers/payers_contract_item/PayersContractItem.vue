<script setup>
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import BaseFilter from '@/components/BaseFilter.vue'
import BaseTable from '@/components/BaseTable.vue'
import BaseProgress from '@/components/BaseProgress.vue'
import BaseBadge from '@/components/BaseBadge.vue'
import BasePayCard from '@/components/BasePayCard.vue'

// имитация данных (в реальности может быть запрос к API)
// Table
const users = [
    {
        id: 1,
        pinfl: '30907861220093',
        fullName: 'Elmurod Mominov',
        contract: '153134',
        passport: 'AA 4369116',
        branch: 'Головной офис',
    },
    {
        id: 2,
        pinfl: '12345678901234',
        fullName: 'Dilshod Karimov',
        contract: '981234',
        passport: 'AB 1234567',
        branch: 'Филиал №2',
    },
]

// CONTRACTS
const contracts = [
    { key: 'idContract', label: 'ID контракта' },
    { key: 'contractSum', label: 'Сумма списаний' },
    { key: 'company', label: 'ЕПОС' },
    { key: 'added', label: 'Добавлен' },
    { key: 'date', label: 'Дата регистрации' },
]
const dataContracts = ref([
    {
        idContract: 153134,
        contractSum: 0,
        company: 'ACCENT LINE GROUP',
        added: 'Головной офис',
        date: "16.07.2024 15:30:48",
    }
])

// TRANSACTIONS
const transactions = [
    { key: 'idPayment', label: 'ID платежа' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'comission', label: 'Комиссия' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'idTerminal', label: 'ID терминала' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'dateReversal', label: 'Дата реверсала' },
]
const dataTransactions = ref([
    {
        idPayment: '',
        idContract: '',
        sum: '',
        comission: '',
        cardNumber: '',
        idTerminal: '',
        gateway: '',
        date: '',
        dateReversal: ''
    }
])

// AUTOPAYERSACTIVE
const autopayersActive = [
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'status', label: 'Статус' },
    { key: 'progress', label: 'Прогресс' },
    { key: 'payed', label: 'Опалчено' },
    { key: 'start', label: 'Начало' },
    { key: 'actions', label: 'Перейти' },
]
const dataAutopayersActive = ref([
    {
        idContract: 153134,
        sum: '2 153 868,48',
        status: 'Активна',
        progress: 25,
        payed: 0,
        start: '16.07.2024 15:30:49',
        end: "23.08.2024 16:32:30",
    },
])


// AUTOPAYERSCOMPLETED
const autopayersCompleted = [
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'progress', label: 'Прогресс' },
    { key: 'payed', label: 'Оплачено' },
    { key: 'start', label: 'Начало' },
    { key: 'end', label: 'Окончание' },
    { key: 'actions', label: 'Перейти' },
]
const dataAutopayersCompleted = ref([
    {
        idContract: 153134,
        sum: '2 153 868, 48',
        progress: 25,
        payed: 0,
        start: '16.07.2024 15:30:49',
        end: "23.08.2024 16:32:30",
    }
])

// BASE PAY CARD
const uzcardCards = [
    {
        userName: 'Mominov Elmurodjon',
        cardName: 'Kapital Bank',
        cardNumber: '8600 03** **** 6528',
        image: new URL('@/assets/images/card/uzcard-white.svg', import.meta.url).href
    },
    {
        userName: 'John Doe',
        cardName: 'Orient Finans Bank',
        cardNumber: '8600 04** **** 7584',
        image: new URL('@/assets/images/card/uzcard-white.svg', import.meta.url).href
    }
]

const humoCards = [
    {
        userName: 'Mominov Elmurodjon',
        cardName: 'Kapital Bank',
        cardNumber: '9600 32** **** 1123',
        image: new URL('@/assets/images/card/logo_humo.png', import.meta.url).href
    },
    {
        userName: 'John Doe',
        cardName: 'Orient Finans Bank',
        cardNumber: '9600 14** **** 9844',
        image: new URL('@/assets/images/card/logo_humo.png', import.meta.url).href
    }
]

function handleReject() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Отклонена карта!",
        showConfirmButton: false,
        timer: 1500
    });
}



const route = useRoute()
const userId = Number(route.params.id)

const user = computed(() => users.find(u => u.id === userId))

// Tabs
const activeTab = ref('general');
const activeTabTable = ref('active')
const activeCardTabs = ref('uzcard')

const idContract = ref([
    { value: '1', label: 'Компания 1' },
    { value: '2', label: 'Компания 2' },
]);

const filterFields = [
    // { type: 'input', model: 'contract', props: { id: 'contract', placeholder: 'Контракт' } },
    { type: 'select', model: 'company', props: { options: idContract.value, placeholder: 'Выберите компанию' } }
]

</script>

<template>
    <div class="payer-details-wrapper">
        <div class="row">
            <div class="col-12 col-lg-3 col-md-4">
                <div class="user-detail-wrapper">
                    <div class="user-detail-content">
                        <div class="payer-detail-header-wrapper">
                            <h1>Данные плательщика</h1>
                        </div>

                        <div class="payer-detail-content-wrapper">
                            <div v-if="user" class="detail-items">
                                <p><strong>ID:</strong> {{ user.id }}</p>
                                <p><strong>ФИО:</strong> {{ user.fullName }}</p>
                                <p><strong>ПИНФЛ:</strong> {{ user.pinfl }}</p>
                                <p><strong>Контракт:</strong> {{ user.contract }}</p>
                                <p><strong>Серия и Номер паспорта:</strong> {{ user.passport }}</p>
                                <p><strong>Филиал:</strong> {{ user.branch }}</p>
                            </div>
                            <div v-else>
                                <p>Пользователь не найден.</p>
                            </div>
                        </div>
                    </div>

                    <BaseButton>Запросить платный запрос по ПИНФЛ через HUMO</BaseButton>
                </div>
            </div>

            <div class="col-12 col-lg-9 col-md-8">
                <div class="payer-tabs-wrapper">
                    <div class="tabs-demo">
                        <BaseTabs v-model="activeTab" :tabs="[
                            { name: 'general', label: 'Обшие данные' },
                            { name: 'cards', label: 'Карты' },
                        ]">
                            <template #default="{ activeTab }">
                                <div v-if="activeTab === 'general'">
                                    <div class="payers-contract-tab-filter-wrapper">
                                        <BaseFilter :fields="filterFields" title="Фильтры поиска">Фильтр поиска
                                        </BaseFilter>
                                    </div>

                                    <!-- КОНТРАКТЫ -->
                                    <div class="payers-contract-tab-table">
                                        <h5 class="table-header">Контракты</h5>
                                        <div class="table-wrapper">
                                            <div class="table-component">
                                                <BaseTable :columns="contracts" :data="dataContracts"></BaseTable>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- АВТОПЛАТЕЖИ -->
                                    <div class="payers-contract-tab-table">
                                        <h5 class="table-header">Автоплатежи</h5>

                                        <div class="tabs-demo">
                                            <BaseTabs v-model="activeTabTable" :tabs="[
                                                { name: 'active', label: 'Активные' },
                                                { name: 'completed', label: 'Завершенные' }
                                            ]">
                                                <template #default>
                                                    <div v-if="activeTabTable === 'active'">
                                                        <div class="table-wrapper">
                                                            <div class="table-component">
                                                                <BaseTable :columns="autopayersActive"
                                                                    :data="dataAutopayersActive">
                                                                    <template #status="{ value }">
                                                                        <BaseBadge :badge="value"></BaseBadge>
                                                                    </template>

                                                                    <template #progress="{ value }">
                                                                        <BaseProgress :percentage="value">
                                                                        </BaseProgress>
                                                                    </template>

                                                                    <template #actions="{ row }">
                                                                        <router-link :to="`/payers/${row.id}`"
                                                                            title="Перейти">
                                                                            <img src="@/assets/images/table/arrow-circle.svg"
                                                                                alt="image" />
                                                                        </router-link>
                                                                    </template>
                                                                </BaseTable>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-else-if="activeTabTable === 'completed'">
                                                        <div class="table-wrapper">
                                                            <div class="table-component">
                                                                <BaseTable :columns="autopayersCompleted"
                                                                    :data="dataAutopayersCompleted">
                                                                    <template #progress="{ value }">
                                                                        <BaseProgress :percentage="value">
                                                                        </BaseProgress>
                                                                    </template>

                                                                    <template #actions="{ row }">
                                                                        <router-link :to="`/payers/${row.id}`"
                                                                            title="Перейти">
                                                                            <img src="@/assets/images/table/arrow-circle.svg"
                                                                                alt="image" />
                                                                        </router-link>
                                                                    </template>
                                                                </BaseTable>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </BaseTabs>
                                        </div>

                                    </div>

                                    <!-- ТРАНЗАКЦИИ -->
                                    <div class="payers-contract-tab-table">
                                        <h5 class="table-header">Транзакции</h5>
                                        <div class="table-wrapper">
                                            <div class="table-component">
                                                <BaseTable :columns="transactions" :data="dataTransactions"></BaseTable>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-else-if="activeTab === 'cards'" class="tab-cards-wrapper">
                                    <div class="pay-card-wrapper">
                                        <BaseTabs v-model="activeCardTabs" :tabs="[
                                            { name: 'uzcard', label: 'Uzcard' },
                                            { name: 'humo', label: 'Humo' },
                                            { name: 'rejectedCard', label: 'Отклоненные Карты' },
                                        ]">
                                            <div v-if="activeCardTabs === 'uzcard'">
                                                <div class="bank-card-wrapper">
                                                    <BasePayCard v-for="card in uzcardCards" :key="card.cardNumber"
                                                        :user-name="card.userName" :card-name="card.cardName"
                                                        :card-number="card.cardNumber" :image="card.image"
                                                        @reject="handleReject(card)" />
                                                </div>
                                            </div>

                                            <div v-else-if="activeCardTabs === 'humo'">
                                                <div class="bank-card-wrapper">
                                                    <BasePayCard v-for="card in humoCards" :key="card.cardNumber"
                                                        :user-name="card.userName" :card-name="card.cardName"
                                                        :card-number="card.cardNumber" :image="card.image"
                                                        @reject="handleReject(card)" />
                                                </div>
                                            </div>

                                            <div v-else-if="activeCardTabs === 'rejectedCard'">
                                                <div class="bank-card-wrapper">
                                                    <p style="text-align: center;">Нет карт</p>
                                                </div>
                                            </div>
                                        </BaseTabs>
                                    </div>
                                </div>

                            </template>
                        </BaseTabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped></style>
