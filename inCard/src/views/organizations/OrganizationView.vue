<script setup>
import { ref } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseInput from '@/components/BaseInput.vue';

const form = {
    companyName: "",
};

const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]

const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

// TABLE
const organizationTable = [
    { key: 'id', label: '№' },
    { key: 'companyName', label: 'Названия' },
    { key: 'director', label: 'Директор' },
    { key: 'organizationType', label: 'Тип Организации' },
    { key: 'inn', label: 'ИНН' },
    { key: 'address', label: 'Адрес' },
    { key: 'addData', label: 'Дата добавление' },
    { key: 'actions', label: 'Действие' },
]

const organizationData = ref([
    {
        id: 1,
        companyName: 'ACCENT LINE OOO (BOSCH)',
        director: 'Дилкаш',
        organizationType: 'Организация',
        inn: 310584273,
        address: 'г. Ташкент, Мирабадский р-он, ул. А. Темура',
        addData: '05.07.2024 14:57:21',
    },
]);


const showEditModal = ref(false);
const selectedOrganization = ref(null);

function openEditModal(row) {
    selectedOrganization.value = row;
    showEditModal.value = true;
}
</script>

<template>
    <div class="organizations-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="organization-table-wrapper">
            <div class="organization-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton>Добавить организацию</BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="organizationTable" :data="organizationData">
                        <template #actions="{ row }">
                            <BaseButton class="edit-btn" @click="openEditModal(row)">
                                <img src="@/assets/images/pencil.svg" alt="image" />
                            </BaseButton>
                        </template>
                    </BaseTable>
                </div>
            </div>
        </div>

        <!-- MODAL -->
        <transition name="zoom-modal">
            <div v-if="showEditModal" class="modal-backdrop" @click.self="showEditModal = false">
                <div class="organization-modal">
                    <div class="org-modal-header-wrapper">
                        <div class="close-btn-wrapper">
                            <button class="close" @click="showEditModal = false">
                                <img src="@/assets/images/x.svg" alt="">
                            </button>
                        </div>

                        <div class="org-modal-header">
                            <h3>Изменить организацию</h3>
                            <p>Выберите разделы меню и ключевой функционал</p>
                        </div>
                    </div>

                    <div class="org-modal-content">
                        <div class="row px-3">
                            <div class="col-12 col-sm-4">
                                <div class="modal-left-wrapper">
                                    <div class="item">
                                        <div class="item-image-wrapper blue">
                                            <img src="@/assets/images/clipboard.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Меню</h6>
                                            <p>Доступы к меню</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="item-image-wrapper">
                                            <img src="@/assets/images/star.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Функционал</h6>
                                            <p>Доступы</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="item-image-wrapper">
                                            <img src="@/assets/images/star.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>События</h6>
                                            <p>Тригеры событий</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="item-image-wrapper">
                                            <img src="@/assets/images/bell.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Пуши</h6>
                                            <p>Уведомления</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="item-image-wrapper">
                                            <img src="@/assets/images/laptop.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Система</h6>
                                            <p>Стороние сервисы</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="item-image-wrapper">
                                            <img src="@/assets/images/clipboard.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Реквизиты</h6>
                                            <p>Юр. данные партнера</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-8">
                                <div class="menu-header">
                                    <div class="menu-header-top">
                                        <BaseInput v-model="form.companyName" type="text"
                                            placeholder="Название организации" />
                                        <div class="checkbox-wrapper">
                                            <input type="checkbox" id="companyNamecheck" name="companyNamecheck"
                                                checked />
                                            <label for="companyNamecheck">Активность</label>
                                        </div>
                                    </div>
                                    <div class="menu-header-bottom">
                                        <h6>Меню</h6>
                                    </div>
                                </div>
                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-blue">
                                            <img src="@/assets/images/home.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Главная</h6>
                                            <p>Главная страница и статистика организации</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="home" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-green">
                                            <img src="@/assets/images/person.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Плательщики</h6>
                                            <p>Меню плательщиков и контрактов организации</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="payment" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-orange">
                                            <img src="@/assets/images/card.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Автоплатежи</h6>
                                            <p>Автоплатежи и выставление счета для оплаты</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="autopayment" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-green">
                                            <img src="@/assets/images/clipboardcheck.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Импорт</h6>
                                            <p>Импортировать файлы и систему</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="import" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-red">
                                            <img src="@/assets/images/clipboard.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Отчеты</h6>
                                            <p>Список всех транзакций организации</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="report" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-blue">
                                            <img src="@/assets/images/three-dots.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Операции</h6>
                                            <p>Возврат средств и отмена определенной транзакции</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="operation" checked />
                                    </div>
                                </div>

                                <div class="content-item">
                                    <div class="item">
                                        <div class="item-image-wrapper light-pink">
                                            <img src="@/assets/images/person.svg" alt="image">
                                        </div>
                                        <div class="item-content">
                                            <h6>Пользователи системы</h6>
                                            <p>Управление доступами филиалами и учетным записями</p>
                                        </div>
                                    </div>

                                    <div class="checkbox-wrapper">
                                        <input type="checkbox" id="user-system" checked />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="next-btn-wrapper">
                            <BaseButton>Вперед</BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
/* BACKDROP — fade */
.zoom-modal-enter-active,
.zoom-modal-leave-active {
    transition: opacity 0.25s ease;
}

.zoom-modal-enter-from,
.zoom-modal-leave-to {
    opacity: 0;
}

/* MODAL — fade + zoom */
.zoom-modal-enter-active .organization-modal,
.zoom-modal-leave-active .organization-modal {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.zoom-modal-enter-from .organization-modal {
    opacity: 0;
    transform: scale(0.9);
}

.zoom-modal-leave-to .organization-modal {
    opacity: 0;
    transform: scale(0.9);
}
</style>