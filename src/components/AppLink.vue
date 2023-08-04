<template>
  <a :href="path" rel="noopener">{{ label }}</a>
</template>

<script setup lang="ts">
defineProps<{
  path: string,
  label : string
}>()
</script>

<style scoped>
  a {
    color: var(--vt-c-green-medium-light);
    text-decoration: none;
  }
</style>
