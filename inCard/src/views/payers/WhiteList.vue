<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const selectedCompany = ref("")
const all = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

const filterFields = [
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'input', model: 'passport', props: { id: 'passport', placeholder: 'Серия/Номер паспорта' } },
    { type: 'input', model: 'phone', props: { id: 'phone', placeholder: 'Номер телефона' } },
]

const columns = [
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'payer', label: 'Плательщик' },
    { key: 'passportNumber', label: 'Серия и номер паспорта' },
    { key: 'added', label: 'Добавлено' },
    { key: 'available', label: 'Доступен' },
]

const data = ref([
    {
        id: '',
        pinfl: '',
        payer: '',
        passportNumber: '',
        added: '',
        available: '',
    }
])
</script>

<template>
    <div class="white-list-wrapper">
        <div class="white-list-info-wrapper">
            <div class="white-list-info">
                <span>Инфо</span>
                <p>Белый лист это список плательщиков у которых нельзя списывать средств, у добавленного в белый список
                    плательщика не будут списываться средства даже с активным автоплатежом.</p>
            </div>
        </div>

        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска" />
        </div>

        <div class="white-list-table-wrapper">
            <div class="table-select-wrapper">
                <BaseSelect v-model="selectedCompany" :options="all" placeholder="ACCENT LINE OOO (BOSCH)" />
                <BaseButton class="btn add-btn">Добавить</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="columns" :data="data"></BaseTable>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.white-list-wrapper .white-list-info-wrapper {
    background-color: var(--white);
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
}

.white-list-wrapper .white-list-info-wrapper .white-list-info {
    position: relative;
    border: 1px solid var(--hr-color);
    border-radius: 6px;
    padding: 15px;
}

.white-list-wrapper .white-list-info-wrapper .white-list-info span {
    position: absolute;
    top: -10px;
    background-color: var(--white);
    padding: 0 10px;
    left: 10px;
    color: var(--grey);
    font-size: 14px;
}

.white-list-wrapper .white-list-info-wrapper .white-list-info p {
    font-size: 15px;
    color: var(--black);
    line-height: 24px;
    letter-spacing: .5px;
}

.dark .white-list-wrapper .white-list-info-wrapper {
    background: var(--header-bg);
}

.dark .white-list-wrapper .white-list-info-wrapper .white-list-info {
    border-color: var(--white);
}

.dark .white-list-wrapper .white-list-info-wrapper .white-list-info span {
    color: var(--white);
    background-color: var(--header-bg);
}

.dark .white-list-wrapper .white-list-info-wrapper .white-list-info p {
    color: var(--white);
}
</style>