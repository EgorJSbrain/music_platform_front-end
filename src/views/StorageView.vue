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
  import { onMounted, ref } from 'vue';

  import { ButtonVariants } from '@/constants/global';
  import { useTracksStore } from '@/stores/tracks'
  import Button from '@/components/AppButton.vue'
  import IconMenu from '@/components/icons/IconMenu.vue';
  import TrackModal from '@/components/modals/AppTrackModal.vue'

  const isModalVisible = ref(false)

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

  const { getMyTracksByUserId } = useTracksStore()

  onMounted(async () => {
    const tracks = await getMyTracksByUserId()
  })

</script>

<style>
  .panel {
    display: flex;
    justify-content: end;
  }
</style>
