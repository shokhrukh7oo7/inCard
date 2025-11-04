<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'


import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

const router = useRouter();
const BASEURL = 'http://localhost:8080'

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const errors = ref({
    username: '',
    password: '',
})


async function handleLogin() {
    errorMessage.value = ''
    errors.value = { username: '', password: '' }
    if (!username.value.trim()) {
        errors.value.username = 'Введите логин'
    }
    if (password.value.length < 6) {
        errors.value.password = 'Пароль должен быть не короче 6 символов'
    }

    if (errors.value.username || errors.value.password) return

    loading.value = true

    try {
        const response = await fetch(`${BASEURL}/api/auth/system/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })

        const data = await response.json()

        if (data.success) {
            const result = data.result
            // Сохраняем токены в localStorage
            localStorage.setItem('token', result.token)
            localStorage.setItem('refreshToken', result.refreshToken)
            localStorage.setItem('user', JSON.stringify(result))

            router.push({ name: 'HomeView' })
        } else {
            const backendMessage = data.error?.message || ''
            if (backendMessage.includes('validation')) {
                errors.value.password = 'Пароль должен быть не короче 6 символов'
            } else if (backendMessage.includes('invalid username or password')) {
                errorMessage.value = 'Неверный логин или пароль'
            } else {
                errorMessage.value = 'Ошибка авторизации'
            }
        }
    } catch (err) {
        err.value = 'Ошибка'
    } finally {
        loading.value = false
    }
}

</script>

<template>
    <div class="login-wrapper">
        <div class="login-container">
            <div class="login-header">
                <img src="../assets/images/logo.svg" alt="image">
                <h3>Добро пожаловать!</h3>
            </div>

            <div class="login-form-wrapper">
                <form @submit.prevent="handleLogin">
                    <div class="input-block">
                        <BaseInput v-model="username" id="confirm-password" label="Логин" type="text" />
                        <p v-if="errors.username" class="error">{{ errors.username }}</p>
                    </div>

                    <div class="input-block">
                        <BaseInput v-model="password" id="currentPassword" label="Пароль" type="password" />
                        <p v-if="errors.password" class="error">{{ errors.password }}</p>
                    </div>
                    <BaseButton type="submit">Войти</BaseButton>
                    <p v-if="errorMessage" class="error global-error">
                        {{ errorMessage }}
                    </p>
                    <!-- 
                        войти босилганда - логин ва пароль инпутга киритилган малумотни олиб:
                        url:http://localhost:8080/api/auth/system/login га
                        body: 
                        {
                            "username": "system_admin_username",
                            "password": "password"
                        }
                        га шуни бериш керак. Бекенддан success или error келади.
                        success боса 
                        {
                            "success": true,
                            "result": {
                                "username": "system_admin_username",
                                "firstName": "System Admin",
                                "phone": "+998901234567",
                                "token": "a72059c9-c678-4ba8-b2f6-02ac4a2286e2",
                                "refreshToken": "e932fb53-6d89-446a-b461-63358d912ed3",
                                "expirySeconds": 3600,
                                "role": "system_admin",
                                "permissions": null
                            }
                        }

                        error боса
                        {
                            "success": false,
                            "error": {
                                "code": -201,
                                "message": "invalid username or password : invalid password"
                            }
                        }
                    -->
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-wrapper .login-container {
    width: 100%;
    max-width: 485px;
    padding: 50px;
    border-radius: 16px;
    box-shadow: 0 7px 9px -4px #3209ed33, 0 14px 21px 2px #3209ed24, 0 5px 26px 4px #3209ed1f;
}

.login-wrapper .login-container .login-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
}

.login-wrapper .login-container .login-header img {
    width: 220px;
}

.login-wrapper .login-container .login-header h3 {
    font-size: 20px;
    font-weight: 500;
    color: var(--black);
}

.login-wrapper .login-container .login-form-wrapper form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.login-wrapper .login-container .login-form-wrapper form button {
    font-weight: 600;
}

.error {
    color: #e53935;
    font-size: 13px;
    margin-top: 3px;
}

.global-error {
    text-align: center;
    margin-top: 10px;
}

@media (max-width: 576px) {
    .login-wrapper .login-container {
        padding: 50px 25px;
    }
}
</style>