<template>
  <div class="panel"><Button :variant="ButtonVariants.contained" title="Add track" :click="toggleModalVisible"><IconMenu /></Button></div>
  <div>!!!</div>

  <Modal title="Add track" :closeModal="toggleModalVisible" :is-visible="isModalVisible">
    <div class="upload-wrapper">
      <AppUploadFile accept="image/*" :uploadFile="uploadImage" title="Upload image" />
      <AppUploadFile accept="audio/*" :uploadFile="uploadTrack" title="Upload track"/>
    </div>
  </Modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/AppButton.vue'
  import IconMenu from '@/components/icons/IconMenu.vue';
  import Modal from '@/components/AppModal.vue'
  import { ButtonVariants } from '@/constants/global';
  import AppUploadFile from '@/components/AppUploadFile.vue';

  const isModalVisible = ref(false)

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

  const uploadImage = (file: File) => {
    console.log("🚀 ~ file: StorageView.vue:28 ~ uploadImage ~ file:", file)
  }

  const uploadTrack = (file: File) => {
    console.log("🚀 ~ file: StorageView.vue:28 ~ uploadImage ~ track:", file)
  }

</script>

<style>
  .panel {
    display: flex;
    justify-content: end;
  }

  .upload-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
