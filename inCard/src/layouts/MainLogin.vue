<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

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
                    <BaseInput id="confirm-password" label="Логин" type="text" />
                    <BaseInput id="currentPassword" label="Пароль" type="password" />
                    <BaseButton type="submit">Войти</BaseButton>
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

@media (max-width: 576px) {
    .login-wrapper .login-container {
        padding: 50px 25px;
    }
}
</style>