<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import BaseFilter from '@/components/BaseFilter.vue'

// имитация данных (в реальности может быть запрос к API)
// Table
const users = [
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
]

const route = useRoute()
const userId = Number(route.params.id)

const user = computed(() => users.find(u => u.id === userId))

// Tabs
const activeTab = ref('general');
const idContract = ref([
    { value: '1', label: 'Компания 1' },
    { value: '2', label: 'Компания 2' },
]);

const filterFields = [
    // { type: 'input', model: 'contract', props: { id: 'contract', placeholder: 'Контракт' } },
    { type: 'select', model: 'company', props: { options: idContract.value, placeholder: 'Выберите компанию' } }
]
</script>

<template>
    <div class="payer-details-wrapper">
        <div class="row">
            <div class="col-12 col-lg-4 col-md-4">
                <div class="user-detail-wrapper">
                    <div class="user-detail-content">
                        <div class="payer-detail-header-wrapper">
                            <h1>Данные плательщика</h1>
                        </div>

                        <div class="payer-detail-content-wrapper">
                            <div v-if="user" class="detail-items">
                                <p><strong>ID:</strong> {{ user.id }}</p>
                                <p><strong>ФИО:</strong> {{ user.fullName }}</p>
                                <p><strong>ПИНФЛ:</strong> {{ user.pinfl }}</p>
                                <p><strong>Контракт:</strong> {{ user.contract }}</p>
                                <p><strong>Серия и Номер паспорта:</strong> {{ user.passport }}</p>
                                <p><strong>Филиал:</strong> {{ user.branch }}</p>
                            </div>
                            <div v-else>
                                <p>Пользователь не найден.</p>
                            </div>
                        </div>
                    </div>

                    <BaseButton>Запросить платный запрос по ПИНФЛ через HUMO</BaseButton>
                </div>
            </div>

            <div class="col-12 col-lg-8 col-md-8">
                <div class="payer-tabs-wrapper">
                    <BaseTabs v-model="activeTab" :tabs="[
                        { name: 'general', label: 'Обшие данные' },
                        { name: 'cards', label: 'Карты' },
                    ]">
                        <template #default="{ activeTab }">
                            <div v-if="activeTab === 'general'">
                                <BaseFilter :fields="filterFields" title="Фильтры поиска">Фильты поиска</BaseFilter>
                            </div>
                        </template>
                    </BaseTabs>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped></style>
