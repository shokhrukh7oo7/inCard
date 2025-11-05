<script setup>
import { ref, onMounted } from 'vue'
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseTabs from '@/components/BaseTabs.vue';

// Добавляем состояния для паролей
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const activeTab = ref('account')
// изображение профиля
const defaultImage = new URL("../assets/images/sidebar/user.png", import.meta.url).href
const profileImage = ref(localStorage.getItem('profileImage') || defaultImage)

// ссылка на input
const fileInput = ref(null)

// при клике на кнопку — открываем окно выбора файла
const selectImage = () => {
    fileInput.value?.click()
}

// обработка выбора файла
const onFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (event) => {
            profileImage.value = event.target.result
        }
        reader.readAsDataURL(file)
    }
}

// сброс фото
const resetImage = () => {
    profileImage.value = defaultImage
    if (fileInput.value) fileInput.value.value = ""
}


// connect with api
const form = ref({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
})

const BASEURL = 'http://localhost:8080'

const userProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASEURL}/api/auth/get-me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

        const data = await response.json()
        console.log('test', data);

        if (data.success === true) {
            form.value.userName = data.result.username || ''
            form.value.firstName = data.result.firstName || ''
            form.value.lastName = data.result.lastName || ''
            form.value.email = data.result.email || ''
            form.value.phone = data.result.phone || ''
        }
        console.log('test2', form.value);

    } catch (err) {
        err.value = 'Ошибка'
    }
}

const saveProfile = async () => {
    try {
        const token = localStorage.getItem('token')

        const updatedData = {
            userName: form.value.userName,
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            email: form.value.email,
            phone: form.value.phone,
        }

        const response = await fetch(`${BASEURL}/api/auth/update-me`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(updatedData),
        })

        const data = await response.json()
        console.log('update:', data)

        if (data.success) {
            alert('Профиль успешно обновлён!')
        } else {
            alert('Не удалось обновить профиль.')
        }
    } catch (err) {
        console.error('Ошибка при обновлении профиля', err)
    }
}


onMounted(() => {
    userProfile()
})
</script>

<template>
    <div class="tabs-demo">

        <BaseTabs v-model="activeTab" :tabs="[
            { name: 'account', label: 'Аккаунт' },
            { name: 'security', label: 'Безопасность' },
        ]">

            <template #default="{ activeTab }">
                <div v-if="activeTab === 'account'">
                    <!-- Твоя разметка аккаунта -->
                    <div class="card">
                        <div class="card-header">
                            <div class="image-wrapper">
                                <img :src="profileImage" alt="image" />
                            </div>

                            <div class="image-setting-wrapper">
                                <input type="file" accept="image/*" ref="fileInput" @change="onFileChange"
                                    style="display: none" />
                                <BaseButton @click.stop="selectImage">Загрузить фото</BaseButton>
                                <BaseButton variant="secondary" @click="resetImage">Сбросить</BaseButton>
                                <p class="format-content">Допускаются JPG, GIF или PNG.</p>
                            </div>
                        </div>

                        <div class="card-content">
                            <form>
                                <div class="form-wrapper">
                                    <BaseInput v-model="form.userName" id="login" label="Логин" />
                                    <BaseInput v-model="form.firstName" id="first-name" label="Имя" />
                                    <BaseInput v-model="form.lastName" id="last-name" label="Фамилия" />
                                    <BaseInput id="surname" label="Отчество" />
                                    <BaseInput v-model="form.email" id="email" type="email" label="Email" />
                                    <BaseInput v-model="form.phone" id="phone" type="tel" label="Телефон" />
                                </div>

                                <div class="form-btn-wrapper">
                                    <BaseButton type="button" @click="saveProfile">Сохранить</BaseButton>
                                    <BaseButton variant="outline" type="button">Отменить</BaseButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeTab === 'security'">
                    <div class="card">
                        <div class="card-content">
                            <form>
                                <div class="form-wrapper">
                                    <BaseInput id="user-password" v-model="currentPassword" label="Текущий пароль"
                                        type="password" autocomplete="new-password" />
                                    <BaseInput id="new-password" v-model="newPassword" label="Новый пароль"
                                        type="password" autocomplete="new-password" />
                                    <BaseInput id="confirm-password" v-model="confirmPassword"
                                        label="Подтверждение пароля" type="password" autocomplete="new-password" />
                                </div>

                                <div class="form-btn-wrapper">
                                    <BaseButton>Сохранить</BaseButton>
                                    <BaseButton variant="outline">Отменить</BaseButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </template>
        </BaseTabs>

        <!-- Tabs header -->
        <!-- <div class="tabs-list">
            <button class="tabs-trigger" :class="{ active: activeTab === 'account' }" @click="activeTab = 'account'">
                Аккаунт
            </button>
            <button class="tabs-trigger" :class="{ active: activeTab === 'security' }" @click="activeTab = 'security'">
                Безопасность
            </button>
        </div> -->

        <!-- Account tab -->
        <!-- <div v-if="activeTab === 'account'" class="tab-content">
            <div class="card">
                <div class="card-header">
                    <div class="image-wrapper">
                        <img :src="profileImage" alt="image">
                    </div>

                    <div class="image-setting-wrapper">
                        <div class="change-image-wrapper">
                            <input type="file" accept="image/*" ref="fileInput" @change="onFileChange"
                                style="display: none" />

                            <BaseButton type="button" @click.stop="selectImage">Загрузите новое фото</BaseButton>
                            <BaseButton type="button" variant="secondary" @click="resetImage">Сбросить</BaseButton>
                        </div>
                        <p class="format-content">Допускаются JPG, GIF или PNG.</p>
                    </div>
                </div>

                <div class="card-content">
                    <form>
                        <div class="form-wrapper">
                            <BaseInput id="login" label="Логин" autocomplete="username" />
                            <BaseInput id="first-name" label="Имя" autocomplete="given-name" />
                            <BaseInput id="last-name" label="Фамилия" autocomplete="family-name" />
                            <BaseInput id="surname" label="Отчество" autocomplete="additional-name" />
                            <BaseInput id="email" type="email" label="Email" autocomplete="email" />
                            <BaseInput id="phone" type="tel" label="Номер телефона" autocomplete="tel" />
                        </div>

                        <div class="form-btn-wrapper">
                            <BaseButton>Сохранить</BaseButton>
                            <BaseButton variant="outline">Отменить</BaseButton>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->

        <!-- Security tab -->
        <!-- <div v-if="activeTab === 'security'" class="tab-content">
            <div class="card">
                <div class="card-content">
                    <form>
                        <div class="form-wrapper">
                            <BaseInput id="user-password" label="Текущий пароль" type="password"
                                placeholder="Введите пароль" v-model="currentPassword" autocomplete="new-password" />
                            <BaseInput id="new-password" label="Новый пароль" type="password"
                                placeholder="Введите пароль" v-model="newPassword" autocomplete="new-password" />
                            <BaseInput id="confirm-password" label="Подтвердите пароль" type="password"
                                placeholder="Введите пароль" v-model="confirmPassword" autocomplete="new-password" />
                        </div>

                        <div class="form-btn-wrapper">
                            <BaseButton>Сохранить</BaseButton>
                            <BaseButton variant="outline">Отменить</BaseButton>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped></style>