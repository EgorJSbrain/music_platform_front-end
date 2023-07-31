<template>
  <div class="input-file">
    <label class="input-label">
      <div class="input-interective">
        <IconUpload />
        {{ title }}
      </div>
      <input :accept="accept" hidden type="file" @change="onFileChange" ref="fileInput" />
      <img v-if="imageLink && type === UploadFileType.image" :src="imageLink ?? ''" alt="logo"/>
    </label>

    <p v-if="file?.name" class="file-name">{{ file?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import IconUpload from '@/components/icons/IconUpload.vue';
import { UploadFileType } from '@/constants/global';

const props = defineProps<{
  title: string
  accept: string
  type: UploadFileType
  uploadFile: (file: File) => void
}>()

const file = ref<File | null>(null)
const imageLink = computed(() => {
  if (file.value) {
    return URL.createObjectURL(file.value)
  } else {
    return null
  }
})

const onFileChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.files) {
    file.value = inputElement.files[0]
    props.uploadFile(file.value)
  }
}
</script>

<style scoped>
  .input-file {
    height: 180px;
    width: 226px;
    border-radius: 12px;
    background-color: var(--vt-c-white-back);
  }

  .input-file:hover .input-interective {
    background-color: #0e0e0e30;
  }
  .input-file:hover img {
    opacity: .6;
  }
  .input-label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
  }

  .input-label svg {
    width: 40px;
    height: 40px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .input-interective {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }

  .file-name {
    padding: 8px 12px;
    font-weight: 600;
    max-width: 220px;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>