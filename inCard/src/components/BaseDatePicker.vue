<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const model = defineModel();

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

onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));


// --------- ЛОГИКА КАЛЕНДАРЯ ---------
const current = new Date();
const year = ref(current.getFullYear());
const month = ref(current.getMonth());

if (!model.value) {
    model.value = `${year.value}-${String(month.value + 1).padStart(2, "0")}-01`;
}

const daysInMonth = computed(() => {
    const first = new Date(year.value, month.value, 1).getDay();
    const total = new Date(year.value, month.value + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < (first === 0 ? 6 : first - 1); i++) days.push(null);
    for (let d = 1; d <= total; d++) days.push(d);

    return days;
});

// Выбор дня
const selectDay = (day) => {
    if (!day) return;
    const m = String(month.value + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    model.value = `${year.value}-${m}-${d}`;
    showPopup.value = false;
};

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
    <div class="date-picker" @click.stop>
        <div class="input-wrapper">
            <input v-model="model" class="date-input" readonly />
            <button class="icon-btn" @click.stop="togglePopup">📅</button>
        </div>

        <div v-if="showPopup" class="calendar-popup" ref="popupRef">
            <div class="calendar-header">
                <button @click.stop="prevMonth">‹</button>
                <span>{{ year }} - {{ (month + 1).toString().padStart(2, '0') }}</span>
                <button @click.stop="nextMonth">›</button>
            </div>

            <div class="calendar-grid">
                <span v-for="(day, index) in daysInMonth" :key="index" class="day" :class="{ empty: !day }"
                    @click.stop="selectDay(day)">
                    {{ day || '' }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.date-picker {
    position: relative;
    /* width: 100%; */
}

.input-wrapper {
    position: relative;
}

.date-input {
    width: 100%;
    padding: 0.3rem 36px 0.3rem 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.icon-btn {
    position: absolute;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

.calendar-popup {
    position: absolute;
    top: 48px;
    width: 100%;
    padding: 10px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
    border: 1px solid #ddd;
    z-index: 50;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.calendar-header button {
    background: none;
    border: none;
    cursor: pointer;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
}

.day {
    padding: 6px;
    border-radius: 6px;
    background: #f3f3f3;
    text-align: center;
    cursor: pointer;
}

.day:hover {
    background: #1976d2;
    color: white;
}

.day.empty {
    background: transparent;
    pointer-events: none;
}
</style>
