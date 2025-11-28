<script setup>
import { ref } from 'vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue';

const integrationSystemTable = [
    { key: 'id', label: '№' },
    { key: 'systemName', label: 'Название системы' },
    { key: 'vendorId', label: 'Vendor ID' },
    { key: 'login', label: 'Логин' },
    { key: 'password', label: 'Пароль' },
    { key: 'status', label: 'Статус' },
    { key: 'actions', label: 'Редактировать' },
]

const integrationSystemTableData = ref([
    {
        id: 1,
        systemName: 'PSP',
        vendorId: '',
        login: '',
        password: '',
        status: 'Активный',
    },
    {
        id: 2,
        systemName: 'Genesis',
        vendorId: '',
        login: '',
        password: '',
        status: 'Неактивный',
    },
]);

</script>

<template>
    <div class="integration-system-wrapper">
        <div class="integration-system-header">
            <h5>Интеграции Систем</h5>
        </div>

        <div class="table-wrapper">
            <div class="table-component">
                <BaseTable :columns="integrationSystemTable" :data="integrationSystemTableData">
                    <!-- status slot -->
                    <template #status="{ value }">
                        <span :class="[
                            'status-badge',
                            value === 'Активный' ? 'status-active' :
                                value === 'Неактивный' ? 'status-blocked' : ''
                        ]">
                            {{ value }}
                        </span>
                    </template>

                    <template #actions="{ }">
                        <BaseButton class="edit-btn" @click="$router.push('/requests/settings/add')">
                            <img src="@/assets/images/pencil.svg" alt="image" />
                        </BaseButton>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>

<style scoped></style>