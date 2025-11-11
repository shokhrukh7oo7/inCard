<script setup>
import { computed } from 'vue';

const props = defineProps({
    badge: {
        type: String,
        required: true,
    },
})

const badgeClass = computed(() => {
    const lower = props.badge.toLowerCase()
    if (lower === 'активна' || lower === 'active') return 'badge--active'
    if (lower === 'неактивна' || lower === 'inactive') return 'badge--inactive'
    return 'badge--default'
})

</script>

<template>
    <div class="badge-wrapper">
        <span class="base-badge" :class="badgeClass">
            {{ badge }}
        </span>
    </div>
</template>

<style scoped>
.base-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
}

.badge--active {
    background-color: var(--green);
    /* зелёный */
}

.badge--inactive {
    background-color: var(--red);
    /* красный */
}

.badge--default {
    background-color: #6b7280;
    /* серый */
}
</style>