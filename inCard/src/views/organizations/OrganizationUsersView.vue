<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseFilter from '@/components/BaseFilter.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseInput from '@/components/BaseInput.vue';

const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const showEditPasswordModal = ref(false);
const selectedUser = ref(null);

const addUserModalPassword = ref('');
const isActive = ref(true);
const isBlock = ref(false);

// ==========================================================================================
// filter select 
const selectedCompany = ref("");
const companies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// ==========================================================================================
// add user modal select
const addUserModalSelect = ref("");
const addUserModalSelectCompanies = [
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
    { value: "ACCENT LINE OOO (BOSCH)", label: "ACCENT LINE OOO (BOSCH)" },
]
// ==========================================================================================
// filter
const filterFields = [
    { type: 'input', model: 'search', props: { id: 'search', placeholder: 'Поиск' } },
]

// table
const usersTable = [
    { key: 'user', label: 'Пользователь' },
    { key: 'phoneNumber', label: 'Номер телефона' },
    { key: 'role', label: 'Роль' },
    { key: 'organization', label: 'Организация' },
    { key: 'filial', label: 'Филиал' },
    { key: 'status', label: 'Статус' },
    { key: 'actions', label: 'Действие' },
]

const usersTableData = ref([
    {
        user: 'Begzod Khudoyarov',
        phoneNumber: '+998 (33) 278-82-87',
        role: 'Admin',
        organization: 'POSITIVE SOLUTIONS',
        filial: 'Головной офис',
        status: 'Активный',
    }
])
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
// const usersTableData = ref([]);

// onMounted(async () => {
//     const res = await fetch("/api/users");
//     usersTableData.value = await res.json();
// });
</script>

<template>
    <div class="users-wrapper">
        <div class="filter-wrapper">
            <BaseFilter :fields="filterFields" title="Фильтры поиска"
                @search="data => console.log('Результаты фильтра:', data)" />
        </div>

        <div class="users-table-wrapper">
            <div class="users-table-header">
                <BaseSelect v-model="selectedCompany" :options="companies" placeholder="Все" />
                <BaseButton class="add-users" id="add-users" @click="showAddUserModal = true">Добавить пользователя
                </BaseButton>
            </div>

            <div class="table-wrapper">
                <div class="table-component">
                    <BaseTable :columns="usersTable" :data="usersTableData">
                        <!-- users slot (photo) -->
                        <template #user="{ value }">
                            <div class="user-cell">
                                <img class="user-icon" src="@/assets/images/person.svg" alt="user">

                                <div class="user-info">
                                    <h6 class="user-name">{{ value }}</h6>
                                    <p class="user-subtext">Дополнительный текст</p>
                                </div>
                            </div>
                        </template>

                        <!-- status slot -->
                        <template #status="{ value }">
                            <span :class="[
                                'status-badge',
                                value === 'Активный' ? 'status-active' :
                                    value === 'Заблокировано' ? 'status-blocked' : ''
                            ]">
                                {{ value }}
                            </span>
                        </template>

                        <!-- actions slot -->
                        <template #actions="{ row }">
                            <BaseButton class="edit-user-btn" @click="openEditUser(row)">
                                <img src="@/assets/images/pencil.svg" alt="image" />
                            </BaseButton>
                            <BaseButton class="edit-password-btn" @click="openEditPassword(row)">
                                <img src="@/assets/images/bell.svg" alt="image" />
                            </BaseButton>
                        </template>
                    </BaseTable>
                </div>
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
                        <h2>Добавить пользователя</h2>
                        <p>Ползователь добавляется только в головной офис</p>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-body-left-wrapper">
                        <img src="../../assets/images/clipboard.svg" alt="image">
                        <div class="modal-body-left-content-wrapper">
                            <h6>Данные</h6>
                            <p>Данные пользователя</p>
                        </div>
                    </div>
                    <div class="modal-body-right-wrapper">
                        <form>
                            <BaseSelect v-model="addUserModalSelect" :options="addUserModalSelectCompanies"
                                placeholder="Все" />
                            <BaseInput placeholder="Логин" />
                            <BaseInput id="user-password" v-model="addUserModalPassword" placeholder="Пароль"
                                type="password" autocomplete="new-password" />
                            <BaseInput placeholder="Имя" />
                            <BaseInput placeholder="Фамилия" />
                            <BaseInput placeholder="Номер телефона" />
                            <BaseInput class="checkbox-box" v-model="isActive" type="checkbox" label="Активный" />
                            <BaseButton class="add-user-confirm-btn">Подтвердить</BaseButton>
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
                        <h2>Добавить пользователя</h2>
                        <p>Ползователь добавляется только в головной офис</p>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal-body-left-wrapper">
                        <img src="../../assets/images/clipboard.svg" alt="image">
                        <div class="modal-body-left-content-wrapper">
                            <h6>Данные</h6>
                            <p>Данные пользователя</p>
                        </div>
                    </div>
                    <div class="modal-body-right-wrapper">
                        <form @submit.prevent>
                            <BaseSelect v-model="addUserModalSelect" :options="addUserModalSelectCompanies"
                                placeholder="Все" />
                            <BaseInput label="Логин" />
                            <BaseInput label="Имя" />
                            <BaseInput label="Фамилия" />
                            <BaseInput label="Номер телефона" />
                            <BaseInput label="Филиал" />
                            <BaseInput label="Роль" />
                            <BaseInput class="checkbox-item" v-model="isActive" type="checkbox" label="Активный" />
                            <BaseInput class="checkbox-item" v-model="isBlock" type="checkbox" label="Блокировка" />
                            <BaseButton class="add-user-confirm-btn">Подтвердить</BaseButton>
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
</style>