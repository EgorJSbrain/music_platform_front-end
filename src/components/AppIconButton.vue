<template>
  <button @click="click"><slot></slot></button>
</template>

<script setup lang="ts">
defineProps<{
  click: () => void
}>()
</script>

<style scoped>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 42px;
    padding: 8px 9px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 24px;
  }

  button:hover {
    background-color: var(--vt-c-green-light-opacity);
  }
</style>