<template>
  <div class="layout">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <form @submit.prevent="submitForm" class="form-wrapper"><slot></slot></form>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  submitForm?: () => void
}>()
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  max-width: 480px;
  width: 100%;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 32px;
  font-weight: 500;
  user-select: none;
}

.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>