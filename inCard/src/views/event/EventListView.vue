<script setup>
import BaseSelect from '@/components/BaseSelect.vue';
import BaseFilter from '@/components/BaseFilter.vue';

const allCompanies = [
    { value: "fileImport", label: "Импорт файлов" },
    { value: "autopay", label: "Автоплатеж" },
    { value: "orgSettings", label: "Настройка организации" },
    { value: "addUser", label: "Добавить пользователя" },
    { value: "incidentRequest", label: "Заявка на инцидент" },
]
const eventField = [
    { type: 'date', model: 'transactionDate', props: { placeholder: 'Дата транзакции' } },
    { type: 'select', model: 'company', props: { options: allCompanies, placeholder: 'событие (триггер)' } },
    { type: 'input', model: 'userName', props: { id: 'userName', placeholder: 'Имя пользователя' } },
]

const company = [
    { value: "adilab", label: "Adilab ooo" },
    { value: "kafil", label: "Kafil sug'urta" },
    { value: "ajib", label: "Ajib Electronics ooo" },
]

const handleSearch = filters => {
    console.log('Фильтры', filters);
}
</script>

<template>
    <div class="event-wrapper">
        <div class="row">
            <div class="col-12 col-lg-4 col-md-12">
                <div class="event-left-wrapper">
                    <div class="event-list-header">
                        <h5>События</h5>
                    </div>
                    <div class="event-list-body">
                        <p>
                            <span>Список событий</span>
                            формируется события которые происходили в
                            системе организации тут мониторятся
                        </p>
                        <ul>
                            <li>Импорт файлов</li>
                            <li>Автоплатеж</li>
                            <li>Настройка организации</li>
                            <li>Добавить пользователя</li>
                            <li>Заявка на инцидент</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-8 col-md-12">
                <div class="event-right-wrapper">
                    <BaseFilter :fields="eventField" title="Фильтр поиска" :defaultOpen="true" @search="handleSearch" />

                    <div class="event-right-body">
                        <div class="evenet-header-wrapper">
                            <h5>Список событий</h5>
                            <BaseSelect :options="company" placeholder="Positive solutions" />
                        </div>

                        <div class="event-information-wrapper">
                            <div class="event-info-wrapper">
                                <p class="user">Пользователь 99bdf211-517a-4aa0-973b-fdfc5a8032bf</p>
                                <p class="pay">auto_payment</p>
                                <div class="event-info-content">
                                    <p class="event-left-title">
                                        Создан автоплатеж и договор создан по контракту
                                        2528609 на сумму 770301467 по системе
                                    </p>
                                    <p class="event-right-title">28.11.2025 18:21:06</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>