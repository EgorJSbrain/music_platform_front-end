<template>
  <input
    type="text"
    class="form-contol"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

// defineProps<{
//   value: string
//   placeholder: string
// }>()

// defineProps(['modelValue'])
// defineEmits(['update:modelValue'])

// const handleInput = (event: Event) => {
//   return $emit('update:modelValue', event.target.value)
// }

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