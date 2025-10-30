<template>
    <button class="base-btn" :class="variant" :type="type" :disabled="disabled" @click="onClick">
        <slot />
    </button>
</template>

<script setup>
const emit = defineEmits(["click"])
defineProps({
    type: {
        type: String,
        default: "button",
    },
    variant: {
        type: String,
        default: "primary", // варианты: primary / secondary / outline
    },
    disabled: { type: Boolean, default: false },
})
// Функция-обёртка
function onClick(event) {
    event.stopPropagation()
    emit("click", event)
}
</script>

<style scoped>
.base-btn {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    font-size: 14px;
    text-transform: uppercase;
    background: var(--blue);
    border: 1px solid transparent;
    cursor: pointer;
    color: var(--white);
}

/* Варианты кнопок */
.base-btn.primary {
    background: var(--blue);
    color: #fff;
}

.base-btn.primary:hover {
    background: var(--grey);
}

.base-btn.secondary {
    background: var(--red);
    color: var(--white);
}

.base-btn.secondary:hover {
    background: var(--grey);
}

.base-btn.outline {
    border-color: var(--grey);
    background: transparent;
    color: var(--grey);
}

.base-btn.outline:hover {
    background: var(--grey);
    color: var(--white);
}

.dark .base-btn.outline {
    border-color: var(--white);
    color: var(--white);
}
</style>