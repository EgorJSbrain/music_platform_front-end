<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>