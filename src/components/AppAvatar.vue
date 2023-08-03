<template>
  <img :src="`${url}/${path}`" style="styles"/>
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue';
import AppIconButton from './AppIconButton.vue';
import { ref } from 'vue';

defineProps<{
  path: string
  styles?: any
}>()

const url = ref(import.meta.env.VITE_BASE_URL)

</script>

<style scoped>
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
    background-color: var(--vt-c-white-back);
  }
</style>