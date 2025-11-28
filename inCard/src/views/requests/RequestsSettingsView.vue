<script setup>
// import { ref } from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';

const requestSelect = [
    { value: "Все", label: "Все" },
    { value: "Активные", label: "Активные" },
    { value: "Неактивные", label: "Неактивные" },
]
const requestSettingTable = [
    { key: 'id', label: '№' },
    { key: 'organization', label: 'Организация' },
    { key: 'minimalSum', label: 'Минимальная сумма' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'schedule', label: 'Расписание' },
    { key: 'request', label: 'Запрос' },
    { key: 'status', label: 'Активный' },
    { key: 'date', label: 'Дата создания' },
    { key: 'actions', label: 'Действие' },
]
const requestSettingData = [
    {
        id: 1,
        organization: 'Positive solutions',
        minimalSum: 1,
        gateway: 'Uzcard',
        schedule: 'Раз в месяц',
        request: 'Поиск карт по pinfl',
        status: 'Активный',
        date: '21.10.2024 10:27:23',
    },
];
</script>

<template>
    <div class="request-setting-wrapper">
        <div class="request-setting-header">
            <BaseSelect :options="requestSelect" placeholder="Все" />
            <BaseButton class="add-setting" @click="$router.push('/requests/settings/add')">
                Добавить настройки
            </BaseButton>
        </div>

        <div class="table-wrapper">
            <div class="table-component">
                <BaseTable :columns="requestSettingTable" :data="requestSettingData">
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

                    <template #actions="{ row }">
                        <BaseButton class="edit-btn" @click="$router.push(`/org/list/${row.id}`)">
                            <img src="@/assets/images/pencil.svg" alt="image" />
                        </BaseButton>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>

<style scoped></style>