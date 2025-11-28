<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const disabled = ref(true);

const allCompanies = [
    { value: "Все", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

const syncField = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'date', model: 'transactionDate', props: { placeholder: 'Дата транзакции' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Все' } },
]

const errorTabOptionsThird = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// =============================================================================
const requestTable = [
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'organization', label: 'Организация' },
    { key: 'request', label: 'Запрос' },
    { key: 'dateRequest', label: 'Дата запроса' },
]

const requestData = ref([]);
// =============================================================================
const handleSearch = filters => {
    console.log('Фильтры', filters);
}
</script>

<template>
    <div class="request-wrapper">
        <div class="sync-wrapper">
            <div class="sync-filter-wrapper">
                <BaseFilter :fields="syncField" title="Фильтр поиска" @search="handleSearch" />
            </div>

            <div class="sync-tabs-wrapper">
                <!-- ТАБ ХЕДЕР - СТОИТ СНАРУЖИ -->
                <div class="tab-header">
                    <div class="tab-left-wrapper">
                        <p>Всего: 0</p>
                    </div>

                    <div class="tab-right-wrapper">
                        <BaseButton :disabled="disabled" class="export-btn">
                            <img src="../../assets/images/table/arrow-export.svg" alt="image">
                            Export
                        </BaseButton>

                        <BaseSelect :options="errorTabOptionsThird" placeholder="Все" />
                    </div>
                </div>

                <div class="table-wrapper">
                    <div class="table-component">
                        <BaseTable :columns="requestTable" :data="requestData">

                        </BaseTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>