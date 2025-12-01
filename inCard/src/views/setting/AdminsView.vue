<script setup>
import { ref } from 'vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue';

const integrationSystemTable = [
    { key: 'id', label: '№' },
    { key: 'user', label: 'Пользователь' },
    { key: 'phoneNumber', label: 'Номер телефона' },
    { key: 'status', label: 'Статус' },
    { key: 'block', label: 'Заблокировано' },
    { key: 'date', label: 'Дата добавления' },
    { key: 'actions', label: 'Редактировать' },
]

const integrationSystemTableData = ref([
    {
        id: 1,
        user: 'Иван Иванов',
        phoneNumber: '+998 (12) 345-67-89',
        status: 'Активный',
        block: 'Не заблокирован',
        date: '2025-10-02 02:50:46',
        extra: 'Admin',
    },
    {
        id: 2,
        user: 'Begzod Mamatov',
        phoneNumber: '+998 (99) 006-68-33',
        status: 'Неактивный',
        block: 'Заблокирован',
        date: '2025-10-02 02:50:46',
        extra: 'Super Admin',
    },
]);

</script>

<template>
    <div class="integration-system-wrapper">
        <div class="integration-system-header admins-header">
            <h5>Системные администраторы</h5>

            <BaseButton class="add-integration-btn" @click="$router.push('/settings/system/add')">
                Добавить администратора
            </BaseButton>
        </div>

        <div class="table-wrapper">
            <div class="table-component">
                <BaseTable :columns="integrationSystemTable" :data="integrationSystemTableData">
                    <!-- users slot (photo) -->
                    <template #user="{ value, row }">
                        <div class="user-cell">
                            <div class="user-info">
                                <h6 class="user-name">{{ value }}</h6>
                                <p class="user-subtext">{{ row.extra }}</p>
                            </div>
                        </div>
                    </template>

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

                    <!-- status slot -->
                    <template #block="{ value }">
                        <span :class="[
                            'status-badge',
                            value === 'Заблокирован' ? 'status-active' :
                                value === 'Не заблокирован' ? 'status-blocked' : ''
                        ]">
                            {{ value }}
                        </span>
                    </template>

                    <template #actions="{ }">
                        <BaseButton class="edit-btn" @click="$router.push('/requests/settings/add')">
                            <img src="@/assets/images/pencil.svg" alt="image" />
                        </BaseButton>
                        <BaseButton class="edit-btn" @click="openEditPassword(row)">
                            <img src="@/assets/images/bell.svg" alt="image" />
                        </BaseButton>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>

<style scoped></style>