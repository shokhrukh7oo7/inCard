<script setup>
import { ref } from 'vue';
// import BaseInput from '@/components/BaseInput.vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseTable from '@/components/BaseTable.vue';

const selectedCompany = ref("")
const companies = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ADILAB OOO", label: "ADILAB OOO" },
]

const filterFields = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'input', model: 'passport', props: { id: 'passport', placeholder: 'Серия/Номер паспорта' } },
    { type: 'input', model: 'phone', props: { id: 'phone', placeholder: 'Номер телефона' } },
    { type: 'input', model: 'contract', props: { id: 'contract', placeholder: 'Контракт' } },
]

const columns = [
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'contract', label: 'Контракт' },
    { key: 'passport', label: 'Паспорт' },
    { key: 'branch', label: 'Филиал' },
    { key: 'actions', label: 'Перейти' },
]

const data = ref([
    {
        id: 1,
        pinfl: '30907861220093',
        fullName: 'Elmurod Mominov',
        contract: '153134',
        passport: 'AA 4369116',
        branch: 'Головной офис',
    },
    {
        id: 2,
        pinfl: '12345678901234',
        fullName: 'Dilshod Karimov',
        contract: '981234',
        passport: 'AB 1234567',
        branch: 'Филиал №2',
    },
])

const handleSearch = filters => {
    console.log('Фильтры:', filters)
    // тут можно вызывать API или фильтровать локальные данные
}
</script>

<template>
    <div class="payers-contact-wrappper">

        <BaseFilter :fields="filterFields" title="Фильтры поиска" @search="handleSearch" />

        <div class="table-wrapper">
            <div class="table-component" id="payer-contact">
                <div class="export-wrapper">
                    <BaseButton>
                        <img src="../../assets/images/table/arrow-export.svg" alt="image">
                        Export
                    </BaseButton>

                    <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                </div>

                <BaseTable :columns="columns" :data="data" showExport showSelect :selectOptions="companies">
                    <template #actions="{ row }">
                        <router-link :to="`/payers/${row.id}`" title="Перейти">
                            <img src="@/assets/images/table/arrow-circle.svg" alt="image" />
                        </router-link>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>

<style scoped></style>