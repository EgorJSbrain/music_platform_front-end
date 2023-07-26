<template>
  <div class="panel"><Button title="Add track" :click="toggleModalVisible"><IconMenu /></Button></div>
  <div>!!!</div>
  <Modal title="Add track" :closeModal="toggleModalVisible" :is-visible="isModalVisible">123</Modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/AppButton.vue'
  import IconMenu from '@/components/icons/IconMenu.vue';
  import Modal from '@/components/AppModal.vue'

  const isModalVisible = ref(false)

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

</script>

<style>
.panel {
  display: flex;
  justify-content: end;
}
</style>
