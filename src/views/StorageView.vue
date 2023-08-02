<template>
  <div class="panel"><Button :variant="ButtonVariants.contained" title="Add track" :click="toggleModalVisible">
      <IconMenu />
    </Button></div>
  <div>
    <div v-for="item in tracks.myTracks" :key="item._id">
      <TrackItem :track="item" />
    </div>
  </div>

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
  import TrackItem from '@/components/AppTrackItem.vue'

  const isModalVisible = ref(false)
  const tracks = useTracksStore()

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

  onMounted(() => {
    tracks.getMyTracksByUserId()
  })

</script>

<style>
  .panel {
    display: flex;
    justify-content: end;
  }
</style>
