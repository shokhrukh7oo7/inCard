<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const transactionCompanies = [
    { value: 'filial', label: "Головной офис" },
]

const AllTransactions = [
    { value: 'allTransactions', label: 'Все транзакции' },
    { value: 'writtenOffTransactions', label: 'Списанные танзакции' },
    { value: 'canceledTransactions', label: 'Отменные транзакции' },
]

const AllGateway = [
    { value: 'all', label: 'Все' },
    { value: 'p2p', label: 'P2P' },
    { value: 'genesys', label: 'Genesys' },
    { value: 'svgate', label: 'SvGate' },
    { value: 'humogate', label: 'HumoGate' },
]

const transactionFields = [
    { type: 'input', model: 'id', props: { id: 'id', placeholder: 'ID Платежа' } },
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'input', model: 'contract', props: { id: 'contract', placeholder: 'Контракт' } },
    { type: 'select', model: 'company', props: { options: transactionCompanies, placeholder: 'Головной офис' } },
    { type: 'date', model: 'transactionDate', props: { placeholder: 'Дата транзакции' } },
    { type: 'select', model: 'company', props: { options: AllTransactions, placeholder: 'Все транзакции' } },
    { type: 'select', model: 'company', props: { options: AllGateway, placeholder: 'Все' } },
]

// EXPORT SELECT
const selectedCompany = ref("")
const companies = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ADILAB OOO", label: "ADILAB OOO" },
]

// TABLE
const transactionsColumns = [
    { key: 'id', label: '№' },
    { key: 'idPayment', label: 'ID Платежа' },
    { key: 'fullName', label: 'ФИО' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'comission', label: 'Комиссия' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'extTransactions', label: 'Ext Транзакции' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'actions', label: 'Перейти' },
]

const transactionsData = ref([])

const handleSearch = filters => {
    console.log('Фильтры:', filters)
    // тут можно вызывать API или фильтровать локальные данные
}

</script>

<template>
    <div class="transactions-wrapper">
        <div class="transactions-filter-wrapper">
            <BaseFilter :fields="transactionFields" title="Фильтры поиска" @search="handleSearch" />
        </div>

        <div class="transactions-table-wrapper">
            <div class="transactions-filter-wrapper">
                <div class="transaction-left-wrapper">
                    <p>Всего: 0</p>
                    <p>Общая сумма разностей: 0</p>
                    <p>Общая сумма: 0</p>
                    <p>Общая сумма возврата: 0</p>
                </div>

                <div class="transaction-right-wrapper">
                    <BaseButton>
                        <img src="../../assets/images/table/arrow-export.svg" alt="image">
                        Export
                    </BaseButton>

                    <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                </div>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="transactionsColumns" :data="transactionsData">
                        <template #actions="{ row }">
                            <router-link :to="`/payers/${row.id}`" title="Перейти">
                                <img src="@/assets/images/table/arrow-circle.svg" alt="image" />
                            </router-link>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>