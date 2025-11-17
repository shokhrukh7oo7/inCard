<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseTabs from '@/components/BaseTabs.vue';

const syncField = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fillName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'date', model: 'transactionDate', props: { placeholder: 'Дата транзакции' } },
]

// TABS SELECT START
// first tab select
const errorTabSelect = ref("")
const errorTabOptions = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

// second tab select
const errorTabSelectSecond = ref("")
const errorTabOptionsSecond = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// Third tab select
const errorTabSelectThird = ref("")
const errorTabOptionsThird = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// TABS SELECT END
// =============================================================================
// TABS START
const activeTab = ref('error');
// first tab 
const errorTab = [
    { key: 'id', label: '№' },
    { key: 'idPayment', label: 'ID Платежа' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'status', label: 'Статус ABC' },
    { key: 'extTransaction', label: 'Ext Транзакции' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'sinDate', label: 'Син дата' },
    { key: 'action', label: 'Перейти' },
]

const errorDataTab = ref([]);

// second tab
const errorTabSecond = [
    { key: 'id', label: '№' },
    { key: 'idPayment', label: 'ID Платежа' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'status', label: 'Статус ABC' },
    { key: 'extTransaction', label: 'Ext Транзакции' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'sinDate', label: 'Син дата' },
    { key: 'action', label: 'Перейти' },
]
const errorDataTabSecond = ref([]);

// third tab
const errorTabThird = [
    { key: 'id', label: '№' },
    { key: 'idPayment', label: 'ID Платежа' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'status', label: 'Статус ABC' },
    { key: 'extTransaction', label: 'Ext Транзакции' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'sinDate', label: 'Син дата' },
    { key: 'action', label: 'Перейти' },
]
const errorDataTabThird = ref([]);
// TABS END
// =============================================================================
const handleSearch = filters => {
    console.log('Фильтры', filters);
}
</script>

<template>
    <div class="sync-wrapper">
        <div class="sync-filter-wrapper">
            <BaseFilter :fields="syncField" title="Фильтр поиска" @search="handleSearch" />
        </div>

        <div class="sync-tabs-wrapper">
            <!-- ТАБ ХЕДЕР - СТОИТ СНАРУЖИ -->
            <div class="tab-header">
                <div class="tab-left-wrapper">
                    <p>Всего: 0</p>
                    <p>Общая сумма: 0</p>
                </div>

                <div class="tab-right-wrapper">
                    <BaseButton v-if="activeTab === 'error'" variant="orange">
                        Синхронизировать
                    </BaseButton>

                    <BaseSelect v-if="activeTab === 'error'" v-model="errorTabSelect" :options="errorTabOptions"
                        placeholder="Все" />

                    <BaseSelect v-if="activeTab === 'errorPayment'" v-model="errorTabSelectSecond"
                        :options="errorTabOptionsSecond" placeholder="Все" />

                    <BaseSelect v-if="activeTab === 'written'" v-model="errorTabSelectThird"
                        :options="errorTabOptionsThird" placeholder="Все" />
                </div>
            </div>

            <div class="tabs-wrapper">
                <div class="tabs-demo">
                    <BaseTabs v-model="activeTab" :tabs="[
                        { name: 'error', label: 'Ошибка' },
                        { name: 'errorPayment', label: 'Ошибка платежа' },
                        { name: 'written', label: 'Написано' },
                    ]">
                        <template #default="{ activeTab }">
                            <div v-if="activeTab === 'error'">
                                <div class="table-wrapper">
                                    <div class="table-component">
                                        <BaseTable :columns="errorTab" :data="errorDataTab">
                                            <template #actions="{ row }">
                                                <router-link :to="`/payers/${row.id}`" title="Перейти">
                                                    <img src="@/assets/images/table/arrow-circle.svg" alt="image" />
                                                </router-link>
                                            </template>
                                        </BaseTable>
                                    </div>
                                </div>
                            </div>

                            <div v-else-if="activeTab === 'errorPayment'">
                                <div class="table-wrapper">
                                    <div class="table-component">
                                        <BaseTable :columns="errorTabSecond" :data="errorDataTabSecond">
                                            <template #actions="{ row }">
                                                <router-link :to="`/payers/${row.id}`" title="Перейти">
                                                    <img src="@/assets/images/table/arrow-circle.svg" alt="image" />
                                                </router-link>
                                            </template>
                                        </BaseTable>
                                    </div>
                                </div>
                            </div>

                            <div v-else-if="activeTab === 'written'">
                                <div class="table-wrapper">
                                    <div class="table-component">
                                        <BaseTable :columns="errorTabThird" :data="errorDataTabThird">
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
                    </BaseTabs>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>