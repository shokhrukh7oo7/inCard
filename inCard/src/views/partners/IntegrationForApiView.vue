<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue';
// import BaseInput from '@/components/BaseInput.vue';

// ==========================================================================================
// filter
const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]
// ==========================================================================================

const partnerTable = [
    { key: 'id', label: '№' },
    { key: 'partner', label: 'Партнет' },
    { key: 'apiLogin', label: 'API Логин' },
    { key: 'status', label: 'Статус' },
    { key: 'actions', label: 'Действие' },
]

const partnerTableData = ref([
    {
        id: 1,
        partner: 'incard partner',
        apiLogin: 'incard_partner_acc',
        status: 'Активный'
    }
])
</script>

<template>
    <div class="partner-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="partner-table-wrapper">
            <div class="partner-btn-wrapper">
                <BaseButton class="add-btn" @click="$router.push(`/partners/api-integration-add`)">Добавить</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="partnerTable" :data="partnerTableData">
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
                            <BaseButton class="btn edit-user-btn" @click="openEditUser(row)">
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