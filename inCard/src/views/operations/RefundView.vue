<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

const idPayment = ref('')
</script>

<template>
    <div class="refund-wrapper">
        <div class="refund-left-wrapper">
            <h5>Возврат средств</h5>
            <ul>
                <li>
                    <span>Возврат средств</span>
                    отменяет совершенную транзакцию, для того чтобы отменить и вернуть средства на карту необходимо
                    найти нужный платеж и при помощи ID платежа произвести возврат средств, убедитесь что вы нашли
                    нужную транзакцию так же синхронизируйте операцию в биллинге при необходимости.
                </li>
            </ul>
        </div>

        <div class="refund-right-wrapper">
            <div class="refund-right-header-wrapper">
                <h5>Транзакции</h5>
                <BaseButton>
                    <img src="../../assets/images/search.svg" alt="image">
                </BaseButton>
            </div>

            <div class="refund-right-content-wrapper">
                <BaseInput v-model="idPayment" id="idPayment" placeholder="ID Платежа" />
                <BaseButton>Поиск</BaseButton>
            </div>
        </div>
    </div>
</template>


<style scoped></style>