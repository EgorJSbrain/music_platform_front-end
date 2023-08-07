<template>
  <div class="player" v-if="player.currentTrack">
    <div class="tarck-name">{{ player.currentTrack?.name }}</div>
    <input type="range">
    <audio ref="audio" autoplay :src="`${url}/${player.currentTrack?.audio}`" v-on:play="true" />

    <IconButton class="play-button" :click="togglePlayTrack">
      <IconPlay v-if="!player.isPlayed" />
      <IconPause v-if="player.isPlayed" />
    </IconButton>
</div></template>

<script setup lang="ts">
  import { usePlayerStore } from '@/stores/player'
  import IconButton from '@/components/AppIconButton.vue';
  import IconPlay from '@/components/icons/IconPlay.vue';
  import IconPause from '@/components/icons/IconPause.vue';
  import { computed, onMounted, ref, watch } from 'vue';

  const url = ref(import.meta.env.VITE_BASE_URL)
  const audio = ref<HTMLAudioElement | null>(null)

  const player = usePlayerStore()

  const isPlayed = computed<boolean>(() => player.isPlayed);

  watch(isPlayed, () => {
    if (isPlayed.value) {
      audio.value?.play()
    } else {
      audio.value?.pause()
    }
  })

  const togglePlayTrack = () => {
    player.togglePlaying()
  }

  onMounted(() => {
    audio.value?.play()
  })
</script>

<style scoped>
  .player {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    border-radius: 20px;
  }

  .tarck-name {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  }

  .play-button svg {
    width: 16px;
    height: 16px;
  }
</style>