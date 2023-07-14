<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
import PublicLayout from '../components/layouts/PublicLayout.vue'
import { ref } from 'vue';
import { registartion } from '@/services/api';
import AppButton from '@/components/AppButton.vue';

const form = ref({
  email: '',
  firstName: '',
  lastName: '',
  passwrod: '',
})

const submitForm = async () => {
  const formData = {
    email: form.value.email,
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    passwrod: form.value.passwrod,
  }

  const response = await registartion(formData)
}

</script>
<template>
  <PublicLayout :submitForm="submitForm" title="Registration">
    <AppInput v-model="form.email" type="email" placeholder="Email"/>
    <AppInput v-model="form.firstName" type="text" placeholder="First name"/>
    <AppInput v-model="form.lastName" type="text" placeholder="Last name"/>
    <AppInput v-model="form.passwrod" type="password" placeholder="Password"/>
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