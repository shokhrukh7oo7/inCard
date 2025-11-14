<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Фильтр',
    },
    fields: {
        type: Array,
        required: true,
        // Пример:
        // [
        //   { type: 'input', model: 'pinfl', props: { id: 'pinfl', placeholder: 'ПИНФЛ' } },
        //   { type: 'select', model: 'company', props: { options: companies, placeholder: 'Выберите компанию' } },
        // ]
    },
    defaultOpen: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['search'])

const formData = reactive({})

// автоматическое создание ключей из models
props.fields.forEach(f => {
    formData[f.model] = ''
})

// выбор компонента по типу
const resolveComponent = type => {
    switch (type) {
        case 'input':
            return BaseInput
        case 'select':
            return BaseSelect
        default:
            return BaseInput
    }
}

// при нажатии "Поиск"
const emitSearch = () => {
    emit('search', { ...formData })
}
</script>

<template>
    <div class="filter-wrapper">
        <div class="accordion" id="accordionFilter">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <!-- <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                        {{ title }}
                    </button> -->
                    <button class="accordion-button" :class="{ collapsed: !defaultOpen }" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseFilter" :aria-expanded="defaultOpen"
                        aria-controls="collapseFilter">
                        {{ title }}
                    </button>
                </h2>

                <!-- <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#accordionFilter"> -->
                <div id="collapseFilter" class="accordion-collapse collapse" :class="{ show: defaultOpen }"
                    data-bs-parent="#accordionFilter">
                    <div class="accordion-body">
                        <form @submit.prevent="emitSearch">
                            <component v-for="(field, index) in fields" :key="index" :is="resolveComponent(field.type)"
                                v-model="formData[field.model]" v-bind="field.props" />
                            <BaseButton type="submit">Поиск</BaseButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
