import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth';

import { getTracksByUserId } from '@/services/requests'
import type { ITrack } from '@/types/track'

export const useTracksStore = defineStore('tracks', () => {
  const { user } = useAuthStore()
  const myTracks = ref<ITrack[]>([])

  const getMyTracksByUserId = async () => {
    if (user) {
      const tracks = await getTracksByUserId(user._id)

      if (tracks) {
        myTracks.value = tracks
      }
    }
  }

  return { myTracks, getMyTracksByUserId: getMyTracksByUserId }
})
