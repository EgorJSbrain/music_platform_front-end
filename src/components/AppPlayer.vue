<template>
  <div class="player" v-if="player.currentTrack">
    <div class="info-panel">
      <div class="info">
        <div class="treck-name">{{ player.currentTrack?.name }}</div>

        <div class="treck-time">
          <p>{{ formatSecondsToTime(inputValue) }}</p>
            /
          <p>{{ formatSecondsToTime(duration) }}</p>
        </div>
      </div>

      <input class="custom-range" ref="audio" v-model="inputValue" @input="handleSetToTime" type="range" :min="0" :max="duration">
  </div>
    <audio :onloadedmetadata="handleOnLoadMetadata" v-on:timeupdate="handleTimeChange"
      ref="audio" autoplay :min="0" :max="duration" :src="`${url}/${player.currentTrack?.audio}`" />

    <IconButton class="play-button" :click="togglePlayTreck">
      <IconPlay v-if="!player.isPlayed" />
      <IconPause v-if="player.isPlayed" />
    </IconButton>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';

  import { usePlayerStore } from '@/stores/player'
  import { formatSecondsToTime } from '@/utils/formatTime'

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
    }
  })

  const togglePlayTreck = () => {
    player.togglePlaying()
  }

  const handleTimeChange = (e: Event) => {
    const audioEl = e.target as HTMLAudioElement
    inputValue.value = Math.floor(audioEl.currentTime)
  }

  const handleOnLoadMetadata = (e: Event) => {
    const audioEl = e.target as HTMLAudioElement
    duration.value = audioEl.duration
  }

  const handleSetToTime = (e: Event) => {
    const input = e.target as HTMLInputElement
    const time =  Number(input.value)

    audio.value!.currentTime = time ?? 0
    inputValue.value = time
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

  .info-panel {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 320px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    max-width: 320px;
    width: 320px;
    margin-bottom: 6px;
  }

  .treck-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    margin-right: 12px;
    max-width: 200px;
  }

  .treck-time {
    display: flex;
    column-gap: 4px;
    align-items: center;
    width: fit-content;
    white-space: nowrap;
  }

  .treck-time > p {
    font-size: 14px;
    font-weight: 500;
  }

  .custom-range {
    width: 100%; /* Adjust the width as needed */
    height: 10px; /* Adjust the height as needed */
    appearance: none;
    background-color: #ddd;
    border-radius: 5px;
    outline: none;
    margin: 0;
    padding: 0;

    /* Customize the track and thumb styles */
    --track-color: #3498db;
    --thumb-color: #fff;

    /* Track styles */
    background: var(--track-color);
    border: none;
    height: 100%;
    border-radius: 5px;

    /* Thumb styles */
    height: 12px; /* Adjust the thumb size as needed */
    background: var(--thumb-color);
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .play-button svg {
    width: 16px;
    height: 16px;
  }
</style>