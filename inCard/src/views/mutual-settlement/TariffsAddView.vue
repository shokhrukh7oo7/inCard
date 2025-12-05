<script setup>
import { ref } from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const isActive = ref(false);
const form = ref({
    comission: '',
    process: '',
    comissionTwo: '',
    processTwo: '',
})

const selectedCompany = ref("");
const companies = [

    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
</script>

<template>
    <div class="tariffs-add-wrapper">
        <div class="tariffs-add-header">
            <h5>Добавить тариф для организации</h5>
        </div>

        <div class="tariffs-add-body">
            <form>
                <div class="form-item-wrapper">
                    <div class="form-item">
                        <BaseInput class="checkbox-box" v-model="isActive" type="checkbox"
                            label="Списать комиссию с плательщика" />
                    </div>

                    <div class="form-item">
                        <BaseSelect v-model="selectedCompany" :options="companies" placeholder="" label="Организация" />
                    </div>

                    <div class="form-item">
                        <BaseInput v-model="form.comission" id="comission" label="Комиссия %" />
                        <BaseInput v-model="form.process" id="process" label="Процессинг" />
                        <BaseInput v-model="form.comissionTwo" id="comissionTwo" label="Комиссия %" />
                        <BaseInput v-model="form.processTwo" id="processTwo" label="Процессинг" />
                    </div>
                </div>

                <div class="form-btn-wrapper">
                    <BaseButton class="cancel-btn" @click="$router.push('/balance/debts')">Отменить</BaseButton>
                    <BaseButton class="add-btn">Добавить</BaseButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>