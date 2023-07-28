<template>
  <Modal title="Add track" :closeModal="toggleModalVisible" :is-visible="isModalVisible">
    <div class="content">
      <div class="upload-wrapper">
        <UploadFile :type="UploadFileType.image" accept="image/*" :uploadFile="uploadImage" title="Upload image" />
        <UploadFile :type="UploadFileType.audio" accept="audio/*" :uploadFile="uploadTrack" title="Upload track"/>
      </div>
      <Input placeholder="Track name" />
      <Input placeholder="Author" />
      <textarea placeholder="12" />
    </div>
  </Modal>
</template>

<script setup lang="ts">
  import Modal from '@/components/AppModal.vue'
  import Input from '@/components/AppInput.vue'
  import { ButtonVariants, UploadFileType } from '@/constants/global';
  import UploadFile from '@/components/AppUploadFile.vue';

const props = defineProps<{
  title?: string
  isModalVisible: boolean
  toggleModalVisible: () => void
}>()

const uploadImage = (file: File) => {
  console.log("🚀 ~ file: StorageView.vue:28 ~ uploadImage ~ file:", file)
}

const uploadTrack = (file: File) => {
  console.log("🚀 ~ file: StorageView.vue:28 ~ uploadImage ~ track:", file)
}

const handleApply = () => {
  props.toggleModalVisible()
}

const handleClose = () => {
  props.toggleModalVisible()
}

</script>

<style scoped>
.upload-wrapper {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>