<template>
  <header>
    <AppIconButton :click="toggleMenu">
      <IconMenu />
    </AppIconButton>
  </header>
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue';
import AppIconButton from './AppIconButton.vue';

defineProps<{
  title?: string
  toggleMenu: () => void
}>()
</script>

<style scoped>
  header {
    padding: 8px 32px;
    background-color: var(--vt-c-white-back);
  }
</style>