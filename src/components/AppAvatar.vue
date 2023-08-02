<template>
  <img src="path" style="styles"/>
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue';
import AppIconButton from './AppIconButton.vue';

defineProps<{
  path: string
  styles: any
}>()
</script>

<style scoped>
  div {
    padding: 8px 16px;
    background-color: var(--vt-c-white-back);
  }
</style>