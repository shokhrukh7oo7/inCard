<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

// Добавляем состояния для паролей
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const activeTab = ref('account')
</script>

<template>
    <div class="tabs-demo">
        <!-- Tabs header -->
        <div class="tabs-list">
            <button class="tabs-trigger" :class="{ active: activeTab === 'account' }" @click="activeTab = 'account'">
                Аккаунт
            </button>
            <button class="tabs-trigger" :class="{ active: activeTab === 'security' }" @click="activeTab = 'security'">
                Безопасность
            </button>
        </div>

        <!-- Account tab -->
        <div v-if="activeTab === 'account'" class="tab-content">
            <div class="card">
                <div class="card-header">
                    <div class="image-wrapper">
                        <img src="../assets/images/sidebar/user.png" alt="image">
                    </div>

                    <div class="image-setting-wrapper">
                        <div class="change-image-wrapper">
                            <BaseButton>Загрузите новое фото</BaseButton>
                            <BaseButton variant="secondary">Сбросить</BaseButton>
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
        </div>

        <!-- Security tab -->
        <div v-if="activeTab === 'security'" class="tab-content">
            <div class="card">
                <div class="card-content">
                    <form>
                        <div class="form-wrapper">
                            <BaseInput id="user-password" label="Текущий пароль" type="password"
                                placeholder="Введите пароль" v-model="currentPassword" />
                            <BaseInput id="new-password" label="Новый пароль" type="password"
                                placeholder="Введите пароль" v-model="newPassword" />
                            <BaseInput id="confirm-password" label="Подтвердите пароль" type="password"
                                placeholder="Введите пароль" v-model="confirmPassword" />
                        </div>

                        <div class="form-btn-wrapper">
                            <BaseButton>Сохранить</BaseButton>
                            <BaseButton variant="outline">Отменить</BaseButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>