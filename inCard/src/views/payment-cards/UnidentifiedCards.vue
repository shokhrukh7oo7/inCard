<script setup>
import { ref, computed } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseTabs from '@/components/BaseTabs.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const disabled = ref(true)

// FIRST TAB SELECT START
const selectedCompany = ref("");
const companies = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// FIRST TAB SELECT END

// SECOND TAB SELECT START
const secondSelect = ref("");
const secondTab = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// SECOND TAB SELECT END

const allCompanies = [
    { value: "All", label: "Все" },
    { value: "Uzcard", label: "Uzcard" },
    { value: "Humo", label: "Humo" },
]

// FILTER WRAPPER (FORM) FOR TABS START
const unidentifiedCards = [ // First tab filter wrapper
    { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
    { type: 'input', model: 'fullName', props: { id: 'fullName', placeholder: 'ФИО' } },
    { type: 'input', model: 'cardNumber', props: { id: 'cardNumber', placeholder: 'Номер карты' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'Тип карты' } },
];
const backgroundCards = [ // Second tab filter wrapper
    { value: "all", label: "Все" },
    { value: "search", label: "Поиск" },
    { value: "searchByNumber", label: "Поиск по тел" },
]
const removedCards = [ // Third tab filter wrapper
    { value: "unidentifiedCards", label: "Неопознанные карты" },
    { value: "backgroundCards", label: "Фоновые карты" },
]
// FILTER WRAPPER (FORM) FOR TABS END

// SWITCH FILTER WRAPPER FOR TABE START
const activeTab = ref('unidentifiedCards');

const filterFields = computed(() => {
    if (activeTab.value === 'unidentifiedCards') {
        return unidentifiedCards;
    }
    if (activeTab.value === 'backgroundCards') {
        return [
            ...unidentifiedCards,
            {
                type: 'select',
                model: 'telNumber',
                props: { options: backgroundCards, placeholder: 'Источник карты' }
            }
        ];
    }
    if (activeTab.value === 'removedCards') {
        return [
            ...unidentifiedCards,
            {
                type: 'select',
                model: 'reason',
                props: { options: removedCards, placeholder: 'Статус карты' }
            }
        ];
    }
    return unidentifiedCards;
});
// SWITCH FILTER WRAPPER FOR TABE END

// TABLE START
const unidentifiedTable = [ // First table
    { key: 'id', label: '№' },
    { key: 'clientName', label: 'Имя клиента' },
    { key: 'ownerCard', label: 'Владелец карты' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'expirationDate', label: 'Срок карты' },
    { key: 'status', label: 'Статус' },
    { key: 'nameCoincidence', label: 'Совпадение имени' },
    { key: 'action', label: 'Действие' },
]

const unidentifiedData = ref([]);

// ----------------------------------------------------------

const backgroundTable = [ // Second table
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'clientName', label: 'Имя клиента' },
    { key: 'ownerCard', label: 'Владелец карты' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'expirationDate', label: 'Срок карты' },
    { key: 'sourceCard', label: 'Источник карты' },
    { key: 'nameCoincidence', label: 'Совпадение имени' },
    { key: 'action', label: 'Действие' },
]

const backgroundData = ref([]);

// ----------------------------------------------------------

const removedTable = [ // Third table
    { key: 'id', label: '№' },
    { key: 'pinfl', label: 'ПИНФЛ' },
    { key: 'clientName', label: 'Имя клиента' },
    { key: 'ownerCard', label: 'Владелец карты' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'expirationDate', label: 'Срок карты' },
    { key: 'status', label: 'Статус' },
    { key: 'action', label: 'Действие' },
]

const removedData = ref([]);
// TABLE END
</script>

<template>
    <div class="all-cards-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска" :defaultOpen="true"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="tabs-wrapper">
            <div class="tabs-demo">
                <BaseTabs v-model="activeTab" :tabs="[
                    { name: 'unidentifiedCards', label: 'Неопознанные карты' },
                    { name: 'backgroundCards', label: 'фоновые карты' },
                    { name: 'removedCards', label: 'Удаленные карты' },
                ]">
                    <template #default="{ activeTab }">
                        <div v-if="activeTab === 'unidentifiedCards'">
                            <div class="table-wrapper">
                                <div class="table-component">
                                    <div class="tab-header">
                                        <div class="import-export-wrapper">
                                            <BaseButton :disabled="disabled">
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Экспорт
                                            </BaseButton>
                                            <BaseButton>
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Импорт
                                            </BaseButton>
                                        </div>

                                        <div class="tab-select-wrapper">
                                            <BaseSelect v-model="selectedCompany" :options="companies"
                                                placeholder="Все" />

                                            <BaseButton class="done-btn" variant="green" :disabled="disabled">Одобрить
                                                выбранные
                                            </BaseButton>
                                            <BaseButton class="remove-btn" variant="red" :disabled="disabled">Удалить
                                                выбранные
                                            </BaseButton>
                                        </div>
                                    </div>

                                    <BaseTable :columns="unidentifiedTable" :data="unidentifiedData"></BaseTable>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="activeTab === 'backgroundCards'">
                            <div class="table-wrapper">
                                <div class="table-component">
                                    <div class="tab-header">
                                        <div class="import-export-wrapper">
                                            <BaseButton :disabled="disabled">
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Экспорт
                                            </BaseButton>
                                            <BaseButton>
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Импорт
                                            </BaseButton>
                                        </div>

                                        <div class="tab-select-wrapper">
                                            <BaseSelect v-model="secondSelect" :options="secondTab" placeholder="Все" />

                                            <BaseButton class="done-btn" variant="green" :disabled="disabled">Одобрить
                                                выбранные
                                            </BaseButton>
                                            <BaseButton class="remove-btn" variant="red" :disabled="disabled">Удалить
                                                выбранные
                                            </BaseButton>
                                        </div>
                                    </div>

                                    <BaseTable :columns="backgroundTable" :data="backgroundData"></BaseTable>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="activeTab === 'removedCards'">
                            <div class="table-wrapper">
                                <div class="table-component">
                                    <div class="tab-header">
                                        <div class="import-export-wrapper">
                                            <BaseButton :disabled="disabled">
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Экспорт
                                            </BaseButton>
                                            <BaseButton>
                                                <img src="../../assets/images/table/arrow-export.svg" alt="image">
                                                Импорт
                                            </BaseButton>
                                        </div>

                                        <div class="tab-select-wrapper">
                                            <BaseSelect v-model="secondSelect" :options="secondTab" placeholder="Все" />
                                        </div>
                                    </div>

                                    <BaseTable :columns="removedTable" :data="removedData"></BaseTable>
                                </div>
                            </div>
                        </div>
                    </template>
                </BaseTabs>
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