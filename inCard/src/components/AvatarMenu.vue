<template>
  <div class="avatar-menu">
    <img
      src="https://i.pravatar.cc/40"
      class="avatar"
      @click="toggleMenu"
      alt="User"
    />
    <div v-if="menuOpen" class="dropdown">
      <a href="#">Profile</a>
      <a href="#">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
</script>

<style scoped>
.avatar-menu {
  position: relative;
}

.avatar {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  right: 0;
  top: 45px;
  background: var(--header-bg);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dropdown a {
  padding: 0.75rem 1rem;
  color: var(--text);
  text-decoration: none;
}

.dropdown a:hover {
  background: var(--hover-bg);
}
</style>
