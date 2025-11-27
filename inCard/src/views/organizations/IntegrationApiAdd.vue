<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';


const isActive = ref(true);
const form = ref({
    login: '',
    organization: '',
    intPassword: '',
    lenghtPassword: 24,
})

/* Генерация пароля */
function generatePassword() {
    const length = Number(form.value.lenghtPassword)

    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+='

    let pass = ''
    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    form.value.intPassword = pass
}

/* Если пользователь двигает range → обновляем password */
// watch(
//     () => form.value.lenghtPassword,
//     (val) => {
//         form.value.password = '*'.repeat(Number(val))
//     }
// )
</script>

<template>
    <div class="int-api-add-wrapper">
        <div class="int-add-wrapper">
            <div class="int-add-header">
                <h5>Добавить</h5>
            </div>
            <div class="int-add-body">
                <form>
                    <div class="int-form-wrapper">
                        <BaseInput v-model="form.login" id="login" label="Логин" />
                        <BaseInput v-model="form.organization" id="organization" label="Организация" />
                        <BaseInput v-model="form.intPassword" id="password" label="Пароль" type="password"
                            autocomplete="new-password" @generate="generatePassword" />
                        <!-- RANGE -->
                        <div class="range-wrapper">
                            <div class="range-top">
                                Длина пароля:
                                <strong>{{ form.lenghtPassword }}</strong>
                            </div>

                            <input type="range" min="24" max="36" v-model="form.lenghtPassword">
                        </div>
                    </div>
                    <div class="int-add-checkbox">
                        <BaseInput class="checkbox-box" v-model="isActive" type="checkbox" label="Активность" />
                    </div>


                    <div class="int-add-actions">
                        <BaseButton class="cancel-btn btn">Отмена</BaseButton>
                        <BaseButton class="save-btn btn">Добавить</BaseButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>