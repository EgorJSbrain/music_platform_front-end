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
        :isPlayed="item._id === currentTrack?._id && isPlayed"
      />
    </div>

  <TrackModal
    :isModalVisible="isModalVisible"
    :toggleModalVisible="toggleModalVisible"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';

  import { ButtonVariants } from '@/constants/global';
  import { useTracksStore } from '@/stores/tracks'
  import { usePlayerStore } from '@/stores/player'

  import Button from '@/components/AppButton.vue'
  import IconMenu from '@/components/icons/IconMenu.vue';
  import TrackModal from '@/components/modals/AppTrackModal.vue'
  import TrackItem from '@/components/AppTrackItem.vue'
  import type { ITrack } from '@/types/track';

  const tracks = useTracksStore()
  const player = usePlayerStore()

  const isModalVisible = ref(false)

  const currentTrack = computed(() => player.currentTrack)
  const isPlayed = computed(() => player.isPlayed)

  const toggleModalVisible = () => {
    isModalVisible.value = !isModalVisible.value
  }

  const setCurrentTrack = (track: ITrack) => {
    player.setCurrentTrack(track)
  }

  onMounted(() => {
    tracks.getMyTracks()
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
