<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

// AUTOPAYER TABLE
const form = ref({
    name: 'Elmurodjon',
    lastname: 'Mominov',
    surname: '',
    pinfl: '30907861220093',
    birthDay: '',
    passportNumber: 'AA 4369116',
    passportNumber: '',
    passportIssueDate: '',
    passportExpirationDate: 'Головной офис'
})
</script>

<template>
    <div class="personal-date-wrapper">
        <div class="personal-date-header-wrapper">
            <p class="personal-header">Данные плательщика</p>
            <p class="personal-description">ACCENT LINE OOO (BOSCH)</p>
        </div>

        <div class="personal-date-info-wrapper">
            <BaseInput v-model="form.name" id="name" label="Имя" disabled />
            <BaseInput v-model="form.lastname" id="lastname" label="Фамилия" disabled />
            <BaseInput v-model="form.surname" id="surname" label="Отчество" disabled />
            <BaseInput v-model="form.pinfl" id="pinfl" label="ПИНФЛ" disabled />
            <BaseInput v-model="form.birthDay" id="birthDay" label="Дата рождения" disabled />
            <BaseInput v-model="form.passportNumber" id="passportNumber" label="Серия и Номер паспорта" disabled />
            <BaseInput v-model="form.passportIssueDate" id="passportIssueDate" label="Дата выдачи паспорта" disabled />
            <BaseInput v-model="form.passportExpirationDate" id="passportExpirationDate" label="Дата истечения паспорта"
                disabled />
            <BaseInput v-model="form.added" id="added" label="Добавлен" disabled />

            <BaseButton class="btn back-btn">Назад</BaseButton>
        </div>
    </div>
</template>

<style scoped>
.personal-date-wrapper {
    background: var(--white);
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
    border-radius: 4px;
    vertical-align: top;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 1rem;
}

.personal-date-wrapper .personal-date-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid var(--hr-color);
    padding-bottom: 0.5rem;
}

.personal-date-wrapper .personal-date-header-wrapper .personal-header {
    font-size: 20px;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: var(--blue);
}

.personal-date-wrapper .personal-date-header-wrapper .personal-description {
    font-size: 17px;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: var(--blue);
}

.personal-date-wrapper .personal-date-info-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 20px;
}

.personal-date-wrapper .personal-date-info-wrapper .back-btn {
    background-color: orange;
    width: 100%;
    max-width: 200px;
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
    border-radius: 6px;
}

.personal-date-wrapper .personal-date-info-wrapper .back-btn:hover {
    background-color: var(--grey);
}

.dark .personal-date-wrapper {
    background-color: var(--header-bg);
}

.dark .personal-date-wrapper .personal-date-header-wrapper .personal-header,
.dark .personal-date-wrapper .personal-date-header-wrapper .personal-description {
    color: var(--white);
}

.dark .personal-date-wrapper .personal-date-info-wrapper .back-btn:hover {
    background-color: var(--grey);
}

.dark .personal-date-wrapper .personal-date-header-wrapper {
    border-color: var(--white);
}

@media (max-width: 768px) {
    .personal-date-wrapper .personal-date-header-wrapper {
        flex-direction: column;
    }

    .personal-date-wrapper .personal-date-info-wrapper {
        grid-template-columns: 1fr;
    }
}
</style>