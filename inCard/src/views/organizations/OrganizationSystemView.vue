<script setup>
import { ref, defineProps } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps({
    id: String,
})

const form = ref({
    orgSystemSelect: "ACCENT LINE OOO (BOSCH)",
    systemSelect: "YANGI",
    url: "",
    login: "",
    password: "",
    param: "",
})

const orgCompanies = [
    { value: 'ACCENT LINE OOO (BOSCH)', label: 'ACCENT LINE OOO (BOSCH)' },
    { value: 'YANGI', label: 'YANGI' },
]

const systemCompanies = [
    { value: 'YANGI', label: 'YANGI' },
    { value: 'ACCENT LINE OOO (BOSCH)', label: 'ACCENT LINE OOO (BOSCH)' }
]

console.log('Текущий id терминала:', props.id)
</script>

<template>
    <div class="org-limit-wrapper">
        <div class="org-limit-header-wrapper">
            <h5>Система организации</h5>
        </div>

        <div class="org-limit-form-wrapper">

            <div class="org-limit-form-item">
                <BaseSelect v-model="form.orgSystemSelect" :options="orgCompanies" id="orgSystemSelect"
                    label="Организация" />
                <BaseSelect v-model="form.systemSelect" :options="systemCompanies" id="systemSelect" label="Система" />
            </div>

            <div class="org-system-wrapper">
                <BaseInput v-model="form.url" id="url" label="URL-адрес" />
                <BaseInput v-model="form.login" id="login" label="Логин" />
                <BaseInput v-model="form.password" id="password" label="Пароль" />
                <BaseInput v-model="form.param" id="param" label="Параметр" />
            </div>

            <div class="org-limit-btn-wrapper">
                <BaseButton class="save-btn">Сохранить</BaseButton>
            </div>
        </div>
    </div>
</template>
