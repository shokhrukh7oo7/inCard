<template>
  <header class="header">
    <button class="burger" @click="$emit('toggle-sidebar')">
      <img v-if="!isSidebarOpen" src="../assets/images/sidebar/burger-dark.svg" class="burger-icon" alt="burger icon" />
      <img v-else src="../assets/images/sidebar/close.svg" class="burger-icon" alt="close icon" />
    </button>

    <div class="right">
      <ThemeToggle />
      <!-- <LanguageSwitcher /> -->
      <AvatarMenu />
    </div>
  </header>
</template>

<script setup>
import '../assets/css/main.css'

import ThemeToggle from './ThemeToggle.vue'
// import LanguageSwitcher from './LanguageSwitcher.vue'
import AvatarMenu from './AvatarMenu.vue'

defineProps({
  isSidebarOpen: Boolean,
})
defineEmits(['toggle-sidebar'])
</script>

<style scoped></style>
