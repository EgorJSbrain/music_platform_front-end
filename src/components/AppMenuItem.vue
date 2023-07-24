<template>
  <div @click="redirect" class="wrapper" :class="{'active': isActive }">
    <component class="icon" :is="isActive ? icon() : activeIcon()" />
    <div class="label" :class="{ closed: !isOpen }">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ROUTES, RouteNames } from '@/constants/global'
import { computed } from 'vue';

const props = defineProps<{
  label: string
  href: string
  isOpen: boolean
  icon: () => any
  activeIcon: () => any
}>()

const isActive = computed(() => router.currentRoute.value.path.includes(props.href))

const redirect = async () => {
  router.push({ path: props.href })
}

</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    border-radius: 28px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .wrapper:hover {
    background-color: var(--vt-c-gray);
  }

  .active {
    background-color: var(--vt-c-green-gray);
  }

  .active:hover {
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
