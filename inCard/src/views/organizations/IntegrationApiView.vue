<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';

// ==========================================================================================
// filter select 
const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// ==========================================================================================
// table start
const integrationApiTable = [
    { key: 'id', label: '№' },
    { key: 'organization', label: 'Организация' },
    { key: 'loginApi', label: 'API Логин' },
    { key: 'status', label: 'Статус' },
    { key: 'actions', label: 'Действие' },
]

const integrationApiTableData = ref([
    {
        id: '1',
        organization: "Kafolat sug'urta AJ",
        loginApi: 'kafolat_insurance_aj',
        status: 'Активный'
    }
])
// ==========================================================================================
const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

</script>

<template>
    <div class="integration-api-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="integration-api-table-wrapper">
            <div class="integration-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton class="add-integration" id="add-integration"
                    @click="$router.push('/org/integration-api-add')">Добавить</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="integrationApiTable" :data="integrationApiTableData">
                        <!-- status slot -->
                        <template #status="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Активный' ? 'status-active' :
                                    value === 'Заблокировано' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>
                        <!-- actions slot -->
                        <template #actions="{ row }">
                            <BaseButton class="integration-api-table-btn" @click="$router.push(`/org/list/${row.id}`)">
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