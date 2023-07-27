<template>
  <div class="input-file">
    <label class="input-label">
      <IconUpload />
      {{ title }}
      <input :accept="accept" hidden type="file" @change="onFileChange" ref="fileInput" />
    </label>

    <p class="file-name">{{ file?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import IconUpload from '@/components/icons/IconUpload.vue';

const props = defineProps<{
  title: string
  accept: string
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

console.log("imageLink:", imageLink.value)

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

  .input-file:hover {
    background-color: var(--vt-c-green-gray);
  }
  .input-label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .input-label svg {
    width: 40px;
    height: 40px;
  }

  .file-name {
    padding: 8px 12px;
    font-weight: 600;
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>