<template>
    <PublicLayout
      title="Registration"
      :linkPath="ROUTES.login"
      :linkLabel="'Do you have an account?'"
      :submitForm="submitForm"
    >
    <Input v-model="form.email" type="email" placeholder="Email"/>
    <Input v-model="form.firstName" type="text" placeholder="First name"/>
    <Input v-model="form.lastName" type="text" placeholder="Last name"/>
    <Input v-model="form.password" type="password" placeholder="Password"/>
    <Button :variant="ButtonVariants.contained" title="Submit" />
  </PublicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '@/stores/auth';
import { ROUTES, ButtonVariants } from '@/constants/global'

import Input from '@/components/AppInput.vue';
import Button from '@/components/AppButton.vue';
import PublicLayout from '@/components/layouts/PublicLayout.vue'

const { registartion } = useAuthStore()

const form = ref({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
})

const submitForm = async () => {
  const formData = {
    email: form.value.email,
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    password: form.value.password,
  }

  await registartion(formData)
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
</style>@/constants