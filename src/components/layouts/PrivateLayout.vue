<template>
  <div class="layout">
    <AppHeader :toggleMenu="toggleMenu" />

    <div class="content-wrapper">
      <AppSidebar :isOpen="isOpen" />

      <main class="content">
        <h1>{{ title }}</h1>
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import { ref } from 'vue'

defineProps<{
  title: string
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
  /* display: flex; */
}

.content-wrapper {
  width: 100%;
  display: flex;
}

.content {
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