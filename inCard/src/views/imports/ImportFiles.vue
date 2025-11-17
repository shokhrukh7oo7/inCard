<script setup>
import { ref } from 'vue';
import BaseTabs from '@/components/BaseTabs.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseDatePicker from '@/components/BaseDatePicker.vue';

const activeTab = ref('files');
const selectedCompany = ref("");
const companies = [
    { value: 'Все', label: "Все" },
    { value: 'ACCENT LINE OOO (BOSCH)', label: "ACCENT LINE OOO (BOSCH)" },
    { value: 'ADILAB OOO', label: "ADILAB OOO" },
]

const date = ref("2024-11-14");
</script>

<template>
    <div class="import-files-wrapper">
        <div class="tabs-demo">
            <BaseTabs v-model="activeTab" :tabs="[
                { name: 'files', label: 'Сегодняшние файлы' },
                { name: 'archiveFiles', label: 'Архив' },
            ]">
                <template #default="{ activeTab }">
                    <div class="files-wrapper">
                        <div class="tabs-wrapper">
                            <div v-if="activeTab === 'files'">
                                <div class="uploaded-files">
                                    <h5>Загруженные файлы</h5>
                                    <p>Нет данных</p>
                                </div>
                            </div>

                            <div v-else-if="activeTab === 'archiveFiles'">
                                <div class="upload-files-archive">
                                    <div class="calendar-wrapper">
                                        <BaseDatePicker v-model="date" />
                                        <BaseButton>Поиск</BaseButton>
                                    </div>

                                    <div class="uploaded-files">
                                        <h5>Загруженные файлы</h5>
                                        <p>Нет данных</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </BaseTabs>
        </div>
        <div class="select-wrapper">
            <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
        </div>
    </div>
</template>

<style scoped></style>