<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';

const allCompanies = [
    { value: "All", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

const filterFields = [
    { type: 'input', model: 'idTerminal', props: { id: 'idTerminal', placeholder: 'ID Терминала' } },
    { type: 'input', model: 'idMerchant', props: { id: 'idMerchant', placeholder: 'ID Мерчанта' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Тип карты' } },
]

// select 
const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

// tabs
// TABLE
const terminalsTable = [
    { key: 'id', label: '№' },
    { key: 'organization', label: 'Организация' },
    { key: 'bank', label: 'Банк' },
    { key: 'group', label: 'Группа' },
    { key: 'uzcard', label: 'Uzcard' },
    { key: 'humo', label: 'Humo' },
    { key: 'date', label: 'Дата' },
    { key: 'actions', label: 'Действие' },
]

const terminalsData = ref([
    {
        id: 1,
        organization: 'ACCENT LINE OOO (BOSCH)',
        bank: 'Aloqa bank',
        group: 'ACCENT LINE GROUP	',
        uzcard: 'M: 903100000033887 ; T: 97012354',
        humo: 'M: 004010541098808 ; T: 1963707S',
        date: '05.07.2024 09:59:33',
    },
]);

</script>

<template>
    <div class="org-terminals-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="terminal-content-wrapper">
            <div class="organization-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton>Добавить терминал</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="terminalsTable" :data="terminalsData">
                        <template #actions="{ row }">
                            <router-link :to="`/terminals/${row.id}`" title="Перейти">
                                <img src="@/assets/images/pencil.svg" alt="image" />
                            </router-link>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>