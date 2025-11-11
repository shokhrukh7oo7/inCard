<script setup>
defineProps({
    percentage: {
        type: Number,
        required: true,
        default: 0
    },
    color: {
        type: String,
        default: '#0000ff',
    }
})
</script>

<template>
    <div class="progress-wrapper">
        <span class="progress-text">{{ percentage }}</span>
        <div class="progress-bar">
            <div class="progress-fill" :style="{ width: percentage + '%' }"></div>
        </div>
    </div>
</template>

<style scoped>
.progress-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
}

.progress-text {
    margin-bottom: 4px;
    color: #333;
}

.progress-bar {
    position: relative;
    width: 100%;
    height: 6px;
    background-color: #eee;
    border-radius: 6px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background-color: var(--progress-color, #007bff);
    border-radius: 6px;
    transition: width 0.4s ease;
}

@media (max-width: 992px) {
    .progress-wrapper {
        flex-direction: row;
        width: 100%;
        max-width: 70px;
        gap: 5px;
    }

    .progress-text {
        margin-bottom: 0;
    }
}
</style>