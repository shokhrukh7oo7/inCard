<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
    id: String, // или Number
})
const form = ref({
    orgLimitSelect: '0',
})

// select
const orgLimitSelected = ref("");
const companies = [
    { value: 'YANGI', label: 'YANGI' },
    { value: 'ACCENT LINE OOO (BOSCH)', label: 'ACCENT LINE OOO (BOSCH)' }
]
console.log('Текущий id терминала:', props.id)
</script>

<template>
    <div class="org-limit-wrapper">
        <div class="org-limit-header-wrapper">
            <h5>Лимит настройка</h5>
        </div>

        <div class="org-limit-form-wrapper">
            <div class="org-limit-form-item">
                <BaseSelect v-model="form.orgLimitSelect" :options="companies" id="orgLimitSelect"
                    label="Организация" />
                <BaseInput v-model="orgLimitSelected" id="orgLimit" label="Лимит" />
            </div>

            <div class="org-limit-btn-wrapper">
                <BaseButton class="save-btn">Сохранить</BaseButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>