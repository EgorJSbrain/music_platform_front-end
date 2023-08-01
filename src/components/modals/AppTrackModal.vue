<template>
  <Modal
    title="Add track"
    :apply="handleApply"
    :cancel="handleClose"
    :is-visible="isModalVisible"
    :height="'652px'"
  >
    <div class="content">
      <div class="upload-wrapper">
        <UploadFile :type="UploadFileType.image" accept="image/*" :uploadFile="uploadImage" title="Upload image" />
        <UploadFile :type="UploadFileType.audio" accept="audio/*" :uploadFile="uploadTrack" title="Upload track"/>
      </div>
      <Input v-model="form.name" placeholder="Name of track " />
      <Input v-model="form.artist" placeholder="Author of Track" />
      <Textarea v-model="form.text" placeholder="Text of track" />
    </div>
  </Modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { UploadFileType } from '@/constants/global';

  import { createTrack } from '@/services/requests'
  import { useAuthStore } from '@/stores/auth';

  import Modal from '@/components/AppModal.vue'
  import Input from '@/components/AppInput.vue'
  import Textarea from '@/components/AppTextarea.vue'
  import UploadFile from '@/components/AppUploadFile.vue';

  const props = defineProps<{
    title?: string
    isModalVisible: boolean
    toggleModalVisible: () => void
  }>()

  const { user } = useAuthStore()

  const imageFile = ref<File | null>(null)
  const audioFile = ref<File | null>(null)

  const form = ref({
    name: '',
    artist: '',
    text: '',
  })

  const uploadImage = (file: File) => {
    imageFile.value = file
  }

  const uploadTrack = (file: File) => {
    audioFile.value = file
  }

  const handleApply = async () => {
    const formData = new FormData()

    if (imageFile.value && audioFile.value && user) {
      formData.append('picture', imageFile.value)
      formData.append('audio', audioFile.value)

      formData.append('name', form.value.name)
      formData.append('artist', form.value.artist)
      formData.append('text', form.value.text)
      formData.append('userId', user._id)
    }

    const response = await createTrack(formData)

    if (response) {
      props.toggleModalVisible()
    }
  }

  const handleClose = () => {
    props.toggleModalVisible()
  }
</script>

<style scoped>
.upload-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>