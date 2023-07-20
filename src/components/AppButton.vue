<template>
  <button>{{ title }}</button>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
  button {
    border-radius: 6px;
    font-size: 18px;
    padding: 12px 8px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    background-color: var(--vt-c-green-medium-light);
    color: var(--vt-c-white-soft);
  }


  button:hover {
      background-color: var(--vt-c-green-light);
      color: var(--vt-c-black);
    }
</style>