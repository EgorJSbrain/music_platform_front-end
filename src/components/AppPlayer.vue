<template>
  <div v-if="tracks.currentTrack" >
    {{ tracks.currentTrack?.name }}
    <input type="range">
    <audio ref="audio" autoplay :src="`${url}/${tracks.currentTrack?.audio}`" v-on:play="true" />
  </div>
</template>

<script setup lang="ts">
  import { useTracksStore } from '@/stores/tracks'
import type { ITrack } from '@/types/track';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';

  const url = ref(import.meta.env.VITE_BASE_URL)
  const audio = ref<HTMLAudioElement | null>(null)
  // console.log("🚀 ~ file: AppPlayer.vue:13 ~ audio:", audio)

  const tracks = useTracksStore()

  const currentTrack = computed<ITrack | null>(() => tracks.currentTrack);

  watch(currentTrack, () => {
    if (currentTrack.value) {
      // const audio = new Audio(currentTrack.value.audio)
      // audio.play()
      // console.log('!!!', currentTrack.value)
      // console.log('---audio---',  audio.value)
      // audio.value?.play().catch((e) => console.log(e))
    }
  })

  // watchEffect(async () => {
  //   if (currentTrack.value && audio.value) {
  //     const qwe = await audio.value?.play()
  //     console.log('-qwe--', qwe)
  //   }
  // })

  onMounted(() => {
    audio.value?.play()
  })
</script>

<style scoped>

</style>