<template>
  <div class="avatar-menu">
    <img src="../assets/images/sidebar/user.png" class="avatar" @click="toggleMenu" alt="User" />

    <div v-if="menuOpen" class="dropdown">
      <RouterLink to="/profile" class="dropdown-item">Profile</RouterLink>
      <!-- <a href="#">Profile</a> -->
      <button @click="logout" class="dropdown-item">Logout</button>
      <!-- <a href="#">Logout</a> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter();
const menuOpen = ref(false)

const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const logout = () => {
  // Очистка данных, токенов и т.д.
  router.push('/login')
}
</script>

<style scoped></style>
