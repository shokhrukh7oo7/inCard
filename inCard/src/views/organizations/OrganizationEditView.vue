<script setup>
import { ref, watch } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseTable from '@/components/BaseTable.vue';
import BaseButton from '@/components/BaseButton.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const activeTab = ref('menu');
const isActive = ref(true);
const selectAllFunc = ref(true);
const currentPassword = ref('');

// notification tab inputs
const notificationCheckbox = ref(false)
const emailCheckbox = ref(false)
const apiCheckbox = ref(false)
const sentNotificationCheckbox = ref(false)

// tab (function)
const orgFuncTab = [
    { key: 'name', label: 'Название' },
    { key: 'availability', label: 'Доступность' },
]

const orgFuncTabData = ref([
    {
        name: 'Плательщики и контракты',
        availability: true
    },
    {
        name: 'Добавить плат. и контракты',
        availability: true
    },
    {
        name: 'Изменить плат. и контракты',
        availability: true
    },
    {
        name: 'Удалить плат. и контракты',
        availability: true
    },
    {
        name: 'Белый лист',
        availability: true
    }
])

// tab (action)
const orgFuncTabAction = [
    { key: 'name', label: 'События' },
    { key: 'availability', label: 'Доступность' },
]

const orgFuncTabActionData = ref([
    {
        name: 'Импорт файлов',
        availability: true,
    },
    {
        name: 'Автоплатеж',
        availability: true,
    },
    {
        name: 'Настройка организации',
        availability: true,
    },
    {
        name: 'Добавить пользователя',
        availability: true,
    },
    {
        name: 'Заявка на инцидент',
        availability: true,
    }
])

// когда нажимают "Выбрать все"
const toggleSelectAllFunc = () => {
    orgFuncTabData.value.forEach(item => {
        item.availability = selectAllFunc.value;
    });
};

// следим: если пользователь поменял что-то вручную → обновляем selectAllFunc
watch(orgFuncTabData, (val) => {
    const allSelected = val.every(i => i.availability === true);
    selectAllFunc.value = allSelected;
}, { deep: true });

const goBack = () => {
    router.push('/org/list')
}
</script>

