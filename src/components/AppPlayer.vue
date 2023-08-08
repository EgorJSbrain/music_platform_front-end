<template>
  <div class="player" v-if="player.currentTrack">
    <!-- <div class="info"> -->
      <div class="treck-name">{{ player.currentTrack?.name }}</div>
      <input ref="audio" v-model="inputValue" type="range">
      <p>{{ dayjs(new Date(inputValue * 1000)).format('mm:ss') }} / {{ dayjs(new Date(duration * 1000)).format('mm:ss') }}</p>
      <p>Value: {{ inputValue }}</p>
    <!-- </div> -->
    <audio
      :onloadedmetadata="handleOnLoadMetadata"
      :timeupdate="handleTimeChange"
      v-on:timeupdate="handleTimeChange"
      ref="audio"
      autoplay
      :min="0"
      :max="duration"
      :src="`${url}/${player.currentTrack?.audio}`"
    />

    <IconButton class="play-button" :click="togglePlayTreck">
      <IconPlay v-if="!player.isPlayed" />
      <IconPause v-if="player.isPlayed" />
    </IconButton>
</div></template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';

  import { usePlayerStore } from '@/stores/player'
  import dayjs from 'dayjs'

  import IconButton from '@/components/AppIconButton.vue';
  import IconPlay from '@/components/icons/IconPlay.vue';
  import IconPause from '@/components/icons/IconPause.vue';

  const url = ref(import.meta.env.VITE_BASE_URL)
  const audio = ref<HTMLAudioElement | null>(null)
  const inputValue = ref<number>(0)
  const duration = ref<number>(0)

  const player = usePlayerStore()

  const isPlayed = computed<boolean>(() => player.isPlayed);

  watch(isPlayed, () => {
    if (isPlayed.value) {
      audio.value?.play()
    } else {
      audio.value?.pause()
      console.log('---', audio.value?.currentTime)
    }
  })

  const togglePlayTreck = () => {
    player.togglePlaying()
  }

  const handleTimeChange = (payload: Event) => {
    // debugger
    const audioEl = payload.target as HTMLAudioElement
    // console.log('---', audioEl.currentTime)
    inputValue.value = Math.floor(audioEl.currentTime)
  }

  const handleOnLoadMetadata = (payload: Event) => {
    const audioEl = payload.target as HTMLAudioElement
    duration.value = audioEl.duration
  }
</script>

<style scoped>
  .player {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    border-radius: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    max-width: 132px;
    width: 132px;
  }

  .treck-name {
    /* max-width: 132px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .play-button svg {
    width: 16px;
    height: 16px;
  }
</style>