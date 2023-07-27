<template>
  <button :class="ButtonVariant[variant]" @click="click">{{ title }}</button>
</template>

<script setup lang="ts">
import { ButtonVariant, ButtonVariants } from '@/constants/global';

defineProps<{
  title: string
  variant: ButtonVariants
  click: () => void
}>()

</script>

<style scoped>
  button {
    border-radius: 24px;
    font-size: 18px;
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 600;
    border: none;
  }

  .contained {
    background-color: var(--vt-c-green-medium-light);
    color: var(--vt-c-white-soft);
  }

  .text {
    background-color: transparent;
    color: var(--vt-c-green-medium-light);
  }

  .text:hover {
    background-color: var(--vt-c-gray-light);
    color: var(--vt-c-green-medium-light);
  }


  .contained:hover {
      background-color: var(--vt-c-green-light);
      color: var(--vt-c-black);
    }
</style>