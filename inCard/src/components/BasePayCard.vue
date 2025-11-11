<template>
    <div class="card-wrapper">
        <div class="image-wrapper">
            <img :src="image" alt="image">
            <BaseButton @click="$emit('reject')">Отклонить карту</BaseButton>
        </div>

        <div class="user-info-wrapper">
            <p class="user-name">{{ userName }}</p>
            <p class="card-name">{{ cardName }}</p>
        </div>

        <div class="card-number-wrapper">
            <p class="card-number">{{ cardNumber }}</p>
        </div>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';

defineProps({
    image: {
        default: new URL('../assets/images/card/uzcard-white.svg', import.meta.url).href,
    },
    userName: {
        type: String,
        required: true,
    },
    cardName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    }
})
defineEmits(['reject'])
</script>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--white);
    border-radius: 4px;
    vertical-align: top;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 1rem;
}

.card-wrapper .image-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.card-wrapper .image-wrapper img {
    width: 30px;
}

.card-wrapper .user-info-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.card-wrapper .user-info-wrapper .user-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: var(--black);
}

.card-wrapper .user-info-wrapper .card-name {
    font-size: 15px;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: var(--grey);
}

.card-wrapper .card-number-wrapper .card-number {
    font-size: 14px;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: var(--grey);
}

.card-wrapper button {
    background-color: transparent !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    color: var(--grey) !important;
    border-radius: 4px;
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
}

.card-wrapper button:hover {
    background-color: var(--grey) !important;
    color: var(--white) !important;
}

.dark .card-wrapper {
    border-color: var(--white);
    background-color: var(--header-bg);
}

.dark .card-wrapper button {
    color: var(--white) !important;
    border-color: var(--white) !important;
}

.dark .card-wrapper .user-name,
.dark .card-wrapper .card-name,
.dark .card-wrapper .card-number {
    color: var(--white);
}
</style>