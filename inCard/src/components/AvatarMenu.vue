<template>
  <div class="avatar-menu">
    <img src="../assets/images/sidebar/user.png" class="avatar" @click="toggleMenu" alt="User" />

    <div v-if="menuOpen" class="dropdown">
      <a href="#">Profile</a>
      <a href="#">Logout</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

</script>

<style scoped></style>
