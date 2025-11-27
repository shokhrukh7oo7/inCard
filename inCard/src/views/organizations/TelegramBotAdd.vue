<script setup>
import { ref } from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const isActive = ref(true);
// select
const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

</script>

<template>
    <div class="telegram-bot-add-wrapper">
        <div class="telegram-bot-add-header">
            <h5>Добавить</h5>
        </div>
        <div class="telegram-bot-add-content">
            <form>
                <div class="telegram-bot-input-wrapper">
                    <BaseSelect v-model="selectedCompany" :options="companies" placeholder=" " label="Все" />
                    <BaseInput id="channelId" label="Канал ID" />
                </div>

                <div class="checkbox-wrapper">
                    <BaseInput class="checkbox-box" v-model="isActive" type="checkbox" label="Активность" />
                </div>

                <div class="telegram-bot-add-button-wrapper">
                    <BaseButton class="cancel-btn">Отменить</BaseButton>
                    <BaseButton class="add-btn">Добавить</BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>