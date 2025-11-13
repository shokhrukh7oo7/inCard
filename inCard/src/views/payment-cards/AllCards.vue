<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseSelect from '@/components/BaseSelect.vue';

// SELECT
const selectedCompany = ref("")
const all = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

const allCompanies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

const allStatuses = [
    { value: 'all', label: 'Все' },
    { value: 'default', label: 'По умолчанию' },
    { value: 'addedManually', label: 'Добавлена в ручную' },
];

const filterFields = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Выберите компанию' } },
    { type: 'select', model: 'status', props: { options: allStatuses, placeholder: 'Статус действии карты' } },
]

// TABLE
const columns = [
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'cardOwner', label: 'Владелец карты' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'phoneNumber', label: 'Номер телефона' },
    { key: 'status', label: 'Статус' },
    { key: 'type', label: 'Тип' },
    { key: 'sms', label: 'СМС' },
    { key: 'organization', label: 'Организация' },
    { key: 'added', label: 'Добавлено' },
]

const data = ref([
    {
        id: '1',
        pinfl: 30404845790012,
        cardOwner: 'GAYRATJON ERGASHEV	',
        cardNumber: '5614 68** **** 0632',
        phoneNumber: '+998 (90) 2**-**-03',
        status: 'Активный',
        type: 'UZCARD',
        sms: 'Включен',
        organization: 'ACCENT LINE OOO (BOSCH)',
        added: '',
    },
    {
        id: '2',
        pinfl: 20404845790014,
        cardOwner: 'John Doe	',
        cardNumber: '9600 68** **** 0632',
        phoneNumber: '+998 (91) 5**-**-03',
        status: 'Заблокировано',
        type: 'Humo',
        sms: 'Отключен',
        organization: 'ACCENT LINE OOO (BOSCH)',
        added: '',
    }
])
</script>

<template>
    <div class="all-cards-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="all-cards-table-wrapper">
            <div class="all-cards-select-wrapper">
                <BaseSelect v-model="selectedCompany" :options="all" placeholder="ACCENT LINE OOO (BOSCH)" />
            </div>


            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="columns" :data="data">
                        <!-- Слот для статуса -->
                        <template #status="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Активный' ? 'status-active' :
                                    value === 'Заблокировано' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>

                        <!-- Слот для СМС -->
                        <template #sms="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Включен' ? 'status-active' :
                                    value === 'Отключен' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.status-badge {
    font-weight: 600;
}

.status-active {
    color: var(--green);
}

.status-blocked {
    color: var(--red);
}
</style>