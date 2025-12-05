<script setup>
import { ref } from 'vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue';

const historyTable = [
    { key: 'organization', label: 'Организации' },
    { key: 'created', label: 'Создан' },
    { key: 'changed', label: 'Изменен' },
    { key: 'incardUzcard', label: 'Incard Uzcard' },
    { key: 'incardHumo', label: 'Incard Humo' },
    { key: 'uzcard', label: 'Uzcard' },
    { key: 'humo', label: 'Humo' },
    { key: 'status', label: 'С плательщика' },
    { key: 'createData', label: 'Дата создание' },
    { key: 'startData', label: 'Дата начала' },
    { key: 'endData', label: 'Дата конца' },
]

const historyDataTable = ref([
    {
        organization: 'AGAT KREDIT MIKROMOLIYA TASHKILOTI OOO',
        created: 'system-admin',
        changed: 'system-admin',
        incardUzcard: '1%',
        incardHumo: '1%',
        uzcard: '1.7%',
        humo: '1.5%',
        status: 'Активный',
        createData: '20.06.2025 17:35:11',
        startData: '21.06.2025 00:00:00',
        endData: '21.06.2025 00:00:00',
    }
])
</script>

<template>
    <div class="tariffs-history-container">
        <div class="tariffs-history-wrapper">
            <div class="tariffs-header-wrapper">
                <h5>История изменения тарифа</h5>
            </div>

            <div class="tariffs-table-wrapper">
                <div class="table-wrapper">
                    <div class="table-component">
                        <BaseTable :columns="historyTable" :data="historyDataTable">
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
                        </BaseTable>
                    </div>
                </div>
            </div>
        </div>
        <BaseButton class="back-btn" @click="$router.push('/balance/debts')">Назад</BaseButton>
    </div>
</template>

<style scoped></style>