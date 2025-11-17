<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import BaseTabs from '@/components/BaseTabs.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const activeTab = ref('files');
const selectedCompany = ref("");
const companies = [
    { value: 'Все', label: "Все" },
    { value: 'ACCENT LINE OOO (BOSCH)', label: "ACCENT LINE OOO (BOSCH)" },
    { value: 'ADILAB OOO', label: "ADILAB OOO" },
]

const date = ref("2024-11-14");
const showPopup = ref(false);
const popupRef = ref(null);

// Открытие календаря
const togglePopup = () => {
    showPopup.value = !showPopup.value;
};

// Закрытие при клике вне
const onClickOutside = (e) => {
    if (!popupRef.value) return;
    if (!popupRef.value.contains(e.target)) {
        showPopup.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", onClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener("click", onClickOutside);
});

// --------- ЛОГИКА КАЛЕНДАРЯ ---------
const current = new Date();
const year = ref(current.getFullYear());
const month = ref(current.getMonth());

// Список дней
const daysInMonth = computed(() => {
    const firstDay = new Date(year.value, month.value, 1).getDay();
    const totalDays = new Date(year.value, month.value + 1, 0).getDate();

    const days = [];

    // пустые ячейки в начале недели
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        days.push(null);
    }

    // реальные дни
    for (let d = 1; d <= totalDays; d++) {
        days.push(d);
    }

    return days;
});

// Выбор дня
const selectDay = (day) => {
    if (!day) return;
    const m = String(month.value + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    date.value = `${year.value}-${m}-${d}`;
    showPopup.value = false;
};

// Следующий / предыдущий месяц
const prevMonth = () => {
    if (month.value === 0) {
        month.value = 12;
        year.value--;
    }
    month.value--;
};
const nextMonth = () => {
    if (month.value === 11) {
        month.value = -1;
        year.value++;
    }
    month.value++;
};
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
                                        <div class="date-picker" @click.stop>
                                            <div class="input-wrapper">
                                                <input v-model="date" class="date-input" readonly />

                                                <button class="icon-btn" @click.stop="togglePopup">📅</button>
                                            </div>

                                            <!-- POPUP -->
                                            <div v-if="showPopup" class="calendar-popup" ref="popupRef">

                                                <!-- HEADER -->
                                                <div class="calendar-header">
                                                    <button @click="prevMonth">‹</button>
                                                    <span>{{ year }} - {{ (month + 1).toString().padStart(2, '0')
                                                        }}</span>
                                                    <button @click="nextMonth">›</button>
                                                </div>

                                                <!-- DAYS -->
                                                <div class="calendar-grid">
                                                    <span v-for="(day, index) in daysInMonth" :key="index" class="day"
                                                        :class="{ empty: !day }" @click="selectDay(day)">
                                                        {{ day || '' }}
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
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