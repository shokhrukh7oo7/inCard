<script setup>
// IMPORT ICONS
import statisticIcon from '@/assets/images/card/statistic.svg'
import dollarIcon from '@/assets/images/card/dollar.svg'
import returnIcon from '@/assets/images/card/return.svg'
import moneyIcon from '@/assets/images/card/money.svg'
import userIcon from '@/assets/images/card/user.svg'

// IMPORT MAIN
import { ref } from "vue"
import '@/assets/css/main.css'
import BaseSelect from "@/components/BaseSelect.vue"
import BaseCard from "@/components/BaseCard.vue"
import BaseMiniCard from "@/components/BaseMiniCard.vue"

// CHART
import { useRadialChart } from '@/chart.js'

const selectedCompany = ref("")
const all = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ADILAB OOO", label: "ADILAB OOO" },
]

// BaseCard scripts
const cards = [
    {
        icon: statisticIcon,
        title1: 'Общая сумма стоимости',
        value1: '945 929 865 702,54',
        title2: 'По кол-во плательщиков',
        value2: '77 396',
    },
    {
        icon: dollarIcon,
        title1: 'Общая сумма списаний',
        value1: '133 961 024 516,6',
        title2: 'По кол-во плательщиков',
        value2: '86 050',
    },
    {
        icon: returnIcon,
        title1: 'Общая сумма отмененных',
        value1: '3 287 682 344,04',
        title2: 'По кол-во плательщиков',
        value2: '3 907',
    },
    {
        icon: moneyIcon,
        title1: 'Общая оставщаяся сумма',
        value1: '925 899 499 548,17',
        title2: 'По кол-во плательщиков',
        value2: '77 396',
    },

]

const transactions = [
    {
        icon: statisticIcon,
        title1: 'Транзакции',
        value1: '408',
    },
    {
        icon: userIcon,
        title1: 'Плательщики',
        value1: '335',
    },
    {
        icon: dollarIcon,
        title1: 'Сумма списаний',
        value1: '52 641 064,26',
    },
    {
        icon: returnIcon,
        title1: 'Отмененные транзакции',
        value1: '26',
    },
    {
        icon: userIcon,
        title1: 'Плательщики',
        value1: '13',
    },
    {
        icon: dollarIcon,
        title1: 'Сумма возврата',
        value1: '5 274 826,42',
    },

]

// HOME RADIAL CHART
const { series, chartOptions } = useRadialChart('Всего', 95)
</script>


<template>
    <div class="home-wrapper">
        <div class="select-wrapper">
            <!-- without label -->
            <BaseSelect v-model="selectedCompany" :options="all" placeholder="Все" />
            <!-- with label -->
            <!-- <BaseSelect v-model="selectedFruit" :options="all" label="Выберите фрукт" placeholder="Все" /> -->
        </div>

        <div class="home-card-wrapper">
            <BaseCard v-for="(card, index) in cards" :key="index" :icon="card.icon" :title1="card.title1"
                :value1="card.value1" :title2="card.title2" :value2="card.value2" />
        </div>

        <div class="home-transactions-wrapper">
            <div class="transactions-wrapper">
                <h6 class="transaction-header">Транзакции на сегодня</h6>

                <div class="transactions-item-wrapper">
                    <BaseMiniCard v-for="(transaction, index) in transactions" :key="index" :icon="transaction.icon"
                        :title1="transaction.title1" :value1="transaction.value1" />
                </div>
            </div>

            <div class="autopayment-wrapper">
                <h6 class="transaction-header">Автоплатежи на сегодня</h6>

                <div class="active-payment-wrapper">
                    <div class="active-left">
                        <div class="active-wrapper">
                            <div class="active">
                                <div class="green-circle"></div>
                                <p class="content">Активные</p>
                            </div>
                            <div class="total">
                                <p class="total-content">144 265</p>
                            </div>
                        </div>

                        <div class="finished-wrapper">
                            <div class="finished">
                                <div class="grey-circle"></div>
                                <p class="content">Завершенные</p>
                            </div>
                            <div class="total">
                                <p class="total-content">7</p>
                            </div>
                        </div>
                    </div>

                    <div class="active-right">
                        <div id="chart">
                            <apexchart type="radialBar" height="200" :options="chartOptions" :series="series">
                            </apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
