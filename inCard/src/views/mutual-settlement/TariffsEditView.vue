<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const isActive = ref(false);
const form = ref({
    organization: '',
    bankComission: '',
    bankProcess: '',
    bankComissionTwo: '',
    bankProcessTwo: '',
    bankComissionThree: '',
    bnakProcessThree: '',
    bankComissionFour: '',
    bankProcessFour: '',
})

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
                        <BaseInput v-model="form.organization" id="organization" label="Организация" />
                    </div>

                    <div class="tariffs-system">
                        <h6>Системная комиссия</h6>
                        <div class="form-item">
                            <BaseInput v-model="form.bankComission" id="comission" label="Комиссия %" />
                            <BaseInput v-model="form.bankProcess" id="process" label="Процессинг" />
                            <BaseInput v-model="form.bankComissionTwo" id="comissionTwo" label="Комиссия %" />
                            <BaseInput v-model="form.bankProcessTwo" id="processTwo" label="Процессинг" />
                        </div>
                    </div>

                    <div class="tariffs-system">
                        <h6>Банковская комиссия</h6>
                        <div class="form-item">
                            <BaseInput v-model="form.bankComissionThree" id="comission" label="Комиссия %" />
                            <BaseInput v-model="form.bnakProcessThree" id="process" label="Процессинг" />
                            <BaseInput v-model="form.bankComissionFour" id="comissionTwo" label="Комиссия %" />
                            <BaseInput v-model="form.bankProcessFour" id="processTwo" label="Процессинг" />
                        </div>
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