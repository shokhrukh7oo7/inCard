<script setup>
import BaseFilter from '@/components/BaseFilter.vue';

const allCompanies = [
    { value: "Все", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

const allStatuses = [
    { value: 'all', label: 'Все' },
    { value: 'default', label: 'По умолчанию' },
    { value: 'addedManually', label: 'Добавлена в ручную' },
];

const filterFields = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Тип карты' } },
    { type: 'select', model: 'status', props: { options: allStatuses, placeholder: 'Статус действии карты' } },
]

</script>

<template>
    <div class="all-cards-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>
    </div>
</template>

<style scoped>
.status-badge {
    font-weight: 600;
}

.status-active {
    color: var(--green);
}

.status-blocked {
    color: var(--red);
}
</style>