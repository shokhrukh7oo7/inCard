<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';

const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

// filter
const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

// table
const usersTable = [
    { key: 'user', label: 'Пользователь' },
    { key: 'phoneNumber', label: 'Номер телефона' },
    { key: 'role', label: 'Роль' },
    { key: 'organization', label: 'Организация' },
    { key: 'filial', label: 'Филиал' },
    { key: 'status', label: 'Статус' },
    { key: 'actions', label: 'Действие' },
]

const usersTableData = ref([
    {
        user: 'Begzod Khudoyarov',
        phoneNumber: '+998 (33) 278-82-87',
        role: 'Admin',
        organization: 'POSITIVE SOLUTIONS',
        filial: 'Головной офис',
        status: 'Активный',
    }
])

// const usersTableData = ref([]);

// onMounted(async () => {
//     const res = await fetch("/api/users");
//     usersTableData.value = await res.json();
// });
</script>

<template>
    <div class="users-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="users-table-wrapper">
            <div class="users-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton class="add-users" id="add-users">Добавить организацию</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="usersTable" :data="usersTableData">
                        <!-- users slot (photo) -->
                        <template #user="{ value }">
                            <div class="user-cell">
                                <img class="user-icon" src="@/assets/images/person.svg" alt="user">

                                <div class="user-info">
                                    <h6 class="user-name">{{ value }}</h6>
                                    <p class="user-subtext">Дополнительный текст</p>
                                </div>
                            </div>
                        </template>

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
                            <BaseButton class="edit-btn" @click="$router.push(`/org/list/${row.id}`)">
                                <img src="@/assets/images/pencil.svg" alt="image" />
                            </BaseButton>
                            <BaseButton class="edit-btn" @click="$router.push(`/org/list/${row.id}`)">
                                <img src="@/assets/images/bell.svg" alt="image" />
                            </BaseButton>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>