<template>
    <div class="organization-page">
        <div class="tabs-wrapper">
            <div class="tabs-demo">
                <BaseTabs v-model="activeTab" :tabs="[
                    { name: 'menu', label: 'Меню' },
                    { name: 'function', label: 'Функционал' },
                    { name: 'action', label: 'События' },
                    { name: 'notification', label: 'Пуши' },
                    { name: 'system', label: 'Система' },
                    { name: 'recvisits', label: 'Реквизиты' },
                ]">
                    <template #default="{ activeTab }">

                        <div class="org-list-tab-header-wrapper">
                            <h1>Изменить органищацию</h1>
                            <p>Выберите разделы меню и ключевой функционал</p>

                            <div class="org-list-input-wrapper">
                                <div class="input-wrapper">
                                    <BaseInput label="Название организации" />
                                </div>
                                <div class="checkbox-wrapper">
                                    <BaseInput v-model="isActive" type="checkbox" label="Активность" />
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'menu'">
                            <h5>Меню</h5>

                            <div class="org-tab-content">
                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-blue">
                                            <img src="../../assets/images/home.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Главная</h6>
                                            <p>Главная страница и система организации</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-green">
                                            <img src="../../assets/images/person.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Плательщики</h6>
                                            <p>Меню плательщика и контрактов организации</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-orange">
                                            <img src="../../assets/images/card.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Автоплатежи</h6>
                                            <p>Автоплатежи и выставленные счета для оплаты</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-green">
                                            <img src="../../assets/images/clipboard.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Импорт</h6>
                                            <p>Импортировать файлы в систему</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-pink">
                                            <img src="../../assets/images/clipboardcheck.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Отчеты</h6>
                                            <p>Список всех транзакций организации</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-blue">
                                            <img src="../../assets/images/three-dots.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Операции</h6>
                                            <p>Возврат средств и отмена определенной транзакции</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>

                                <div class="item">
                                    <div class="menu-item">
                                        <div class="item-image-wrapper light-pink">
                                            <img src="../../assets/images/person.svg" alt="image">
                                        </div>
                                        <div class="menu-title">
                                            <h6>Пользователи системы</h6>
                                            <p>Упраление доступами филиалами и учетными записями</p>
                                        </div>
                                    </div>
                                    <BaseInput v-model="isActive" type="checkbox" />
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'function'">
                            <div class="func-tab-header-wrapper">
                                <h4>Функционал</h4>
                                <BaseInput type="checkbox" label="Выбрать все" v-model="selectAllFunc"
                                    @change="toggleSelectAllFunc" />
                            </div>

                            <div class="table-wrapper">
                                <div class="table-component">
                                    <BaseTable :columns="orgFuncTab" :data="orgFuncTabData">
                                        <template #availability="{ row }">
                                            <BaseInput v-model="row.availability" type="checkbox" />
                                        </template>
                                    </BaseTable>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'action'">
                            <div class="func-tab-header-wrapper">
                                <h4>События</h4>
                                <BaseInput type="checkbox" label="Выбрать все" v-model="selectAllFunc"
                                    @change="toggleSelectAllFunc" />
                            </div>

                            <div class="table-wrapper">
                                <div class="table-component">
                                    <BaseTable :columns="orgFuncTabAction" :data="orgFuncTabActionData">
                                        <template #availability="{ row }">
                                            <BaseInput v-model="row.availability" type="checkbox" />
                                        </template>
                                    </BaseTable>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'notification'">
                            <div class="notification-wrapper">
                                <div class="notification-header-wrapper">
                                    <h5>Пуши</h5>
                                    <div class="notification-title-wrapper">
                                        <h5>SMS информирование</h5>
                                        <BaseInput type="checkbox" v-model="notificationCheckbox" />
                                    </div>
                                </div>

                                <div class="notification-input-wrapper">
                                    <BaseInput id="login" label="Логин" />
                                    <BaseInput id="password" v-model="currentPassword" label="Пароль" type="password"
                                        autocomplete="new-password" />
                                    <BaseInput id="originator" label="Оригинатор" />
                                    <BaseInput id="url" label="Url" />
                                </div>

                                <div class="notificatin-checkbox-item-wrapper">
                                    <div class="item">
                                        <h5>Email информирование</h5>
                                        <BaseInput type="checkbox" v-model="emailCheckbox" />
                                    </div>
                                    <div class="item">
                                        <h5>API информирование (json)</h5>
                                        <BaseInput type="checkbox" v-model="apiCheckbox" />
                                    </div>
                                    <div class="item">
                                        <h5>Отправмть уведомление до начала автосписание</h5>
                                        <BaseInput type="checkbox" v-model="sentNotificationCheckbox" />
                                    </div>
                                </div>

                                <div class="text-area-wrapper">
                                    <label for="sms">Шаблон SMS (Уведомление оь успешном списании)</label>
                                    <textarea name="sms" id="sms"></textarea>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'system'">
                            <div class="system-wrapper">
                                <div class="notification-header-wrapper">
                                    <h5>Система</h5>
                                    <div class="notification-title-wrapper">
                                        <h5>Garant</h5>
                                        <BaseInput type="checkbox" v-model="notificationCheckbox" />
                                    </div>
                                </div>

                                <div class="notification-input-wrapper">
                                    <BaseInput id="login" label="Логин" />
                                    <BaseInput id="password" v-model="currentPassword" label="Пароль" type="password"
                                        autocomplete="new-password" />
                                </div>

                                <div class="notificatin-checkbox-item-wrapper">
                                    <div class="item">
                                        <h5>HumoGate</h5>
                                        <BaseInput type="checkbox" v-model="emailCheckbox" />
                                    </div>
                                    <div class="item">
                                        <h5>SvGate</h5>
                                        <BaseInput type="checkbox" v-model="apiCheckbox" />
                                    </div>
                                    <div class="item">
                                        <h5>Genesis</h5>
                                        <BaseInput type="checkbox" v-model="sentNotificationCheckbox" />
                                    </div>
                                    <div class="item">
                                        <h5>PSP</h5>
                                        <BaseInput type="checkbox" v-model="sentNotificationCheckbox" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab === 'recvisits'">
                            <div class="recvisits-wrapper">
                                <div class="recvisits-header-wrapper">
                                    <h5>Реквизиты</h5>
                                </div>

                                <div class="recvisits-input-wrapper">
                                    <BaseInput id="firmName" label="Название фирмы" />
                                    <BaseInput id="mfo" label="МФО" />
                                    <BaseInput id="inn" label="ИНН" />
                                    <BaseInput id="Р/С" label="Р/С" />
                                    <BaseInput id="address" label="Адрес" />
                                    <BaseInput id="phoneNumber" label="Тел.номер" />
                                    <BaseInput id="representative" label="Представитель" />

                                    <div class="checkbox-wrapper">
                                        <BaseInput type="checkbox" label="Учитывать отмененные транзакции" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </BaseTabs>
            </div>
        </div>

        <div class="back-btn-wrapper">
            <BaseButton @click="goBack" class="back-btn">Назад</BaseButton>
        </div>
    </div>
</template>

<style scoped></style>
