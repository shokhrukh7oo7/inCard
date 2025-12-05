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
                        <img class="warning-image" src="../assets/images/warning.svg" alt="image">
                        Нет данных для отображения
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<!-- <script setup>
const props = defineProps({
    columns: Array,
    data: Array
})

const hasGroups = props.columns.some(col => col.children)

function flattenColumns(cols) {
    return cols.flatMap(col =>
        col.children ? flattenColumns(col.children) : col
    )
}
</script>

<template>
    <div class="base-table">
        <table>
            <thead v-if="!hasGroups">
                <tr>
                    <th v-for="col in columns" :key="col.key">
                        {{ col.label }}
                    </th>
                </tr>
            </thead>
            <thead v-else>
                <tr>
                    <th v-for="col in columns" :key="col.label" :colspan="col.children ? col.children.length : 1"
                        :rowspan="col.children ? 1 : 2" class="group-header">
                        {{ col.label }}
                    </th>
                </tr>
                <tr>
                    <template v-for="col in columns">
                        <th v-for="child in (col.children || [])" :key="child.key" class="sub-header">
                            {{ child.label }}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="row.id || rowIndex">
                    <td v-for="col in (hasGroups ? flattenColumns(columns) : columns)" :key="col.key"
                        :data-label="col.label">
                        <slot v-if="$slots[col.key]" :name="col.key" :row="row" :value="row[col.key]"
                            :index="rowIndex" />
                        <template v-else>
                            {{ row[col.key] }}
                        </template>
                    </td>
                </tr>

                <tr v-if="!data.length">
                    <td :colspan="hasGroups ? flattenColumns(columns).length : columns.length" class="no-data">
                        <img class="warning-image" src="../assets/images/warning.svg" alt="image">
                        Нет данных для отображения
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.group-header {
    text-align: center;
    background: #f6f7f9;
    font-weight: 600;
}

.sub-header {
    background: #fafafa;
    font-weight: 500;
    text-align: center;
}
</style> -->
