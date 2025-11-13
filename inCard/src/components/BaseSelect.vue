<template>
    <div class="base-select-wrapper">
        <div class="select-wrapper" ref="wrapperRef">
            <!-- Кнопка -->
            <button class="select-trigger" @click="toggleDropdown">
                <span>{{ selectedLabel || placeholder }}</span>
                <span class="arrow" :class="{ open: isOpen }">▼</span>
            </button>

            <!-- Выпадающий список -->
            <div v-if="isOpen" class="select-dropdown">
                <div v-if="label" class="select-label">{{ label }}</div>

                <div v-for="option in options" :key="option.value" class="select-item" @click="selectOption(option)">
                    {{ option.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"

// === Props ===
const props = defineProps({
    modelValue: [String, Number], // поддерживает v-model
    options: {
        type: Array,
        required: true, // [{ value: 'apple', label: 'Apple' }]
    },
    label: String,
    placeholder: {
        type: String,
        default: "Select an option",
    },
})

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const wrapperRef = ref(null) // 🔹 добавляем локальный ref

const selectedLabel = computed(() => {
    const selected = props.options.find((opt) => opt.value === props.modelValue)
    return selected ? selected.label : ""
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectOption(option) {
    emit("update:modelValue", option.value)
    isOpen.value = false
}

function handleClickOutside(e) {
    // const el = document.querySelector(".select-wrapper")
    // if (el && !el.contains(e.target)) isOpen.value = false
    if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
        isOpen.value = false
    }
}

onMounted(() => document.addEventListener("click", handleClickOutside))
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside))
</script>

<style scoped></style>
