<template>
  <header>
    <AppIconButton :click="toggleMenu">
      <IconMenu />
    </AppIconButton>

    <Player />
  </header>
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue';
import Player from '@/components/AppPlayer.vue';
import AppIconButton from './AppIconButton.vue';

defineProps<{
  title?: string
  toggleMenu: () => void
}>()
</script>

<style scoped>
  header {
    display: flex;
    padding: 8px 16px;
    background-color: var(--vt-c-white-back);
  }
</style>