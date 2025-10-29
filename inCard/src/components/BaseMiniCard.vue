<template>
    <div class="base-mini-card-wrapper">
        <div class="card-wrapper">
            <div class="icon-wrapper">
                <img :src="icon" alt="image">
            </div>

            <div class="content-wrapper">
                <p>{{ title1 }}</p>
                <h6>{{ value1 }}</h6>
            </div>
        </div>
    </div>
</template>

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
})
</script>

<style lang="scss" scoped></style>