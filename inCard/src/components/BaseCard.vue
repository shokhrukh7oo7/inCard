<script setup>
defineProps({
    icon: {
        type: String,
        default: '../assets/images/card/statistic.svg',
    },
    title1: {
        type: String,
        required: true,
    },
    value1: {
        type: String,
        required: true,
    },
    title2: {
        type: String,
        required: true,
    },
    value2: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="base-card-wrapper">
        <div class="card-wrapper">
            <div class="icon-wrapper">
                <img :src="icon" alt="image">
            </div>

            <div class="content-wrapper">
                <p>{{ title1 }}</p>
                <h6>{{ value1 }}</h6>
                <p>{{ title2 }}</p>
                <h6>{{ value2 }}</h6>
            </div>
        </div>
    </div>
</template>

<style scoped></style>