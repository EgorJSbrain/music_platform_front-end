<template>
  <input
    type="text"
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
  input {
    width: 100%;
    border-radius: 6px;
    font-size: 18px;
    padding: 12px 8px;
    border: 1px solid var(--vt-c-green-medium-light);
  }
  :focus {
    outline: none !important;
    border: 1px solid var(--vt-c-green-light);
  }
</style>