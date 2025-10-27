<template>
  <select v-model="lang" @change="setLang" class="lang-select">
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="uz">UZ</option>
  </select>
</template>

<script setup>
import { ref } from 'vue'

const lang = ref(localStorage.getItem('lang') || 'en')

const setLang = () => {
  localStorage.setItem('lang', lang.value)
  window.location.reload()
}
</script>

<style scoped>
.lang-select {
  border: none;
  background: transparent;
  font-weight: 500;
  cursor: pointer;
  color: var(--text);
}
</style>
