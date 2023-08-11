<template>
  <div class="volume-wrapper">
    <div class="volume" :onClick="handleVolumeSilence">
      <IconVolume v-if="volume !== 0" />
      <IconSilence v-if="volume === 0" />
    </div>
    <div class="input-wrapper">
      <input value="props.value" @input="handleVolume" type="range" orient="vertical" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconVolume from '@/components/icons/IconVolume.vue';
import IconSilence from '@/components/icons/IconSilence.vue';

const props = defineProps<{
  volume: number
  changeVolume: (value: number) => void
  toggleSilence: () => void
}>()

const handleVolume = (e: Event) => {
  const input = e.target as HTMLInputElement
  props.changeVolume(Number(input.value))
}

const handleVolumeSilence = () => {
  props.toggleSilence()
}

</script>

<style scoped>
  .volume-wrapper {
    position: relative;
  }

  .volume {
    display: flex;
    cursor: pointer;
  }

  .volume:hover + .input-wrapper {
    display: block;
  }

  .input-wrapper:hover {
    display: block;
  }

  .input-wrapper {
    display: none;
    width: 23px;
    height: 103px;
    position: absolute;
    top: 22px;
    left: 0px;
    background-color: var(--vt-c-green-light-opacity);
    padding: 8px;
    border-radius: 6px;
  }

  input[type=range][orient=vertical] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 8px;
    height: 100%;
  }
</style>