<template>
  <input
    type="text"
    class="form-contol"
  />
</template>

<script lang="ts">
export default {
  props: {
    type: { type: String, default: 'text' },
  },
}
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
    border: 1px solid var(--vt-c-green-ligth);
  }
</style>