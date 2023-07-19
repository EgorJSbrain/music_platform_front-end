<template>
  <nav>Sidebar</nav>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
  nav {
    padding: 0 16px;
    height: calc(100vh - 64px);
    width: 240px;
    background-color: var(--vt-c-white-back);
  }
</style>