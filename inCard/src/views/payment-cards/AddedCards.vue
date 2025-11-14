<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseTable from '@/components/BaseTable.vue';

const allCompanies = [
    { value: "Все", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

const filterFields = [
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'input', model: 'cardNumber', props: { id: 'cardNumber', placeholder: 'Номер карты' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Тип карты' } },
]

// TABLE
const columns = [
    { key: 'id', label: '№' },
    { key: 'cardOwner', label: 'Владелец карты' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'cardExpiration', label: 'Срок карты' },
    { key: 'type', label: 'Тип' },
    { key: 'added', label: 'Добавлено' },
]

const data = ref([])
</script>

<template>
    <div class="all-cards-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="all-cards-table-wrapper">

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="columns" :data="data">
                        <!-- Слот для статуса -->
                        <template #status="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Активный' ? 'status-active' :
                                    value === 'Заблокировано' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>

                        <!-- Слот для СМС -->
                        <template #sms="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Включен' ? 'status-active' :
                                    value === 'Отключен' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>