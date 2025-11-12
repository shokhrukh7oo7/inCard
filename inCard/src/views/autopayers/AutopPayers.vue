<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseTable from '@/components/BaseTable.vue'

const users = [
    {
        id: 1,
        name: 'Emlurodjon',
        sureName: '',
        lastName: 'Mominov',
        birthDay: '',
        pinfl: 30907861220093,
        passport: 'AA 4369116',
        passportIssueDate: '',
        passportExpirationDate: '',
        inn: '',
    }
]

// FORM WRAPPER
const form = ref({
    dateAdded: '16.07.2024 15:30:49',
    idContract: '153134',
    dateStart: '16.07.2024',
    available: 'Головной офис',
    sumPlan: '2 153 868,48',
    amountPaid: 0,
    remainingAmount: '2 153 868,48',
    status: 'Завершен',
    completionDate: '23.08.2024 16:32:30'
})


// AUTOPAYER TABLE
const autoPayment = [
    { key: 'idPayment', label: 'ID платежа' },
    { key: 'idContract', label: 'ID контракта' },
    { key: 'sum', label: 'Сумма' },
    { key: 'comission', label: 'Комиссия' },
    { key: 'cardNumber', label: 'Номер карты' },
    { key: 'idTerminal', label: 'ID терминала' },
    { key: 'gateway', label: 'Шлюз' },
    { key: 'date', label: 'Дата' },
    { key: 'dateReversal', label: 'Дата реверсала' }
]

const dataAutoPayment = ref([
    {
        idPayment: '',
        idContract: '',
        sum: '',
        comission: '',
        cardNumber: '',
        idTerminal: '',
        gateway: '',
        date: '',
        dateReversal: '',
    }
])

const user = computed(() => users[0])
</script>


<template>
    <div class="payer-details-wrapper">
        <div class="row">
            <div class="col-12 col-lg-3 col-md-4">
                <div class="user-detail-wrapper">
                    <div class="user-detail-content">
                        <div class="payer-detail-header-wrapper">
                            <h1>Данные плательщика</h1>
                        </div>

                        <div class="payer-detail-content-wrapper">
                            <div v-if="user" class="detail-items">
                                <p><strong>Имя:</strong> {{ user.name }}</p>
                                <p><strong>Отчество:</strong> {{ user.sureName }}</p>
                                <p><strong>Фамилия:</strong> {{ user.lastName }}</p>
                                <p><strong>Дата рождения:</strong> {{ user.birthDay }}</p>
                                <p><strong>ПИНФЛ:</strong> {{ user.pinfl }}</p>
                                <p><strong>Серия и Номер пасспорта:</strong> {{ user.passport }}</p>
                                <p><strong>Дата выдачи паспорта:</strong> {{ user.passportIssueDate }}</p>
                                <p><strong>Дата истечения паспорта:</strong> {{ user.passportExpirationDate }}</p>
                                <p><strong>ИНН:</strong> {{ user.inn }}</p>
                            </div>
                            <div v-else>
                                <p>Пользователь не найден.</p>
                            </div>
                        </div>
                    </div>

                    <BaseButton>Перейти к плательщику</BaseButton>
                </div>
            </div>

            <div class="col-12 col-lg-9 col-md-8">
                <div class="autopayment-wrapper">
                    <div class="autopayer-content-wrapper">
                        <div class="header-wrapper">
                            <p class="header-detail-autopayment">Детали автоплатежа</p>
                        </div>

                        <div class="autopayment-input-wrapper">
                            <div class="form-wrapper">
                                <BaseInput v-model="form.dateAdded" id="dateAdded" label="Дата добавления" disabled />
                                <BaseInput v-model="form.idContract" id="idContract" label="ID контракт" disabled />
                                <BaseInput v-model="form.dateStart" id="dateStart" label="Дата старта" disabled />
                                <BaseInput v-model="form.available" id="available" label="Доступен" disabled />
                                <BaseInput v-model="form.sumPlan" id="sumPlan" label="Планируемая сумма" disabled />
                                <BaseInput v-model="form.amountPaid" id="amountPaid" label="Выплаченная сумма"
                                    disabled />
                                <BaseInput v-model="form.remainingAmount" id="remainingAmount" label="Оставшееся сумма"
                                    disabled />
                                <BaseInput v-model="form.status" id="status" label="Статус" disabled />
                                <BaseInput v-model="form.completionDate" id="completionDate" label="Дата завершения"
                                    disabled />
                            </div>
                        </div>
                    </div>

                    <div class="autopayment-table-wrapper">
                        <div class="header-wrapper">
                            <p class="header-detail-autopayment">Транзакции</p>
                        </div>

                        <div class="table-wrapper">
                            <div class="table-component">
                                <BaseTable :columns="autoPayment" :data="dataAutoPayment"></BaseTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>