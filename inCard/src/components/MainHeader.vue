<template>
  <header class="header">
    <button class="burger" @click="$emit('toggle-sidebar')">
      <i class="ri-menu-line"></i>
    </button>

    <div class="right">
      <ThemeToggle />
      <LanguageSwitcher />
      <AvatarMenu />
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import AvatarMenu from './AvatarMenu.vue'

defineProps({
  isSidebarOpen: Boolean,
})
defineEmits(['toggle-sidebar'])
</script>

<style scoped>
/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
} */

.burger {
  background: none;
  border: none;
  font-size: 1.6rem;
  display: none;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .burger {
    display: block;
  }
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
