<template>
    <div class="base-input-wrapper">
        <label v-if="label" :for="id" class="base-label">{{ label }}</label>

        <div class="input-wrapper">
            <input :id="id" :type="showPassword ? 'text' : type" :placeholder="placeholder" class="base-input"
                :autocomplete="resolvedAutocomplete" :value="type === 'checkbox' ? null : model"
                :checked="type === 'checkbox' ? model : null" :disabled="disabled" @input="updateValue" />

            <!-- иконка для типа password -->
            <button v-if="type === 'password'" type="button" class="toggle-password" @click="togglePassword">
                <img v-if="showPassword" src="../assets/images/input/eye-open.svg" alt="Hide password" />
                <img v-else src="../assets/images/input/eye-close.svg" alt="Show password" />
            </button>
        </div>
    </div>
</template>

<script setup>

import { ref, watch, computed } from "vue"

const model = defineModel();

const props = defineProps({
    id: String,
    name: String,
    label: String,
    type: {
        type: String,
        default: "text",
    },
    placeholder: String,
    // modelValue: String,
    autocomplete: String,
    disabled: {
        type: Boolean,
        default: false,
    },
})

function updateValue(event) {
    // model.value = event.target.value;
    if (props.type === "checkbox") {
        model.value = event.target.checked;
    } else {
        model.value = event.target.value;
    }
}


const emit = defineEmits(["update:modelValue"])
// const model = ref(props.modelValue)
const showPassword = ref(false)

watch(model, (val) => emit("update:modelValue", val))

// переключатель отображения пароля
const togglePassword = () => {
    showPassword.value = !showPassword.value
}

// если пользователь не передал autocomplete — ставим дефолт в зависимости от типа
const resolvedAutocomplete = computed(() => {
    if (props.autocomplete) return props.autocomplete
    if (props.type === "password") return "current-password"
    if (props.type === "email") return "email"
    if (props.type === "tel") return "tel"
    return "off"
})
</script>

<style scoped>
.base-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.base-label {
    font-size: 14px;
    color: var(--grey);
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.base-input {
    width: 100%;
    padding: 10px 40px 10px 12px;
    border: 1px solid var(--hover-bg-link);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s ease;
}

.base-input:focus {
    border-color: var(--blue);
}

/* кнопка иконки */
.toggle-password {
    position: absolute;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
}

.toggle-password img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.toggle-password:hover img {
    opacity: 1;
}
</style>
