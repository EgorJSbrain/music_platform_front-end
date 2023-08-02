<template>
  <div>
    {{ track.name }}
  </div>
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue';
import AppIconButton from './AppIconButton.vue';
import type { ITrack } from '@/types/track';

const props = defineProps<{
  track: ITrack
}>()
console.log('---', props.track)
</script>
<style scoped>
  header {
    padding: 8px 16px;
    background-color: var(--vt-c-white-back);
  }
</style>