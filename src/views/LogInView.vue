<template>
  <PublicLayout
    title="Login"
    :linkPath="ROUTES.registration"
    :linkLabel="'Do you want to registarte?'"
    :submitForm="submitForm"
  >
    <Input v-model="form.email" type="email" placeholder="Email" />
    <Input v-model="form.password" type="password" placeholder="Password" />
    <Button :variant="ButtonVariants.contained" title="Submit" />
  </PublicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { ROUTES, ButtonVariants } from '@/constants/global'
import { useAuthStore } from '@/stores/auth';

import Input from '@/components/AppInput.vue';
import Button from '@/components/AppButton.vue';
import PublicLayout from '@/components/layouts/PublicLayout.vue'

const { login } = useAuthStore()

const form = ref({
  email: '',
  password: '',
})

const submitForm = async () => {
  const formData = {
    email: form.value.email,
    password: form.value.password,
  }

  await login(formData)
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>