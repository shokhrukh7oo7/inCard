<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const selectedCompany = ref("")
const all = [
    { value: "Все", label: "Все" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ADILAB OOO", label: "ADILAB OOO" },
]

</script>

<template>
    <div class="payers-contact-wrappper">
        <div class="filter-wrapper">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Фильтр
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <form>
                                <BaseInput id="pinfl" placeholder="ПИНФЛ" />
                                <BaseInput id="fullName" placeholder="ФИО" />
                                <BaseInput id="passportSeries" placeholder="Серия/Номер паспорта" />
                                <BaseInput id="phoneNumber" placeholder="Номер телефона" />
                                <BaseInput id="contract" placeholder="Контракт" />
                                <BaseButton>Поиск</BaseButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-wrapper">
            <div class="table-component" id="payer-contact">
                <div class="export-wrapper">
                    <BaseButton>
                        <img src="../../assets/images/table/arrow-export.svg" alt="image">
                        Export
                    </BaseButton>

                    <BaseSelect v-model="selectedCompany" :options="all" placeholder="Все" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ПИНФЛ</th>
                            <th>ФИО</th>
                            <th>Номер контракта</th>
                            <th>Серия и номер паспорта</th>
                            <th>Филиал</th>
                            <th>Перейти</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="№">1</td>
                            <td data-label="ПИНФЛ"><a href="#">30907861220093</a></td>
                            <td data-label="ФИО">Elmurod Mominov</td>
                            <td data-label="Номер контректа">153134</td>
                            <td data-label="Серия и номер паспорта">AA 4369116</td>
                            <td data-label="Филиал">Головной офис</td>
                            <td data-label="Перейти"><a href="#"><img src="../../assets/images/table/arrow-circle.svg"
                                        alt="image"></a></td>
                        </tr>

                        <tr>
                            <td data-label="№">1</td>
                            <td data-label="ПИНФЛ"><a href="#">30907861220093</a></td>
                            <td data-label="ФИО">Elmurod Mominov</td>
                            <td data-label="Номер контректа">153134</td>
                            <td data-label="Серия и номер паспорта">AA 4369116</td>
                            <td data-label="Филиал">Головной офис</td>
                            <td data-label="Перейти"><a href="#"><img src="../../assets/images/table/arrow-circle.svg"
                                        alt="image"></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>