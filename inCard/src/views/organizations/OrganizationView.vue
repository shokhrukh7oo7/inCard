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

const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

// TABLE
const organizationTable = [
    { key: 'id', label: '№' },
    { key: 'companyName', label: 'Названия' },
    { key: 'director', label: 'Директор' },
    { key: 'organizationType', label: 'Тип Организации' },
    { key: 'inn', label: 'ИНН' },
    { key: 'address', label: 'Адрес' },
    { key: 'addData', label: 'Дата добавление' },
    { key: 'actions', label: 'Действие' },
]

const organizationData = ref([
    {
        id: 1,
        companyName: 'ACCENT LINE OOO (BOSCH)',
        director: 'Дилкаш',
        organizationType: 'Организация',
        inn: 310584273,
        address: 'г. Ташкент, Мирабадский р-он, ул. А. Темура',
        addData: '05.07.2024 14:57:21',
    },
]);


// const selectedOrganization = ref(null);

// function openEditModal(row) {
//     selectedOrganization.value = row;
//     showEditModal.value = true;
// }
</script>

<template>
    <div class="organizations-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="organization-table-wrapper">
            <div class="organization-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton>Добавить организацию</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="organizationTable" :data="organizationData">
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