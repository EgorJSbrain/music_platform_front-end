import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth';

import { getTracksByUserId } from '@/services/requests'
import type { ITrack } from '@/types/track'

export const useTracksStore = defineStore('tracks', () => {
  const { user } = useAuthStore()
  const myTracks = ref<ITrack[]>([])
  const currentTrack = ref<any | null>(null)

  const getMyTracksByUserId = async () => {
    if (user) {
      const tracks = await getTracksByUserId(user._id)

      if (tracks) {
        myTracks.value = tracks
      }
    }
  }

  const setCurrentTrack = (track: ITrack) => {
    currentTrack.value = track
  }

  return { myTracks, currentTrack, getMyTracksByUserId, setCurrentTrack }
})
