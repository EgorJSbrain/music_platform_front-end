<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
import PublicLayout from '../components/layouts/PublicLayout.vue'

</script>
<template>
  <PublicLayout title="Login">
    <AppInput placeholder="djfdjff" />
  </PublicLayout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>