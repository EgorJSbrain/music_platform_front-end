<script setup lang="ts">
import { ROUTES } from '@/constants/global'
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import PublicLayout from '../components/layouts/PublicLayout.vue'

</script>
<template>
  <PublicLayout
    title="Login"
    :linkPath="ROUTES.registration"
    :linkLabel="'Do you want to registarte?'"
  >
    <AppInput placeholder="Email" />
    <AppInput placeholder="Password" />
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