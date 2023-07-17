<script setup lang="ts">
import { ref } from 'vue';
import { registartion } from '@/services/requests';

import { ROUTES } from '@/constants/global'

import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import PublicLayout from '@/components/layouts/PublicLayout.vue'

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

  const response = await registartion(formData)
  console.log("🚀 ~ file: RegistrationView.vue:27 ~ submitForm ~ response:", response)
}

</script>
<template>
    <PublicLayout
      title="Registration"
      :linkPath="ROUTES.login"
      :linkLabel="'Do you have an account?'"
      :submitForm="submitForm"
    >
    <AppInput v-model="form.email" type="email" placeholder="Email"/>
    <AppInput v-model="form.firstName" type="text" placeholder="First name"/>
    <AppInput v-model="form.lastName" type="text" placeholder="Last name"/>
    <AppInput v-model="form.password" type="password" placeholder="Password"/>
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
</style>@/constants