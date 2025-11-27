<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';

// filter
const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

// select
const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

// table
// TABLE
const telegramTable = [
    { key: 'id', label: '№' },
    { key: 'organization', label: 'Организация' },
    { key: 'bank', label: 'Банк' },
    { key: 'group', label: 'Группа' },
    { key: 'uzcard', label: 'Uzcard' },
    { key: 'humo', label: 'Humo' },
    { key: 'date', label: 'Дата' },
    { key: 'actions', label: 'Действие' },
]

const telegramData = ref([
    {
        id: 1,
        organization: 'Positive solutions',
        bank: 'Garant Bank',
        group: 'positive group',
        uzcard: 'M: 900828506 ; T: 91600285',
        humo: 'M: 900828479 ; T: 91600283',
        date: '21.10.2024 04:49:57',
    },
]);
</script>

<template>
    <div class="telegram-bot-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="telegram-table-wrapper">
            <div class="telegram-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton>Добавить</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="telegramTable" :data="telegramData">
                        <template #actions="{ row }">
                            <BaseButton class="edit-btn" @click="$router.push(`/org/list/${row.id}`)">
                                <img src="@/assets/images/pencil.svg" alt="image" />
                            </BaseButton>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>