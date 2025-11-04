<script setup>
defineProps({
    columns: {
        type: Array,
        required: true,
        // пример: [{ key: 'name', label: 'Имя' }, { key: 'age', label: 'Возраст' }]
    },
    data: {
        type: Array,
        required: true,
    },
})

// const selectedOption = ref('')
</script>

<template>
    <div class="base-table">
        <table>
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="row.id || rowIndex">
                    <td v-for="col in columns" :key="col.key" :data-label="col.label">
                        <!-- если для этой колонки есть слот -->
                        <slot v-if="$slots[col.key]" :name="col.key" :row="row" :value="row[col.key]"
                            :index="rowIndex" />
                        <!-- иначе просто значение -->
                        <template v-else>
                            {{ row[col.key] }}
                        </template>
                    </td>
                </tr>

                <tr v-if="!data.length">
                    <td :colspan="columns.length" class="no-data">
                        Нет данных для отображения
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
