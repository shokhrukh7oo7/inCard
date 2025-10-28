<template>
  <button @click="toggleTheme" class="theme-btn">
    <img v-if="theme === 'dark'" src="../assets/images/sidebar/sun.svg" alt="image" class="theme-icon" />
    <img v-else src="../assets/images/sidebar/moon.svg" alt="image" class="theme-icon" />
  </button>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')


const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
}

watchEffect(() => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: theme.value }))
})
</script>

<style scoped></style>
