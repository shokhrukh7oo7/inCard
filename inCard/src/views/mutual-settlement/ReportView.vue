<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseTable from '@/components/BaseTable.vue';

const allCompanies = [
    { value: "All", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

const filterFields = [
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Тип карты' } },
]

// table
const reportTable = [
    { key: '', label: '' },
]
const reportTableData = ref([]);
</script>

<template>
    <div class="report-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="report-table-wrapper">
            <div class="report-header-wrapper">

            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="reportTable" :data="reportTableData"></BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<!-- <script setup>
import { ref } from "vue";
import BaseFilter from "@/components/BaseFilter.vue";
import BaseTable from "@/components/BaseTable.vue";

/* ------------------------- ФИЛЬТР ------------------------- */

const allCompanies = [
    { value: "All", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
];

const filterFields = [
    {
        type: "select",
        model: "company",
        props: { options: allCompanies, placeholder: "Тип карты" },
    },
];

/* ------------------------ ТАБЛИЦА ------------------------ */
/* Полностью отражает структуру твоего скрина */

const reportTable = [
    {
        label: " ",
        children: [
            { key: "organization", label: "Организация" },
            { key: "city", label: "Штат" },
            { key: "month", label: "Месяц" },
        ]
    },

    {
        label: "Сумма",
        children: [
            { key: "sum_spent", label: "Списание" },
            { key: "sum_return", label: "Возврата" },
            { key: "sum_total", label: "Итого" },
        ],
    },

    {
        label: "UzCard",
        children: [
            { key: "uz_spent", label: "Списание" },
            { key: "uz_return", label: "Возврата" },
            { key: "uz_total", label: "Итого" },
        ],
    },

    {
        label: "Humo",
        children: [
            { key: "humo_spent", label: "Списание" },
            { key: "humo_return", label: "Возврата" },
            { key: "humo_total", label: "Итого" },
        ],
    },

    {
        label: "Статусы",
        children: [
            { key: "isCommission", label: "С комиссией" },
        ],
    },

    {
        label: "Продажи",
        children: [
            { key: "pr_uzcard", label: "Uzcard\n(Brand)" },
            { key: "pr_humo", label: "Humo\n(Brand)" },
        ],
    },

    {
        label: "Прибыль",
        children: [
            { key: "profit_uzcard", label: "Uzcard" },
            { key: "profit_humo", label: "Humo" },
            { key: "profit_total", label: "Итого" },
        ],
    },
];

/* ------------------ ПРИМЕР ДАННЫХ ------------------ */

const reportTableData = ref([
    {
        organization: "AGT KREDIT MUZQAYMOQLARI",
        city: "Surxondaryo",
        month: "Декабрь,2025",

        sum_spent: 68923427,
        sum_return: 87942272,
        sum_total: 67259145,

        uz_spent: 63783439,
        uz_return: 57369927,
        uz_total: 62134590,

        humo_spent: 0,
        humo_return: 0,
        humo_total: 0,

        isCommission: true,

        pr_uzcard: 1,
        pr_humo: 1,

        profit_uzcard: 68632542,
        profit_humo: 11418934,
        profit_total: 145582490,
    },
]);
</script>

<template>
    <div class="report-wrapper">

        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>
       
        <div class="report-table-wrapper">
            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="reportTable" :data="reportTableData" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.report-wrapper {
    padding: 20px;
}

.report-wrapper .report-table-wrapper {
    margin-top: 20px;
}
</style> -->