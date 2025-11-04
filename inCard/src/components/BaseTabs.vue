<template>
    <div class="base-tabs">
        <!-- Заголовки -->
        <div class="tabs-list">
            <button v-for="tab in tabs" :key="tab.name" class="tabs-trigger" :class="{ active: tab.name === activeTab }"
                @click="setActive(tab.name)">
                {{ tab.label }}
            </button>
        </div>

        <!-- Контент -->
        <div class="tab-content">
            <slot :active-tab="activeTab"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
        // Пример:
        // [
        //   { name: 'account', label: 'Аккаунт' },
        //   { name: 'security', label: 'Безопасность' },
        // ]
    },
    modelValue: {
        type: String,
        default: null,
    },
})

const emit = defineEmits(['update:modelValue'])
const activeTab = ref(props.modelValue || props.tabs[0]?.name)

watch(activeTab, val => emit('update:modelValue', val))
watch(() => props.modelValue, val => (activeTab.value = val))

function setActive(name) {
    activeTab.value = name
}
</script>