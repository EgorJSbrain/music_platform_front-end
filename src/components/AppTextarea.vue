<template>
  <textarea
    v-model="value"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
  textarea {
    width: 100%;
    max-width: 472px;
    min-width: 472px;
    max-height: 76px;
    min-height: 76px;
    border-radius: 6px;
    font-size: 18px;
    padding: 12px 8px;
    border: 1px solid var(--vt-c-green-medium-light);
    font-family: Arial;
  }
  :focus {
    outline: none !important;
    border: 1px solid var(--vt-c-green-light);
  }
</style>