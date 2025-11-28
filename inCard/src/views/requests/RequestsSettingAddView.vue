<script setup>
import { ref } from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const isActive = ref(true);
const isActiveTwo = ref(false);

const gateways = [
    { value: "uzcard", label: "Uzcard" },
    { value: "humo", label: "Humo" },
    { value: "both", label: "Uzcard + Humo" },
]

const organizations = [
    { value: "all", label: "Все организации" },
    { value: "positive_solutions", label: "Positive solutions" },
    { value: "techcorp", label: "TechCorp" },
]

const scheduler = [
    { value: "once_a_day", label: "Раз в день" },
    { value: "once_a_week", label: "Раз в неделю" },
    { value: "once_a_month", label: "Раз в месяц" },
]
</script>

<template>
    <div class="request-setting-add-wrapper">
        <div class="request-setting-add-header">
            <h5>Добавить запрос настройки</h5>
        </div>

        <div class="request-setting-add-body">
            <form>
                <div class="form-item">
                    <BaseSelect :options="gateways" placeholder="" label="Шлюз" />
                    <BaseSelect :options="organizations" placeholder="" label="Организация" />
                    <BaseInput label="Минимальная сумма" type="number" />
                    <BaseSelect :options="scheduler" placeholder="" label="Планировщик" />
                </div>

                <div class="checkbox-item">
                    <BaseInput class="checkbox-box" v-model="isActive" type="checkbox" label="Активность" />
                    <BaseInput class="checkbox-box" v-model="isActiveTwo" type="checkbox"
                        label="Поиск создания плательщика" />
                </div>

                <div class="request-setting-btn-wrapper">
                    <BaseButton class="cancel-btn" variant="outline" @click="$router.push('/requests/settings')">
                        Отмена
                    </BaseButton>
                    <BaseButton class="save-btn" type="submit">
                        Добавить
                    </BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>