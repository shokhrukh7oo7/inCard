<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import { defineProps } from 'vue'

const router = useRouter()

const props = defineProps({
    id: String, // или Number
})
// for inputs
const form = ref({
    organization: 'ACCENT LINE OOO (BOSCH)',
    groupName: 'ACCENT LINE GROUP',
    psp: '105669',
    uzcardMerchantID: '903100000033887',
    uzcardTerminalID: '97012354',
    uzcardTerminalID: '004010541098808',
    uzcardTerminalID: '1963707S',
})

// select (terminals-item-top-wrapper)
const selectedCompany = ref("");
const companies = [
    { value: "Aloqa bank", label: "Aloqa bank" },
    { value: "Apelsin bank", label: "Apelsin bank" },
    { value: "Mandarin bank", label: "Mandarin bank" },
]

function cancel() {
    router.push('/terminals/list')
}

// Если нужно, можешь получать id и подгружать данные терминала
console.log('Текущий id терминала:', props.id)
</script>

<template>
    <div class="terminals-item-wrapper">
        <div class="terminals-item-header">
            <h5>Изменить терминал</h5>
        </div>

        <div class="terminals-item-content">
            <div class="terminals-item-top-wrapper">
                <BaseInput v-model="form.organization" id="organization" label="Организация" disabled />
                <BaseInput v-model="form.groupName" id="groupName" label="Название группы" />
                <BaseSelect v-model="selectedCompany" :options="companies" label="Банк" placeholder="Все" />
            </div>

            <div class="terminals-item-bottom-wrapper">
                <p>Garant</p>
                <div class="terminals-input-wrapper">
                    <BaseInput v-model="form.uzcardMerchantID" id="uzcardMerchantID" label="UzCard ID Мерчанта" />
                    <BaseInput v-model="form.uzcardTerminalID" id="uzcardTerminalID" label="UzCard ID Терминала" />
                    <BaseInput v-model="form.uzcardTerminalID" id="humoMerchantID" label="Humo ID Мерчанта" />
                    <BaseInput v-model="form.uzcardTerminalID" id="humoTerminalID" label="Humo ID Терминала" />
                </div>
            </div>
        </div>

        <div class="terminals-item-btn-wrapper">
            <BaseButton variant="default" @click="cancel">Отменить</BaseButton>
            <BaseButton variant="primary">Добавить</BaseButton>
        </div>
    </div>
</template>

<style scoped></style>