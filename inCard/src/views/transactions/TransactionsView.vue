<script setup>
// import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';

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

const handleSearch = filters => {
    console.log('Фильтры:', filters)
    // тут можно вызывать API или фильтровать локальные данные
}
</script>

<template>
    <div class="transactions-wrapper">
        <BaseFilter :fields="transactionFields" title="Фильтры поиска" @search="handleSearch" />

    </div>
</template>

<style scoped></style>