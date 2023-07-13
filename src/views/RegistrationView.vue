<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
import PublicLayout from '../components/layouts/PublicLayout.vue'
import { onMounted } from 'vue';
import { registartion } from '@/services/api';
import AppButton from '@/components/AppButton.vue';

</script>
<template>
  <PublicLayout title="Registration">
    <AppInput placeholder="Email"/>
    <AppInput placeholder="First name"/>
    <AppInput placeholder="Last name"/>
    <AppInput placeholder="Password"/>
    <AppButton title="Submit" />
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