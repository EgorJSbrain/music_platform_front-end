<template>
  <div @click="redirect" class="wrapper">
    <component class="icon" :is="icon()" /> <div class="label" :class="{ closed: !isOpen }">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ROUTES, RouteNames } from '@/constants/global'

const props = defineProps<{
  label: string
  href: string
  isOpen: boolean
  icon: () => any
}>()

const redirect = async () => {
  const qwe = await router.push({ name: RouteNames.about })
  console.log("🚀 ~ file: AppMenuItem.vue:20 ~ redirect ~ qwe:", qwe)
  if (router.currentRoute.value.fullPath !== props.href) {
    // window.location.href = props.href
    // // const q = await router.push('/about')
    // // console.log("🚀 ~ file: AppMenuItem.vue:22 ~ redirect ~ q:", q)
    // router.push({ name: RouteNames.login })
  }
}

</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    /* background-color: var(--vt-c-green-gray); */
    border-radius: 28px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .wrapper:hover {
    background-color: var(--vt-c-green-gray);
  }

  .label {
    font-weight: 600;
  }

  .closed {
    width: 0px;
    opacity: 0;
  }

  .icon {
    flex-shrink: 0;
    margin-right: 6px;
  }
</style>
