<template>
  <div class="layout">
    <AppHeader :toggleMenu="toggleMenu" />

    <div class="content-wrapper">
      <AppSidebar :isOpen="isOpen" />

      <main class="content">
        <h1>{{ router.currentRoute.value.meta.pageTitle }}</h1>
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';

defineProps<{
  title?: string
}>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
}

.content-wrapper {
  width: 100%;
  display: flex;
}

.content {
  padding: 20px;
  width: 100%;
  border-radius: 24px;
  background-color: var(--vt-c-white-soft);
}

h1 {
  margin-bottom: 32px;
  font-weight: 500;
  user-select: none;
}
</style>