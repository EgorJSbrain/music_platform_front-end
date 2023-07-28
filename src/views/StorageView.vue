<template>
  <div class="panel"><Button :variant="ButtonVariants.contained" title="Add track" :click="toggleModalVisible">
      <IconMenu />
    </Button></div>
  <div>!!!</div>

  <TrackModal
    :toggleModalVisible="toggleModalVisible"
    :isModalVisible="isModalVisible"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/AppButton.vue'
  import IconMenu from '@/components/icons/IconMenu.vue';
  import TrackModal from '@/components/modals/AppTrackModal.vue'
  import { ButtonVariants, UploadFileType } from '@/constants/global';
  import AppUploadFile from '@/components/AppUploadFile.vue';

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
