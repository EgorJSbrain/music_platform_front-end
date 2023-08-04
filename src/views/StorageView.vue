<template>
  <div class="panel">
    <Button
      :variant="ButtonVariants.contained"
      title="Add track"
      :click="toggleModalVisible"
    >
      <IconMenu />
    </Button></div>

    <div class="tracks-list">
      <TrackItem
        v-for="item in tracks.myTracks"
        :key="item._id"
        :track="item"
        :setCurrentTrack="setCurrentTrack"
      />
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
  import type { ITrack } from '@/types/track';

  const isModalVisible = ref(false)
  const tracks = useTracksStore()

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

  const setCurrentTrack = (track: ITrack) => {
    tracks.setCurrentTrack(track)
  }

  onMounted(() => {
    tracks.getMyTracksByUserId()
  })

</script>

<style>
  .panel {
    display: flex;
    justify-content: end;
    margin-bottom: 24px;
  }

  .tracks-list {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 800px;
  }
</style>
