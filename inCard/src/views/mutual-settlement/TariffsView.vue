<script setup>
import { ref } from 'vue';
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
const tariffsTable = [
    { key: 'id', label: '№' },
    { key: 'organization', label: 'Организация' },
    { key: 'incardUzcard', label: 'Incard Uzcard' },
    { key: 'incardHumo', label: 'Incard Humo' },
    { key: 'uzcard', label: 'Uzcard' },
    { key: 'humo', label: 'Humo' },
    { key: 'forThePayer', label: 'С плательщика' },
    { key: 'date', label: 'Дата регистрации' },
    { key: 'action', label: 'Отчет' },
    { key: 'actions', label: 'Дейсвие' },
]

const tariffsTableData = ref([
    {
        id: '1',
        organization: 'AGAT KREDIT MIKROMOLIYA TASHKILOTI OOO',
        incardUzcard: '1%',
        incardHumo: '1%',
        uzcard: '17%',
        humo: '155%',
        forThePayer: 'Активный',
        date: '30.08.2025 17:05:11',
    }
])
</script>

<template>
    <div class="tariffs-wrapper">
        <div class="tariffs-table-header">
            <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
            <BaseButton class="add-users" id="add-users" @click="$router.push('/balance/tariffs-add')">Добавить
                пользователя
            </BaseButton>
        </div>

        <div class="table-wrapper">
            <div class="table-component">
                <BaseTable :columns="tariffsTable" :data="tariffsTableData">
                    <!-- status slot -->
                    <template #forThePayer="{ value }">
                        <span :class="[
                            'status-badge',
                            value === 'Активный' ? 'status-active' :
                                value === 'Заблокировано' ? 'status-blocked' : ''
                        ]">
                            {{ value }}
                        </span>
                    </template>

                    <!-- action slot -->
                    <template #action="{ row }">
                        <BaseButton class="report-btn" @click="openEditUser(row)">
                            <img src="@/assets/images/eye.svg" alt="image" />
                        </BaseButton>
                    </template>

                    <!-- actions slot -->
                    <template #actions="{ }">
                        <BaseButton class="edit-btn"
                            @click="$router.push('/balance/tariffs-edit')">
                            <img src="@/assets/images/pencil.svg" alt="image" />
                        </BaseButton>
                        <BaseButton class="history-btn"
                            @click="$router.push('/balance/tariffs-history')">
                            <img src="@/assets/images/clipboard.svg" alt="image" />
                        </BaseButton>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>

<style scoped></style>