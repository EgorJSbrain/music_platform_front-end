<template>
  <div class="track">
    <div class="track-info">
      <Avatar :path="track.picture"/>
      <div class="track-name">{{ track.name }}</div>
    </div>
    <IconButton :click="handleTrackPlay">
      <IconPlay v-if="!isPlayed" />
      <IconPause v-if="isPlayed" />
    </IconButton>
  </div>
</template>

<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue';
import IconPause from '@/components/icons/IconPause.vue';
import Avatar from '@/components/AppAvatar.vue';
import IconButton from '@/components/AppIconButton.vue';
import type { ITrack } from '@/types/track';

const props = defineProps<{
  track: ITrack
  isPlayed: boolean
  setCurrentTrack: (track: ITrack) => void
}>()

const handleTrackPlay = () => {
  props.setCurrentTrack(props.track)
}

</script>
<style scoped>
  .track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid var(--vt-c-gray);
    cursor: pointer;
  }

  .track-info {
    display: flex;
    align-items: center;
  }

  .track:hover {
    background-color: var(--vt-c-green-gray-light);
  }

  .track-name {
    padding: 8px;
    font-weight: 500;
  }

</style>