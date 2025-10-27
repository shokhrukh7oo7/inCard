<template>
  <div class="layout">
    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Main area -->
    <div class="main">
      <Header :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
      <main class="content">
        <router-view />
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from '@/components/MainSidebar.vue'
import Header from '@/components/MainHeader.vue'

const isSidebarOpen = ref(window.innerWidth >= 1200)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleResize = () => {
  isSidebarOpen.value = window.innerWidth >= 1200
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: var(--bg);
  transition: background 0.3s ease;
}
</style>
