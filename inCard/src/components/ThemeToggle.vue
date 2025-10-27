<template>
  <button @click="toggleTheme" class="theme-btn">
    <i :class="icon"></i>
  </button>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')
const icon = computed(() =>
  theme.value === 'dark' ? 'ri-sun-line' : 'ri-moon-line'
)

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
}

watchEffect(() => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})
</script>

<style scoped>
.theme-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: var(--text);
}
</style>
