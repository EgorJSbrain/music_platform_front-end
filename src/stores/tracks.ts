import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth';

import { getTracksByUserId } from '@/services/requests'
import type { ITrack } from '@/types/track'

// export const useTracksStore = defineStore({
//   id: 'tracks',
//   state: () => ({
//     myTracks: [] as ITrack[],
//   }),
//   getters: {
//     getMyTracks: (state) => {
//       console.log('--!!!--', state.myTracks)
//       return state.myTracks;
//     },
//   },
//   actions: {
//     async getMyTracksByUserId (userId: string) {
//       this.myTracks = await getTracksByUserId(userId) || []
//     }
//   }
// })
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

  console.log("!!!!!!myTracks:", myTracks)


  return { myTracks, getMyTracksByUserId }
})
