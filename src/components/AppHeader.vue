<template>
  <header>
    <i>
      <IconMenuVue />
    </i>
  </header>
</template>

<script setup lang="ts">
import IconMenuVue from '@/components/icons/IconMenu.vue';

defineProps<{
  title?: string
}>()
</script>

<style scoped>
  header {
    padding: 16px 32px;
    background-color: var(--vt-c-white-back);
  }

  i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
  }
</style>