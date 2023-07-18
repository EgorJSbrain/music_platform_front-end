<script setup lang="ts">
import { ROUTES } from '@/constants/global'
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import PublicLayout from '../components/layouts/PublicLayout.vue'
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

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
<template>
  <PublicLayout
    title="Login"
    :linkPath="ROUTES.registration"
    :linkLabel="'Do you want to registarte?'"
    :submitForm="submitForm"
  >
    <AppInput v-model="form.email" type="email" placeholder="Email" />
    <AppInput v-model="form.password" type="password" placeholder="Password" />
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