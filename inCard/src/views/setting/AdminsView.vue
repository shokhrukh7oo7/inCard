<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const showEditPasswordModal = ref(false);
const addUserModalPassword = ref('');
const selectedUser = ref(null);

const integrationSystemTable = [
    { key: 'id', label: '№' },
    { key: 'user', label: 'Пользователь' },
    { key: 'phoneNumber', label: 'Номер телефона' },
    { key: 'status', label: 'Статус' },
    { key: 'block', label: 'Заблокировано' },
    { key: 'date', label: 'Дата добавления' },
    { key: 'actions', label: 'Редактировать' },
]

const integrationSystemTableData = ref([
    {
        id: 1,
        user: 'Иван Иванов',
        phoneNumber: '+998 (12) 345-67-89',
        status: 'Активный',
        block: 'Не заблокирован',
        date: '2025-10-02 02:50:46',
        extra: 'Admin',
    },
    {
        id: 2,
        user: 'Begzod Mamatov',
        phoneNumber: '+998 (99) 006-68-33',
        status: 'Неактивный',
        block: 'Заблокирован',
        date: '2025-10-02 02:50:46',
        extra: 'Super Admin',
    },
]);

// ========================================================================
// function for modals
function openEditUser(row) {
    selectedUser.value = row;
    showEditUserModal.value = true;
}
function openEditPassword(row) {
    selectedUser.value = row;
    showEditPasswordModal.value = true;
}
// for close modal
function closeEditUser(row) {
    selectedUser.value = row;
    showEditUserModal.value = false;
}
function closeEditPassword(row) {
    selectedUser.value = row;
    showEditPasswordModal.value = false;
}
onMounted(() => {
    window.addEventListener('keydown', handeEsc);
});
onUnmounted(() => {
    window.addEventListener('keydown', handeEsc);
})
function handeEsc(e) {
    if (e.key === "Escape") {
        showAddUserModal.value = false;
        showEditUserModal.value = false;
        showEditPasswordModal.value = false;
    }
}
// ========================================================================
</script>

