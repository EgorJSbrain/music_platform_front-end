import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { ITrack } from '@/types/track'

export const usePlayerStore = defineStore('player', () => {
  const currentTrack = ref<ITrack | null>(null)
  const isPlayed = ref<boolean>(false)

  const setCurrentTrack = (track: ITrack) => {
    currentTrack.value = track

    isPlayed.value = true
  }

  const togglePlaying = () => {
    isPlayed.value = !isPlayed.value
  }

  return { currentTrack, isPlayed, setCurrentTrack, togglePlaying }
})
