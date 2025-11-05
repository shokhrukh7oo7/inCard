<template>
  <div class="avatar-menu">
    <img src="../assets/images/sidebar/user.png" class="avatar" @click="toggleMenu" alt="User" />

    <div v-if="menuOpen" class="dropdown">
      <RouterLink to="/profile" class="dropdown-item">Profile</RouterLink>
      <!-- <a href="#">Profile</a> -->
      <button @click="logout" class="dropdown-item">Logout</button>
      <!-- 
        url:http://localhost:8080/api/auth/logout

        body берилмайди.
        authorization берилади.
        Bearer {{ Token }} худди шу малумот header ичида берилади.
        header номи authorization булади.
      -->
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
const BASEURL = 'http://localhost:8080'

const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASEURL}/api/auth/get-me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (data.success) {
      const loginResponse = await fetch(`${BASEURL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      const loginResponseData = await loginResponse.json()
      if (loginResponseData.success) {
        // Сохраняем токены в localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
      }
      router.push({ name: 'MainLogin' })
    } else {
      console.log('test');
    }
  } catch (err) {
    err.value = 'Ошибка'
  }
}


</script>

<style scoped></style>