<template>
    <div class="integration-system-wrapper">
        <div class="integration-system-header admins-header">
            <h5>Системные администраторы</h5>

            <BaseButton class="add-integration-btn" @click="showAddUserModal = true">
                Добавить администратора
            </BaseButton>
        </div>

        <div class="table-wrapper">
            <div class="table-component">
                <BaseTable :columns="integrationSystemTable" :data="integrationSystemTableData">
                    <!-- users slot (photo) -->
                    <template #user="{ value, row }">
                        <div class="user-cell">
                            <div class="user-info">
                                <h6 class="user-name">{{ value }}</h6>
                                <p class="user-subtext">{{ row.extra }}</p>
                            </div>
                        </div>
                    </template>

                    <!-- status slot -->
                    <template #status="{ value }">
                        <span :class="[
                            'status-badge',
                            value === 'Активный' ? 'status-active' :
                                value === 'Неактивный' ? 'status-blocked' : ''
                        ]">
                            {{ value }}
                        </span>
                    </template>

                    <!-- status slot -->
                    <template #block="{ value }">
                        <span :class="[
                            'status-badge',
                            value === 'Заблокирован' ? 'status-active' :
                                value === 'Не заблокирован' ? 'status-blocked' : ''
                        ]">
                            {{ value }}
                        </span>
                    </template>

                    <template #actions="{ }">
                        <BaseButton class="edit-btn" @click="openEditUser(row)">
                            <img src="@/assets/images/pencil.svg" alt="image" />
                        </BaseButton>
                        <BaseButton class="edit-btn" @click="openEditPassword(row)">
                            <img src="@/assets/images/bell.svg" alt="image" />
                        </BaseButton>
                    </template>
                </BaseTable>
            </div>
        </div>

        <!-- ========================================================= -->
        <!-- add user modal start -->
        <div v-if="showAddUserModal" class="modal-backdrop" @click.self="showAddUserModal = false">
            <div class="modal-container">
                <div class="modal-header">
                    <div class="close-btn-wrapper">
                        <BaseButton @click="showAddUserModal = false">
                            <img src="../../assets/images/x.svg" alt="image">
                        </BaseButton>
                    </div>
                    <div class="modal-header-content">
                        <h2>Добавить Администраторы</h2>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-body-right-wrapper">
                        <form>
                            <div class="form-item-wrapper">
                                <BaseInput placeholder="Логин" />
                                <BaseInput id="user-password" v-model="addUserModalPassword" placeholder="Пароль"
                                    type="password" autocomplete="new-password" />
                                <BaseInput placeholder="Имя" />
                                <BaseInput placeholder="Фамилия" />
                                <BaseInput placeholder="Номер телефона" />
                            </div>
                            <BaseInput class="checkbox-box" v-model="isActive" type="checkbox" label="Активный" />
                            <div class="form-btn-wrapper">
                                <BaseButton class="add-user-cancel-btn" @click="closeEditUser(row)">Отменить
                                </BaseButton>
                                <BaseButton class="add-user-confirm-btn">Добавить</BaseButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- add user modal end -->
        <!-- ========================================================= -->
        <!-- edit user modal start -->
        <div v-if="showEditUserModal" class="modal-backdrop" @click.self="showEditUserModal = false">
            <div class="modal-container">
                <div class="modal-header">
                    <div class="close-btn-wrapper">
                        <BaseButton @click="closeEditUser(row)">
                            <img src="../../assets/images/x.svg" alt="image">
                        </BaseButton>
                    </div>
                    <div class="modal-header-content">
                        <h2>Изменить Администраторы</h2>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-body-right-wrapper">
                        <form @submit.prevent>
                            <div class="form-item-wrapper">
                                <BaseInput label="Логин" />
                                <BaseInput label="Имя" />
                                <BaseInput label="Фамилия" />
                                <BaseInput label="Номер телефона" />
                            </div>
                            <div class="form-checkbox-wrapper">
                                <BaseInput class="checkbox-item" v-model="isActive" type="checkbox" label="Активный" />
                                <BaseInput class="checkbox-item" v-model="isBlock" type="checkbox" label="Блокировка" />
                            </div>
                            <div class="form-btn-wrapper">
                                <BaseButton class="add-user-cancel-btn" @click="closeEditUser(row)">Отменить
                                </BaseButton>
                                <BaseButton class="add-user-confirm-btn">Добавить</BaseButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- edit user modal end -->
        <!-- ========================================================= -->
        <!-- edit password modal start -->
        <div v-if="showEditPasswordModal" class="modal-backdrop" @click.self="showEditPasswordModal = false">
            <div class="modal-container">
                <div class="modal-header change-password-wrapper">
                    <div class="close-btn-wrapper">
                        <p>Изменить пароль</p>
                        <BaseButton @click="closeEditPassword(row)">
                            <img src="../../assets/images/x.svg" alt="image">
                        </BaseButton>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-body-right-wrapper">
                        <form @submit.prevent>
                            <div class="form-modal-wrapper">
                                <BaseInput id="user-password" v-model="changeNewPasswordModal"
                                    placeholder="Новый пароль" type="password" autocomplete="new-password" />
                                <BaseInput id="user-password" v-model="confirmNewPasswordModal"
                                    placeholder="Подтвердите пароль" type="password" autocomplete="new-password" />
                            </div>
                            <div class="modal-body-btn-wrapper">
                                <BaseButton class="cancel-btn" @click="closeEditPassword(row)">Отменить</BaseButton>
                                <BaseButton class="change-btn">Изменить</BaseButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- edit password modal end -->
        <!-- ========================================================= -->
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.integration-system-wrapper .modal-backdrop form .form-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.integration-system-wrapper .modal-backdrop form .checkbox-box {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    margin: 5px 0;
}

.integration-system-wrapper .modal-backdrop form .form-item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.integration-system-wrapper .modal-backdrop form .form-checkbox-wrapper {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.integration-system-wrapper .modal-backdrop form .checkbox-item {
    flex-direction: row-reverse;
    gap: 5px;
    margin: 5px 0;
}

.integration-system-wrapper .modal-backdrop form .form-btn-wrapper .add-user-cancel-btn {
    background-color: var(--white) !important;
    color: var(--grey) !important;
    border-color: var(--grey);
}
</style>