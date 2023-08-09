<template>
  <header :class="player.currentTrack ? 'small-paddings' : 'normal-paddings'">
    <AppIconButton :click="toggleMenu">
      <IconMenu />
    </AppIconButton>

    <Player />
  </header>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player'

import IconMenu from '@/components/icons/IconMenu.vue';
import Player from '@/components/AppPlayer.vue';
import AppIconButton from './AppIconButton.vue';

const player = usePlayerStore()

defineProps<{
  title?: string
  toggleMenu: () => void
}>()
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--vt-c-white-back);
  }

  header.small-paddings {
    padding: 8px 16px;
  }
  header.normal-paddings {
    padding: 18px 16px;
  }
</style>